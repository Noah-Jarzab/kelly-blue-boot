# Kelly's Blue Boots

## Project Description

Kelley Blue Boot is an app to show the user market values of shoes and build a collection of shoes they own. It will feature an API that contains data about different collections of shoes. I would like to incorporate a "condition" functionality that shows each shoe value based on what condition they are currently in. As a stretch goal, I would also like to add an option where the user can post their items for sale to other users. With the collections I would also like to incorporate a date the company made the shoes so people can browse the newest styles.

## Technologies

- Django REST Framework
- React
- Heroku and Git/GitHub for deployment and organization

## Wire Frames

![Web/Browser wire frame](/Kelly_Blue_Boot1.jpg)

## User Stories

**MVP**
- As a user I would like to have a way to brose the different shoes
- As a user I would like to be able to see the MSRP of all the shoes on the app
- As a user I would like to be able to build a collection of shoes from the database
- As a user I would like to see a description of all the shoes in the database
- As a user I would like to be able to easily navigate between the different pages on the app
- As a user I would like to have an interactive and appealing UX
- As a user I would like to see an about page that has descriptive explanations about the data on each shoe
- As a user I would like to have a general about page that explains how to use and navigate the app

**Stretch Goals**

- As a user I would like to login so I can add my own data and save it
- As a user I would like to be able to save my own personal collection of shoes and see what their net worth is
- As a user I would like to be able to search for specific shoes
- As a user I would like to be able to filter the shoe options based on who makes them, price range, style, etc.
- As a user I would like to see some of the newest shoes made so I can keep up with the newest trends
- As a user I would like to have a "wish list" and a "collection" of shoes that I want and shoes that I own, respectively

## API

The API that the app will use will be made with Django and will contain all relevant info on each shoe. The required information for each shoe will include 'make', 'MSRP', 'image', 'seller_url', 'condition', 'description', etc. Each user will also be stored in the API and have a 'collection' value which will contain all of the individual shoe pairs the user has added to their profile.

## Component Hierarchy

Component | Description 
--------- | -----------
App | This will access the API and include React Router
Header | This will be always visible and have a general navigation as well as a Login/UserProfile link
Home | This will be the landing page with general links to broad lists and/or groups of shoes from the database
Browse | This page will bring up an interactive browsing function where you can filter shoes based on a variety of values. The landing page will filter alphabetically through all the shoes automatically
Collections | This will bring up specific categorical buttons to browse shoes within certain parameters
Collection | This will contain the data of each selected collection in the form of shoe "cards"
Shoe | This page will have all the detailed information about the shoe selected as well as buttons to add it to personal collections
Login/User | This page will either be a login/create user page or will contain each individuals collections and profile information