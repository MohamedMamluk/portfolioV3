import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-wrapper',
  templateUrl: './contact-wrapper.component.html',
  styleUrls: ['./contact-wrapper.component.css'],
})
export class ContactWrapperComponent implements OnInit {
  show = false;
  constructor() {}
  showPopup(value: boolean) {
    this.show = value;
  }
  ngOnInit(): void {}
}
