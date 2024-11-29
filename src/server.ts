#!/usr/bin/env node
import axios from 'axios';
const yargs = require('yargs');
const { argv } = yargs(process.argv);
const PORT = 3000;
require('dotenv').config();

interface movie{
    original_title: string;
    title: string;
}

interface ApiResponse {
    results: movie[];
}

const typeMapping: Record<string, string> = {
    playing: 'now_playing',
    popular: 'popular',
    top: 'top_rated',
    upcoming: 'upcoming',
};

const fetchData = (type: string) => {
    const apiType = typeMapping[type];
    if (!apiType) {
        console.error(`Invalid type "${type}". Valid options are: playing, popular, top, upcoming.`);
        return;
    }
    axios.get<ApiResponse>(`https://api.themoviedb.org/3/movie/${apiType}?language=en-US&page=1`, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.token}`
        }
    }).then((res) => {
        console.log(res.data.results.map((movie) => {
            return movie.title;
        }));
    }).catch((err) => {
        console.log(err);
    })
};


fetchData(argv.type);