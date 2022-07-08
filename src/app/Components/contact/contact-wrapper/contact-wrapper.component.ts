import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-wrapper',
  templateUrl: './contact-wrapper.component.html',
  styleUrls: ['./contact-wrapper.component.css'],
})
export class ContactWrapperComponent implements OnInit {
  exp =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.min(3),
      Validators.pattern('[A-Za-z]{3,}'),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.exp),
    ]),
    message: new FormControl('', Validators.required),
  });
  constructor() {}

  ngOnInit(): void {}

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }
}
