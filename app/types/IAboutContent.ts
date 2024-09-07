import { ReactNode } from 'react';

export interface IAboutContent {
  title: ReactNode;
  content: IContentItem[];
  image: string;
}

interface IContentItem {
  title: ReactNode;
  description: ReactNode[];
  image?: {
    src: string;
    alt: string;
  };
}
