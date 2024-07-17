import data from "../data/movies.json" assert { type: "json" };

const movies = data.results;
let movieId = movies.length + 1;

const controllerFuncs = {
  getMovies: (req, res) => {
    res.status(200).send(movies);
  },
  postMovie: (req, res) => {
    const newMovie = req.body;
    newMovie.id = movieId;
    movies.push(newMovie);
    movieId++;
    res.status(201).send(movies);
  },
  putMovie: (req, res) => {
    const { id } = req.params;
    const updatedMovie = req.body;
    const index = movies.findIndex((movie) => movie.id === +id);
    if (index === -1) {
      res.status(404).send("Movie not found");
    }
    movies[index] = updatedMovie;
    res.status(200).send(movies);
  },
  deleteMovie: (req, res) => {
    const { id } = req.params;
    const index = movies.findIndex((movie) => movie.id === +id);
    if (index === -1) {
      res.status(404).send("Movie not found");
    }
    movies.splice(index, 1);
    res.status(200).send(movies);
  },
};

export default controllerFuncs;
