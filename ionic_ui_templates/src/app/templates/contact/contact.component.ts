import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Formulaire soumis', this.contact);
    this.router.navigate(['/drawer/menu/home']);
  }
}
