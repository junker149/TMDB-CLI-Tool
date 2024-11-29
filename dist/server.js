#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const yargs = require('yargs');
const { argv } = yargs(process.argv);
const PORT = 3000;
require('dotenv').config();
const typeMapping = {
    playing: 'now_playing',
    popular: 'popular',
    top: 'top_rated',
    upcoming: 'upcoming',
};
const fetchData = (type) => {
    const apiType = typeMapping[type];
    if (!apiType) {
        console.error(`Invalid type "${type}". Valid options are: playing, popular, top, upcoming.`);
        return;
    }
    axios_1.default.get(`https://api.themoviedb.org/3/movie/${apiType}?language=en-US&page=1`, {
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
    });
};
fetchData(argv.type);
