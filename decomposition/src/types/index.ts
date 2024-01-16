import { ReactNode } from 'react';

export type NewsBodyProps = {
    logoImg?: string;
    newsText: string;
    newsURL: string;
}

export type CurrencyBodyProps = {
    currency: string;
    currencyValue: number;
    currencyDifference: string;
}

export type NewsConteinerProps = {
    children: React.ReactElement<NewsBodyProps>[];
}

export type CurrencyConteinerProps = {
    children: React.ReactElement<CurrencyBodyProps>[];
}