import React from "react";
import "./HomePage.css";

function HomePage() {
  const [userInput, setUserInput] = React.useState(""); //Storing text.
  const [movieList, setMovieList] = React.useState([]); //Storing user input in new array.

  const handleInput = (event) => {
    setUserInput(event.target.value);
  };

  //If user input is not empty, add to list.
  const addToList = () => {
    if (userInput.trim() !== "") {
      setMovieList([...movieList, userInput]);
      setUserInput("");
    }
  };

  //Clear the list.
  const clearList = () => {
    setMovieList([]);
  };
  return (
    
    //Home page container.
    <div className="home-container">
      <h1 className="header">Stream List</h1>
      <p className="welcome">Welcome to Stream List WebApp!</p>
      <input
        type="text"
        placeholder="Enter a movie/show"
        value={userInput}
        onChange={handleInput}
        className="Input"
      />
      <button onClick={addToList} className="addToList-button">Add to list</button>
      <button onClick={clearList} className="clearList-button">Clear List</button>

      <ul className="movie-list">
        {movieList.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
