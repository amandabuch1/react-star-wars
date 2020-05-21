const starshipEndpoint = 'https://swapi.dev/api/starships/';


class Starship_API {
    getAllStarships() {
        // console.log("hello from get all starships");
        return fetch(starshipEndpoint)
            .then( res => res.json())
            .then(json => json.results)
    }
    getOneStarship(id) {
        // console.log("hello from get all starships");
        return fetch(starshipEndpoint + id + '/' )
            .then( res => res.json())
    }
}

export default new Starship_API();


