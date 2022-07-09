import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  name: string = '';
  constructor() {}
  setName(value: string) {
    this.name = value;
    console.log('Name service has changed: ' + this.name);
  }
}
