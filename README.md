# quotz

A Node.js application demonstrating the use of Puppeteer and Orama SDK to create a quote database and search API.

## Features:
**Quote Scraping**: Use Puppeteer to gather 100 famous quotes from a specified website, iterating through multiple pages.
**Data Enrichment**: Utilizes Orama SDK to save metadata and scraped quotes.

## REST API: Provides two endpoints:
- `/quotes`: Save a list of 100 scraped enriched quotes.
- `/search`: Enables searching for specific terms within the quote dataset using Orama's search capabilities.

## Getting Started:
Install dependencies: `npm install`
Build packages: `npm run build`
Run the API: `npm run api`

Note: This project is primarily intended as a learning exercise for Orama SDK and is subject to future enhancements.

## Potential Improvements:
- Implementation of various search types
- Development of a user-friendly interface
- Expansion of the quote dataset with user inputs
- Optimization of scraping and data processing

By clearly outlining the project's purpose, features, and potential future directions, this description provides a comprehensive overview for potential users and contributors.