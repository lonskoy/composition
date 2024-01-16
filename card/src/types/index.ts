import { ReactNode } from 'react';

export type BodyProps = {
    cardTitle: string;
    cardText: string;
    buttonText: string;
};

export type CardProps = {
    img?: string;
    children: ReactNode;
  };

export type ContainerProps = {
    children: React.ReactElement<CardProps>[];
  };