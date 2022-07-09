export interface AboutMe {
  bio: string;
  education: Education[];
}
export interface Education {
  educationType: string;
  place: string;
  duration: {
    from: string;
    to: string;
  };
}
