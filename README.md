# React Spotify App

A simple React list.

## Specs

* Create a menu with two choices, Search and Favorite.
* When user clicks on Search will go in home page ('/')
* When user click on Favorite will go in favorite page ('/favorite')

### Search page
* We should display an input field in which user will type the artist name
* We should display a button and when the user clicks on button will fetch the artists from `http://localhost:3000/artists?q={artist_name}`
* When we have artists we should display them in a list below input field
* Each artist card will display name, genre, year and a heart.

![Musicadd without favorite](/musicadd_without_favorite.png?raw=true)

* When the user clicks on heart and the artist is not already on favorites will add the artist into favorite list and make the heart red
* When the user clicks on heart and the artist is already on list will remove artist from list and will make the heart black
* When the user adds or removes artists from favorite the amount of artists in favorite list will be displayed into Favorite menu item if it is greater than zero
![Musicdd with favorite](/musicadd_favorites.png?raw=true)

### Favorite page
* We should display the list of favorite artists
* Each artist card will display name, genre, year and a heart
* When the user clicks on heart will remove the artist from favorite list
* If the favorite list is empty then we should display `Add your favorite artist from the search results! ♥`

