import React, { useState, useEffect } from "react";
import "./MoviesPage.css";

const TMDB_API_KEY = "4614b2d7ace6d4303cc7b7c89d7aa690"; //Got the API key from TMDB (The Movie Database) after applying for it.

function MoviesPage() {
  const [SearchMovie, setSearchMovie] = useState("");
  const [SearchResult, setSearchResult] = useState([]);

  //Retrieves the search results from the local storage.
  useEffect(() => {
    const savedResults = localStorage.getItem("SearchResult");
    if (savedResults) {
      setSearchResult(JSON.parse(savedResults));
    }
  }, []);

  const handleSearch = async () => {
    if (!SearchMovie.trim()) return;

    //Searches for a movie using the TMDB API. So I dont have to worry about doing any write code for complex search conditions.
    //URL is found on TMDB API documentation "Search & Query for Details"
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(SearchMovie)}`);
    const json = await response.json();

    //Sets the search result to the state variable SearchResult.
    //If there are no results, it will return an empty array.
    setSearchResult(json.results || []);

    //Save the search results to the local storage.
    localStorage.setItem("SearchResult", JSON.stringify(json.results || []));
  };

  return (
    <div className="movies-container">
      <h2>Search Movies (TMDB)</h2>
      {/* Input field for searching movies */}
      <input
        type="text"
        placeholder="Enter a movie title"
        value={SearchMovie}
        onChange={(e) => setSearchMovie(e.target.value)}
        className="movie-search-input"
      />
      {/* Button to search for movies */}
      <button onClick={handleSearch} className="movie-search-button">Search</button>

      <div className="movie-results">
        {SearchResult.map((MovieName) => (
          <div key={MovieName.id} className="movie-result">
            {MovieName.poster_path && (
              <img
              //Movie image URL From Image TMDB API documentation under Images > Basic.
              //Poster_path is found here: 🔗 https://developer.themoviedb.org/reference/search-movie.
                src={`https://image.tmdb.org/t/p/w500${MovieName.poster_path}`}

              //If the image is not found, it will show Movie Name title instead.
                alt={MovieName.title}
              />
            )}
            {/* Movie title, rating and release date. Got it from Dev documentation at TMDB */}
            <h3>{MovieName.title}</h3>
            <p>Rating: {MovieName.vote_average}</p>
            <p>{MovieName.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesPage;
