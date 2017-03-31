# Welcome to bundleUP!

FRONT END REPO: https://github.com/cathyob/bundleUP

DEPLOYED FRONT END: https://cathyob.github.io/bundleUP/

BACK END REPO: https://github.com/cathyob/bundleUpServer

DEPLOYED BACK END:  https://bundleupcathyob.herokuapp.com/

## About

I was inspired by my own struggle of wearing the wrong layers in Boston. I moved from Texas a little over a year before making this and am still aclimating to Boston winters. Just a few degrees difference could mean I'd be freezing one day but the next be too warm while wearing the same layers both days.

You can use this app to keep track of how you're feeling right now and describe what you're wearing, doing, and the conditions outside so you can be as comfortable as possible!

![alt text](https://raw.githubusercontent.com/cathyob/bundleUP/master/app/bundleUP-view.png "Screenshot of Home Page")

## User Stories

As a user, in order to track how I feel while wearing certain layers, I want to be able to:
- Sign-up
- Sign-in
- Change password
- Sign-out
- Create a log with data I enter such as:
  - location
  - temperature
  - feelslike temperature
  - weatherConditions
  - bottomLayers
  - topLayers
  - accessories
  - activity level (scale of 1-5)
  - comfort level (scale of 1-5)
- View my past logs
- Edit a past log
- Delete a past log

## Wireframe

Home Screen:
![alt text](https://raw.githubusercontent.com/cathyob/bundleUP/master/app/WireframeHome.png "Wireframe of Home Page")

Past Log View:
![alt text](https://raw.githubusercontent.com/cathyob/bundleUP/master/app/WireframePast.png "Wireframe of Past Logs View")

## Pitch Deck

In later iterations, I would like this app to do more with the user's data.

### User Stories

- See the weather based on a location that I enter
  - See weather right after log-in based on my last entered location
- Prefill the new log with some data prefilled based on the location I enter for weather
- Based on current feels-like temperature, see my most recent logs within a certain range of that temp to see how I dressed and felt

### Wireframe

Average Log View:
![alt text](https://raw.githubusercontent.com/cathyob/bundleUP/master/app/WireframeFuture.png "Wireframe of Average Comfort LEvel")

### Architecture

On the front end I used ember.js to display the pages and make calls to my API. I used MongoDB with Mongoose and Express to create the API. While planning, I made a diagram of my ember app which made it easier to plan how to build both parts.

## Technologies/Dependencies

This app was created using an Ember frontend and a Mongo/Express API.

For the backend API I had to ensure input for certain details were integers so I installed mongoose-integer:
https://www.npmjs.com/package/mongoose-integer
It worked perfectly for what I needed.

## Hurdles

Figuring out how to validate data and stop the form from clearing if something wasn't valid was something I hadn't seen or done yet. I spent some time looking at different forums and documentation and was trying one approach until I found ember's input helpers. I worked out the combination needed and this solution, from finding the documentation, completion, and testing took less than 30 minutes.
I had filed an issue which shows the process I took to solve this:
https://github.com/ga-wdi-boston/capstone-project/issues/523

I added two 3rd party APIs to my API repo in preperation for a later iteration of this app; Google Maps Geocoding for latitute/logitude from a zip code and Dark Sky for the weather data based on that location. I filed an issue since this was the first time I'd used a 3rd party API in my own API and posted what I did here: https://github.com/ga-wdi-boston/capstone-project/issues/530

# Thank you!

Thank you very much for checking out my app!
Please be sure to try it out and let me know if you have any questions!
https://cathyob.github.io/bundleUP/
