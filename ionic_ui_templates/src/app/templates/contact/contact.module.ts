import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactComponentRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactComponentRoutingModule
  ],
  declarations: [ContactComponent]
})
export class ContactComponentModule {}
