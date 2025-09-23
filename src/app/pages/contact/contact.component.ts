import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Contact } from '../../models/portfolio.model';
import { contacts } from '../../models/portfolio.data';

@Component({
    selector: 'app-contact',
    imports: [CommonModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
    contactData: Contact = contacts;
}
