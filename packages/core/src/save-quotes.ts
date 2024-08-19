import { insertMultiple, Orama } from "@orama/orama";

export type Quote = { text: string, author: string };

export const saveQuotes = async (quotes: Quote[], db: Orama<Quote>) => {
    const res = await insertMultiple<Orama<any>>(db, quotes);
    return res;
};
