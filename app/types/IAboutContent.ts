import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface IAboutContent {
  title: ReactNode;
  content: IContentItem[];
  image: {
    src: StaticImageData;
    alt: string;
  };
}

interface IContentItem {
  title: ReactNode;
  description: ReactNode[];
  image?: {
    src: StaticImageData;
    alt: string;
  };
}
