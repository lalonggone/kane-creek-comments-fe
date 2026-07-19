# Kane Creek Comments — Front End

A web app that displays public comments from a survey about the Kane Creek
development in Grand County, Utah. It gives anyone following the issue a way to
read and search the responses, in the name of transparency and better community
engagement. More context at [kanecreekwatch.org](https://kanecreekwatch.org).

Data comes from the [comments API](../kane-creek-comments-api).

## Features
- Browse thousands of survey comments through a paginated, server-driven feed
- Keyword search across comment text
- Filter by Grand County residency
- Per-response detail pages

## Setup

Requires Node `20.14.0` / npm `10.7.0` (see `engines` in `package.json`).

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the dev server:
   ```sh
   npm run dev
   ```
3. Open http://localhost:5173/

### Configuration

The API base URL is read from `VITE_API_URL`:

| File              | Used for            | Value                          |
| ----------------- | ------------------- | ------------------------------ |
| `.env.local`      | Local dev           | `http://localhost:10000`       |
| `.env.production` | Production build    | `/api` (same-origin via nginx) |

The API must be running (see the [API README](../kane-creek-comments-api)) for
the app to return data.

## Scripts

```sh
npm run dev       # Vite dev server
npm run build     # production build to dist/
npm run preview   # serve the production build locally
npm run lint      # eslint over src (js/jsx/ts/tsx)
npm test          # open the Cypress E2E runner
```

## Testing

`npm test` opens the Cypress Test Runner. Choose **E2E Testing**, then a browser.
Specs live in `cypress/e2e/`.

## Tech
- React 18 + React Router
- TypeScript
- Vite
- SCSS (Sass)
- Cypress (E2E)

## Roadmap / To Do

- **Stats on the About page** — show total responses and how many asked to stay
  anonymous (`x / xx`). The API's `/stats` endpoint already returns these totals;
  this is front-end wiring.
- Shorten the About page and fix typos
- Capitalization pass across copy
- A random-response route
- Favorites — track and surface a "most favorited" list
- Consider an additional font
- A login (open question — needed for what?)
