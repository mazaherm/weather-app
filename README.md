# React Weather App

## Introduction
This application uses the Open Weather Map API to call weather data. It updates every 3 hours.

## Requirements
I have hidden the api key that I use for this application.
To get a free api key go to the open weather API website by clicking [here](https://openweathermap.org/price)

Sign up and you should be emailed an api key which should become active after about 15 minutes!

## How to setup and use
1. Clone the repo onto your machine
2. Open up a terminal and cd into the project folder
3. Go to `src/app/services/CallWeatherAPI/CallWeatherAPI.js`
4. Replace `config.API_KEY` with your new API Key
```
const URL = const API_KEY = config.API_KEY
```
5. Save and in the terminal run `yarn install`
6. Then run `yarn start` and go to `http://localhost:8080/` in your browser

## Technologies used
- HTML/CSS (using sass)
- React
- Webpack
- Babel
- Jest
- ESLint
- Husky
- Atomic Design Principles
