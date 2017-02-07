# Process

## Backend
### User (name, total_time_meditating)
  - Create User Model √
  - Create User Migration √
  - Create User API Routes
  - Create User Controller
  - Create Serializer for User

### Meditation (name, tradition, instructions)
  - Create Meditation Model
  - Create Meditation Migration
  - Create API Routes
  - Create Meditation Controller
  - Create Serializer for Meditations

### Events (user_id, meditation_id, time(in minutes), date)
  - create Event Model
  - Create Event Migration
  - Create API Routes
  - Create Event Controller
  - Create Serializer for Event

## Prep Client
  - Add package manager (bower)
  - Add Angular, Angular-UI-Router, and Angular-Rails-Templates
  - Add to Asset Pipeline

## Client

### User
  - create user profile page with name and total time meditating
  - create a new user page
  - Add a nested route for editing user page
  - Create a User Service to connect to the backend API

### Meditation
  - create root page with list of meditations
  - add a nested route for showing single Meditations
  - create search and filter functions for Meditations
  - Create a Meditation Service to connect to backend API
  - Add a method to delete a game

### Event
  - Create Event page with list of Events
  - Add nested route for creating an event
  - Add nested route for showing event details
  - Add a nested route for editing an events details
  - Create an Event Service to connect to Backend API
  - Add a method to delete an Event
