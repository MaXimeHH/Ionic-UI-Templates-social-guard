import { contextBridge, ipcRenderer } from 'electron';

// Liste des mots-clés ou expressions régulières pour détecter du contenu inapproprié
const inappropriateWords: RegExp[] = [
  /sexuel/i, /nudité/i, /porn/i, /violence/i, /meurtre/i, /assaut/i, /abus/i,
  /sang/i, /terrorisme/i, /viol/i
];

// Fonction pour masquer les tweets inappropriés
function hideInappropriateTweets() {
  const tweets = document.querySelectorAll('article');  // Sélection des tweets

  tweets.forEach(tweet => {
    const tweetText = tweet.innerText || "";  // Récupérer le texte du tweet
    inappropriateWords.forEach(word => {
      if (word.test(tweetText)) {
        console.log('Contenu inapproprié détecté : ', tweetText);
        (tweet as HTMLElement).style.display = 'none';  // Masquer le tweet
      }
    });
  });
}

// Utiliser MutationObserver pour surveiller les nouveaux tweets
function observeDOMChanges() {
  const targetNode = document.body;

  const config: MutationObserverInit = { childList: true, subtree: true };

  const callback = function(mutationsList: MutationRecord[], observer: MutationObserver) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        hideInappropriateTweets();
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}

// Fonction pour créer le bouton flottant
function createFloatingButton() {
  const button = document.createElement('div');

  // Style pour le bouton
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.right = '20px';
  button.style.width = '50px';
  button.style.height = '50px';
  button.style.borderRadius = '50%';
  button.style.backgroundColor = '#1DA1F2';
  button.style.color = '#fff';
  button.style.display = 'flex';
  button.style.justifyContent = 'center';
  button.style.alignItems = 'center';
  button.style.fontSize = '20px';
  button.style.cursor = 'pointer';
  button.style.zIndex = '10000';

  button.innerHTML = 'P';

  // Événement au clic : envoyer l'utilisateur à la page des points
  button.addEventListener('click', () => {
    console.log("Redirection vers la page des points...");
    ipcRenderer.send('go-to-points-page');
  });

  // Ajouter le bouton au document
  document.body.appendChild(button);
}

// Exécuter les actions une fois que le DOM est complètement chargé
window.addEventListener('DOMContentLoaded', () => {
  hideInappropriateTweets();
  observeDOMChanges();
  createFloatingButton();
});

contextBridge.exposeInMainWorld('electronAPI', {
  send: (channel: string, data?: any) => ipcRenderer.send(channel, data)
});


