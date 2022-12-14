import { Component, OnInit } from '@angular/core';

import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html',
})
export class ContactDetailComponent implements OnInit {
  contact: Contact = new Contact(
    '1',
    'R. Kent Jackson',
    'jacksonk@byui.edu',
    '208-496-3771',
    '../../assets/images/jacksonk.jpg',
    null
  );
  console = console;
  constructor() {}

  ngOnInit(): void {}
  editContact(event: Event) {}
  deleteContact(event: Event) {
    this.contact = null;
  }
}
