import { Injectable } from '@angular/core';
import { AboutMe } from '../Models/about-me';

@Injectable({
  providedIn: 'root',
})
export class AboutMeService {
  aboutme: AboutMe;

  constructor() {
    // bio: ` I am Mohamed Mamluk, 25 years old, I am a Full-stack web developer, Most of
    // the time I use React and NextJS, but lately I learned Angular and I fell
    // in love with it, I keep in touch with new technologies and trends, I am
    // currently doing some voluntary work for
    // TEDx Youth  in my area, but
    // I am open to work`,
    this.aboutme = {
      bio: `I am Mohamed Mamluk, a 25-year-old Full-stack web developer with experience in a variety of web technologies, My primary focus has been on React and NextJS, but I recently learned Angular and have fallen in love with it, I keep up-to-date with new technologies and trends, and I'm always eager to learn more,
 I'm also open to new professional opportunities. As a Full-stack developer, I have experience with both front-end and back-end technologies, including HTML - CSS - JavaScript - TypeScript - React - Angular - Node.js - Nestjs - and MongoDB, I enjoy working on both the client and server-side of web applications, and am passionate about creating efficient and user-friendly web experiences.`,
      education: [
        {
          educationType:
            'Web development using MEARN stack - Intensive Training Program',
          place: 'ITI Cairo University branch',
          duration: {
            from: 'November 2022',
            to: 'March 2023',
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

        {
          educationType: 'Next.js & React - The Complete Guide',
          place: 'udemy',
          duration: {
            from: 'September 2021',
            to: 'November 2021',
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
          educationType: 'Programming with JavaScript',
          place: 'Coursera',
          duration: {
            from: 'October 2020',
            to: 'December 2020',
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
          educationType: 'Bachelor of Accountancy',
          place: 'Cairo University',
          duration: {
            from: 'Sept 2015',
            to: 'May 2019',
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
