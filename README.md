# React Spotify App

A React search app which fetches artists from a json file and displays them as a list. 

### Prerequisites
[Json-Server](https://github.com/typicode/json-server)

### Installing
```
# Go to your project directory
cd my-app

# Clone the repository
git clone https://github.com/pankaryp/Spotify-app.git

# Install app dependencies
npm install
```
### Start the Json server
```
json-server --watch db.json --port 3001
```

### Start the app
```
npm run start
```

#### Notes:
*The app is running on port 3000. That's why we specify different port for the Json-server (3001).* The db.json file must be in the root directory in order for the app to function properly.

## Specs

* Create a menu with two choices, Search and Favorite.
* When user clicks on Search will go in home page ('/')
* When user click on Favorite will go in favorite page ('/favorite')

### Search page
* We should display an input field in which user will type the artist name
* We should display a button and when the user clicks on button will fetch the artists from `http://localhost:3000/artists?q={artist_name}`
* When we have artists we should display them in a list below input field
* Each artist card will display name, genre, year and a heart.

![Musicadd without favorite](samples/musicadd_without_favorite.png?raw=true)

* When the user clicks on heart and the artist is not already on favorites will add the artist into favorite list and make the heart red
* When the user clicks on heart and the artist is already on list will remove artist from list and will make the heart black
* When the user adds or removes artists from favorite the amount of artists in favorite list will be displayed into Favorite menu item if it is greater than zero
![Musicdd with favorite](samples/musicadd_favorites.png?raw=true)

### Favorite page
* We should display the list of favorite artists
* Each artist card will display name, genre, year and a heart
* When the user clicks on heart will remove the artist from favorite list
* If the favorite list is empty then we should display `Add your favorite artist from the search results! ♥`

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

