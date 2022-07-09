import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  @Output() formAccepted: EventEmitter<boolean>;
  exp =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.min(3),
      Validators.pattern('[A-Za-z]{3,} [A-Za-z]{2,}'),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.exp),
    ]),
    message: new FormControl('', Validators.required),
  });

  constructor() {
    this.formAccepted = new EventEmitter<boolean>();
  }
  ngAfterViewInit(): void {}
  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }
  ngOnInit(): void {}
  sendEmail(e: Event) {
    emailjs
      .sendForm(
        'service_3i7o79v',
        'template_ytikt57',
        e.target as HTMLFormElement,
        'user_oS3huURpimWc9xQcDUf07'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          this.formAccepted.emit(true);
          this.contactForm.reset('');
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
