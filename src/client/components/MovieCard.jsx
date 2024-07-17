import React, { useState } from "react";

function MovieCard({ movie, editMovie, deleteMovie }) {
  const [edit, setEdit] = useState(false);
  const [updatedMovie, setUpdatedMovie] = useState(movie);

  const handleEdit = (e) => {
    e.preventDefault();
    editMovie(movie.id, updatedMovie);
    setEdit(false);
  };

  if (edit) {
    return (
      <div className="movie-card">
        <form onSubmit={handleEdit}>
          <h2>Edit Movie</h2>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            value={updatedMovie.title}
            onChange={(e) =>
              setUpdatedMovie({ ...updatedMovie, title: e.target.value })
            }
          />
          <label htmlFor="poster">Poster:</label>
          <input
            type="text"
            value={updatedMovie.poster_path}
            onChange={(e) =>
              setUpdatedMovie({ ...updatedMovie, poster_path: e.target.value })
            }
          />
          <label htmlFor="release_date">Release Date:</label>
          <input
            type="text"
            value={updatedMovie.release_date}
            onChange={(e) =>
              setUpdatedMovie({ ...updatedMovie, release_date: e.target.value })
            }
          />
          <label htmlFor="overview">Overview:</label>
          <input
            type="text"
            value={updatedMovie.overview}
            onChange={(e) =>
              setUpdatedMovie({ ...updatedMovie, overview: e.target.value })
            }
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <img src={movie.poster_path} alt={movie.title} />
      <p>{movie.release_date}</p>
      <p>{movie.overview}</p>
      <button onClick={() => setEdit(true)}>Edit</button>
      <button onClick={() => deleteMovie(movie.id)}>Delete</button>
    </div>
  );
}

export default MovieCard;
