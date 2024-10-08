import puppeteer from "puppeteer";
import { Quote } from "./save-quotes";

export const scraper = async () => {
    const data: Quote[] = [];

    const browser = await puppeteer.launch({
        // headless: false,
        defaultViewport: null,
    });

    const page = await browser.newPage();    

    let currentPage = 1;

    while (true) {
        await page.goto(`https://quotes.toscrape.com/page/${currentPage}/`, {
            waitUntil: "domcontentloaded",
        });

        const nextData = await page.evaluate(() => {
            const _nextData: Quote[] = [];
    
            const quotes = document.querySelectorAll(".quote");
    
            quotes.forEach((quote) => {
                const text = quote?.querySelector(".text")?.innerHTML;
                const author = quote?.querySelector(".author")?.innerHTML;
    
                if (!text || !author) return;
    
                _nextData.push({ text, author });
            });
    
            return _nextData;
        });

        if (nextData.length === 0) {
            break;
        }
        
        data.push(...nextData);
        currentPage += 1;
    }

    await browser.close();

    return data;
};
