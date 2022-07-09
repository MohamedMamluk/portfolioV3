export interface ProjectData {
  id: number;
  title: string;
  image: string;
  secondaryTitle: string;
  description: string;
  link: string;
  mainFramework: string;
  libraries: string[];
}
export enum Frameworks {
  React = 'React',
  Angular = 'Angular',
  Vue = 'Vue',
}
