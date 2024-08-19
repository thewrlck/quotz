import { create, Orama } from "@orama/orama";
import { Quote } from "./save-quotes";

export type Db = Orama<Quote>;

export const db = async () => {
    const _db = await create({
        schema: {
            text: "string",
            author: "string",
        },
    });

    return _db;
};
