# soccer-project

QUESTION: You received a token from a paid api, ¿Where would you store the register according to the project structure in Laravel? 

ANSWER: One solution is to store as an ENVIROMENT VARIABLE on .env file, the other one is to request the token from the api and store it in the controller, using sessions, localstorage, etc.

This repository contains 2 projects:

vue: Frontend
laravel:Backend

All the implementation is about soccer players and it was implemented according to the requeriments.

1. To run vue, just run:

npm install

to download all dependencies, after that run:

npm run serve

2. To run laravel, you will need:

-php
-composer
-artisan
-and in my case I'm using a simple sqlite3 to store my database

To run backend project just type:

php artisan serve

This project contains some validations and two endpoints to test creation and list of players:

example:

http://127.0.0.1:8000/create-player
http://127.0.0.1:8000/list

That's all!

It was pretty a interesting experience


