import { Injectable } from '@angular/core';
import { ProjectData } from '../Models/projects-data';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projectsData: ProjectData[];
  constructor() {
    this.projectsData = [
      {
        title: 'E-Mena',
        secondaryTitle: 'News',
        description:
          'E-Mena is a news website focusing on the MiddleEast and North Africa E-Sports scene made with the MERN stack.',
        image: 'assets/e-mena.jpg',
        mainFramework: 'React',
        link: 'https://e-mena.vercel.app/',
        libraries: [
          'NextJS',
          `NodeJS`,
          'MongoDB',
          'TailwindCSS',
          'MUI',
          'SwiperJS',
          'DraftJS',
        ],
      },
      {
        title: 'FindAndWatch',
        secondaryTitle: 'Movies-TV',
        description: 'Find information about the latest movies.',
        image: 'assets/movies.png',
        mainFramework: 'React',
        link: 'https://netflix-clone-mamluk.vercel.app/',
        libraries: [
          'NextJS',
          `NodeJS`,
          'GraphQL',
          'Apollo server/client',
          'TailwindCSS',
          'SwiperJS',
        ],
      },
      {
        title: 'Comfy Sloth',
        secondaryTitle: 'online-store',
        description: 'An E-commerce website',
        image: 'assets/comfy.png',
        mainFramework: 'React',
        link: 'https://next-store-mamluk.vercel.app/',
        libraries: ['NextJS', 'Styled Components', 'Redux'],
      },
      {
        title: 'RPS',
        secondaryTitle: 'game',
        description: 'A basic Rock Paper Scissors Game',
        image: 'assets/rps.png',
        mainFramework: 'React',
        link: 'https://rpsfinal.netlify.app/',
        libraries: ['React', 'TailwindCSS', 'GSAP'],
      },
    ];
  }
  projects(filter: string) {
    if (filter === 'all') return this.projectsData;
    return this.projectsData.filter(
      (project) => (project.mainFramework = filter)
    );
  }
}
