import React from "react";

function MovieForm({ addMovie }) {
  const handleForm = (e) => {
    e.preventDefault();
    const newMovie = {
      title: e.target.title.value,
      poster: e.target.poster.value,
      release_date: e.target.release_date.value,
      overview: e.target.overview.value,
    };
    addMovie(newMovie);
  };

  return (
    <div>
      <h1>Add a Movie</h1>
      <form className="movie-form" onSubmit={handleForm}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="poster">Poster:</label>
        <input type="text" id="poster" name="poster" />
        <label htmlFor="release_date">Release Date:</label>
        <input type="text" id="release_date" name="release_date" />
        <label htmlFor="overview">Overview:</label>
        <input type="text" id="overview" name="overview" />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default MovieForm;
