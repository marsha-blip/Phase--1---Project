## Phase-1-Project

A single-page web app built with HTML, CSS and JavaScript, fetching data from a public API (or a local json-server) to showcase dynamic content—no page reloads, full interaction.

## Table of Contents

Project Overview

.Features & User Stories

.Tech Stack

.Setup & Installation

.Usage

.Interactivity & Events

.API / Mock Server

.Known Challenges

.Stretch Goals

.Contributing & License

## Project Overview

This single-page application dynamically fetches and displays a collection of items (e.g., books, art, recipes, movies) via AJAX, without any reloads. It implements core features like search, filtering, likes and dark mode—all within one HTML file.

## Features & User Stories

Search: As a user, I want to search items by keyword, so I can quickly find what interests me.

Filter: As a user, I want to filter items (e.g. by category), so I can explore subsets.

Like/upvote: As a user, I want to like items, so I can track favorites.

Dark/Light Mode: As a user, I want to toggle themes, so I can choose my preferred display.

Each feature ties to at least one distinct event listener (input, click, change) and unique callback functions.

## Tech Stack

HTML5 & CSS3 (Flexbox/Grid, responsive design)

Vanilla JavaScript (ES6+)

Fetch API for asynchronous data requests (JSON)

Array methods: forEach, filter, map, etc. to process and display data

Optional: json-server for local mock backend

## Setup & Installation

## Prerequisites

Modern browser (Chrome, Firefox, Edge)

Node.js and NPM (only if you plan to use json-server)

Steps
Clone this repo and navigate into it:

bash
Copy
Edit
git clone https://github.com/yourname/your-spa.git
cd your-spa
(Optional – using json-server) Install dependencies:

bash
Copy
Edit
npm install
(Optional) Start mock API:

bash
Copy
Edit
npm run start:server
Open index.html directly in your browser or serve it via a local static server.

App should load, fetch data, and be ready!

## Usage

Search bar: type to instantly filter displayed items using input event

Category filter: dropdown changes filter the item list via change event

Like buttons: click events toggle a "liked" state and update the UI

Theme toggle: click to switch between dark/light modes, stored in local storage

## Interactivity & Events

Input event for live search

Change event on filters

Click event for likes and theme toggle
Each has its own callback, added via element.addEventListener(...), avoiding inline HTML events.

API / Mock Server
Using a public API
Endpoint: https://api.example.com/items returning 5+ items, each with id, name, image, etc.

Or with json‑server (stretch guide):
json
Copy
Edit
// db.json
{
"items": [
{ "id": 1, "name": "Foo", "category": "A", "likes": 0 },
/* … at least 5 items … */
]
}
Start server

## Stretch Goals

Persist likes via PATCH requests to json-server

Add pagination, lazy loading, or sorting

Improve UI with subtle transitions, accessibility features

## Contributing & License

Contributions are welcome! Please open issues or PRs, or message me on Slack.
Licensed under the MIT License.

## Tips to Hit Requirements

3+ distinct event listeners: input search, change filter, click like/theme toggle

Use array iteration: e.g. items.filter(...).map(...) to render item cards

DRY functions: use reusable render functions for items and UI updates

## Author: Mary Itumo
