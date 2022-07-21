# server-deployment-practice-2

HTTP Express Server Deployed to Heroku

Deployement URL: <https://hardenchris-server-deploy-dev2.herokuapp.com/>

![Data Flow](/UML.png)
## Installation

to install run `git clone git@github.com:HardenChris/server-deployment-practice-2.git`

`cd` into 'server deployment-practice-2'

run `npm install`

## Usage
to start server run: `npm start`

to test server run: `npm test`

## Routes

GET `/message`: returns a list of Message objects.
POST `/message`: creats a message, saves it and returns the list of messages.

## Features
* Message:
    * Contains string: text
    * Contains string: author
