import { Orama, search } from "@orama/orama";
import { Quote } from "./save-quotes";

export const searchQuotes = async (term: string, db: Orama<Quote>) => {
    const res = await search<Orama<any>>(db, {
        term,
    });

    return res.hits;
};
