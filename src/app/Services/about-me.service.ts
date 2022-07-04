import { Injectable } from '@angular/core';
import { AboutMe } from '../Modules/about-me';

@Injectable({
  providedIn: 'root',
})
export class AboutMeService {
  aboutme: AboutMe;

  constructor() {
    this.aboutme = {
      bio: ` I am Mohamed Mamluk, 25 years old, I am a front-end web developer, Most of
      the time I use React and NextJS, but lately I learned Angular and I fell
      in love with it, I keep in touch with new technologies and trends, I am
      currently doing some voluntary work for
      TEDx Youth  in my area, but
      I am open to work`,
    };
  }
  get bio() {
    return this.aboutme.bio.split(',');
  }
}
