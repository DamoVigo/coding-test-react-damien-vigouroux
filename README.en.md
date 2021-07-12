# 04h11 Coding Test (React)

Welcome to the 04h11 Test Project (Front-End only).

## Tasks

Your main goal will be to complete this repo. Ultimately, you should have a working website, containing the two following pages. These pages will test your React skills, your CSS skills, and your abilities to interact with a RESTful API. _The link to the API will be given later._

### Home Page

A simple page, containing a title, a subtitle and a link to the _User_ page.
We do not ask for everything to be _Pixel Perfect_, but the final result should be at least similar in proportions to the mockup.

![Home Page](src/assets/images/home.page.png)
__Important :__ The background and the bubbles must be done with CSS.

### User Page

This page features a dropdown of users (its content comes from a __list__ call from the API), some information about the selected user, and a list of articles linked to this user (coming from a __get__ call from the API).

When the dropdown's value changes, the website should redirect itself to a URL containing the selected user's ID. If no ID is given to the URL, we consider that we are showing the details for the first user in the list.

For example, if we have two users (IDs 1 and 2) :

- `/users` and `users/1` will show information for the #1 user
- `/users/2` will show information for the #2 user

__Warning__, this does not mean that a page refresh is necessary. It would be more optimal to not _mount/unmount_ the page each time a change occurs...

![User Page](src/assets/images/user.page.png)

## Details for the [API](https://coding-test-api.04h11.com)

[https://coding-test-api.04h11.com](https://coding-test-api.04h11.com)

2 calls will be made available on this API. A __list__ and a __get__.

- __list__ : `${ API }/users` will return an array of users
- __get__ : `${ API }/users/${ id }` will return the details for a given user (with the articles linked to him)

## Hints

- The variables to use for the styles are located here : `/src/assets/scss/imports/_variables.scss`
- The route to the API can be updated here : `/src/constants/api.js`
- All the interactions between the Front-End and the API should happen in __services__
- Some components can be created, to demonstrate your understanding of them. If necessary, use the folder `/src/components/`
- We will also consider the way you use Git

## Start the project

### `npm install`

Installs the dependecies

### `npm start`

Starts the app in dev mode<br>
Dev url : [http://localhost:3000](http://localhost:3000)
