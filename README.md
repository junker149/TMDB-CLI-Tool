# TMDB-CLI-Tool

A command-line interface (CLI) tool to fetch and display movie data from the TMDB (The Movie Database) API. This tool lets you quickly retrieve information about now-playing, popular, top-rated, and upcoming movies.

## Features
- Fetch movie data from TMDB API.
- Supports multiple movie categories:
  - Now Playing
  - Popular
  - Top Rated
  - Upcoming
- Easy-to-use command-line arguments for flexibility.

## Prerequisites
- Node.js installed on your system.
- TMDB API key (sign up at [TMDB](https://www.themoviedb.org/) to get one).

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/junker149/TMDB-CLI-Tool.git
   cd TMDB-CLI-Tool

2. Install dependencies:
    ```bash
    npm install

3. Create a .env file in the root of the project and add your TMDB API key:
    ```bash
    token=YOUR_TMDB_API_TOKEN

4. Make the CLI tool executable:
    ```bash
    chmod +x ./src/server.ts

## Usage
- Run the CLI tool using the following format:
    ```bash
    tmdb-app --type <category>

## Available Categories
- ```playing```  - Fetches now playing movies.
- ```popular```  - Fetches popular movies.
- ```top```      - Fetches top movies.
- ```upcoming``` - Fetches upcoming movies.

## Built With
- Node.js
- TypeScript
- Axios
- Yargs

## Acknowledgments
TMDB API for providing movie data.