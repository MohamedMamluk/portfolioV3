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
      education: [
        {
          educationType: 'Bachelor of Accountancy',
          place: 'Cairo University',
          duration: {
            from: 'Sept 2015',
            to: 'May 2019',
          },
        },
        {
          educationType: 'Web Development Challenger course',
          place: 'Udacity-FWD',
          duration: {
            from: 'July 2020',
            to: 'September 2020',
          },
        },
        {
          educationType: 'Programming with JavaScript',
          place: 'Coursera',
          duration: {
            from: 'October 2020',
            to: 'December 2020',
          },
        },
        {
          educationType: 'React Tutorial and Projects Course',
          place: 'udemy',
          duration: {
            from: 'January 2021',
            to: 'February 2021',
          },
        },

        {
          educationType: 'Next.js & React - The Complete Guide',
          place: 'udemy',
          duration: {
            from: 'September 2021',
            to: 'November 2021',
          },
        },
        {
          educationType: 'Web development using Angular',
          place: 'ITI Material',
          duration: {
            from: 'May 2022',
            to: 'June 2022',
          },
        },
      ],
    };
  }
  get bio() {
    return this.aboutme.bio.split(',');
  }
  get education() {
    return this.aboutme.education;
  }
}
