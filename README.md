# URL Shortener

A simple URL shortener service built with Node.js, Express, and MongoDB.

## Features

- Shorten long URLs
- Redirect to original URLs using short IDs
- Track visit history with timestamps

## Project Structure
Files
- ### index.js
The main entry point of the application. Sets up the Express server, connects to MongoDB, and defines routes.

- ### connection.js
Handles the connection to the MongoDB database.

- ### urlModels.js
Defines the Mongoose schema and model for URLs.

- ### urlController.js
Contains the logic for handling URL shortening and redirection.

- ### urlRoutes.js
Defines the routes for the URL shortening API.

