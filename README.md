# Welcome to Ember!

## User Stories
As a user, I want to be able to:
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
  - *Later iteration* Create a log with some data prefilled based on my location
- View my past logs
- Edit a past log
- Delete a past log
- See the weather based on a location that I enter
  - *Later iteration* See weather right after log-in based on my last entered location
- *Later iteration* Based on current feels-like temperature, see my most recent logs within a certain range of that temp to see how I dressed and felt

## Wireframe
![alt text](https://raw.githubusercontent.com/cathyob/bundleUP/develop/app/Wireframe.png "Wireframe")

## Hurdles
Figuring out how to validate data and stop the form from clearing if something wasn't valid was something I hadn't seen or done yet. I spent some time looking at different forums and documentation and was trying one approach until I found ember's input helpers. I worked out the combination needed and this solution, from finding the documentation, completion, and testing took less than 30 minutes.
I had filed an issue which shows the process:
https://github.com/ga-wdi-boston/capstone-project/issues/523
