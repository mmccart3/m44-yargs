const yargs = require('yargs');
const Movie = require('./utils/index');

function app (input) {
    if (input.add) {
        // code for adding just one movie
        const movieName = input.title;
        const actorName = input.actor;
        const directorname = input.director;
        const newMovie = new Movie(movieName,actorName,directorname);
        newMovie.add();
} else if (input.addmulti) {
            // code for adding four movies
            const movie1 = new Movie(input.title1,input.actor1,input.director1);
            movie1.add();
            const movie2 = new Movie(input.title2,input.actor2,input.director2);
            movie2.add();
            const movie3 = new Movie(input.title3,input.actor3,input.director3);
            movie3.add();
            const movie4 = new Movie(input.title4,input.actor4,input.director4);
            movie4.add();
} else {
        console.log ("Command not recognised");
        };
    };

app(yargs.argv);