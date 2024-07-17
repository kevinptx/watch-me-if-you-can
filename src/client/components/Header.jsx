import React from "react";

function Header({ showForm, setShowForm }) {
  return (
    <div className="header">
      <h1>Movie List</h1>
      <ul className="header-nav">
        <li onClick={() => setShowForm(false)}>Movies</li>
        <li onClick={() => setShowForm(true)}>Add Movie</li>
      </ul>
    </div>
  );
}

export default Header;
