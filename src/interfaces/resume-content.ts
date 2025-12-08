export type Translate = Record<'nl' | 'en', string>;

export interface ResumeContent {
  readonly firstName: string;
  readonly lastName: string;
  readonly title: Translate;
  readonly avatarSrc: string;

  readonly info: {
    readonly name: Translate;
    readonly content: Translate;
  }[];

  readonly workExperience: {
    readonly name: Translate;
    readonly items: {
      readonly logoSrc: string;
      readonly name: string;
      readonly location: string;
      readonly position: Translate;
      readonly started: Translate;
      readonly ended: Translate;
      readonly summary: Translate;
      readonly technologies: string[];
    }[];
  };

  readonly credits: {
    readonly message: Translate;
    readonly url: string;
  };
}
