# Grass Monkey Bus Tour 2019

I created this so my frisbee team's end-of-season party bus tour could keep our teammates and friends who were meeting up with us later in the loop of where to meet up with us!

I used AWS code pipeline to get this partially up and running here: https://codepipeline-monkey-demo.s3.us-east-2.amazonaws.com/index.html#/about

Need to figure out the RDS features to get the database to work. I could modify the code to make it mostly a front-end app, but I think figuring out RDS will be important.

You can find a deployed heroku version here: https://grassmonkeys.herokuapp.com

## Built With

This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`). Oh, and a lot of love!


### Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)


### Installing

Steps to get the development environment running:

1. Download this project.
2. `npm install`
3. `npm start`


## Notes

This was setup with a database since I used a free heroku site. I wanted the data to persist after heroku shuts it down. There were a few things I rushed through just to get it done in time, but all in all it served its purpose!

### Completed Features

- [x] Header shows where the team is at.
- [x] Admin login page to actually be able to go change the location and reset the wildcards if they get out of hand.
- [x] Countdown timer!
- [x] Randomize who's on the timer.

### Next Steps

Features that you would like to add at some point in the future.

- [ ] Actually integrate with Google Maps, instead of using a static map photo.
- [ ] Perhaps randomize the timer a bit, or add it to the admin page.
- [ ] Put the list of players/friends in the DB, and add an admin side to be able to change that if needed.

## Authors

Dustin Fedie


## Acknowledgments

* Hat tip to GitHub user pughpugh's react-countdown-clock: https://github.com/pughpugh/react-countdown-clock
