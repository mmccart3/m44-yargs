const movieArray = [];

class Movie {
    constructor (inputTitle, inputActor="Not Specified", inputDirector ="Not Specified") {
        this.title = inputTitle;
        this.actor = inputActor;
        this.director = inputDirector;
    }
    add () {
        movieArray.push(this);
        console.log(movieArray);
    }
};


module.exports = Movie;