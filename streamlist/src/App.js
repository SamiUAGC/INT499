import React from "react"; //need it for react app.
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; //need it for navigation.
import "./App.css"; //need it for importing css custom page settings.

function Home() {
  const [userInput, setUserInput] = React.useState(""); //take user input as a string.
  const [movieList, setMovieList] = React.useState([]); //movie list as an array.

  const handleInput = (event) => {
    setUserInput(event.target.value);
  };
//add user input to the movie list array.
  const addToList = () => {
    if (userInput.trim() !== "") {
      setMovieList([...movieList, userInput]);
      setUserInput("");
    }
  };

  //return the home page with input field and movie list.
  return (
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
      <button onClick={addToList} className="add-button">Add to list</button>

      <ul className="movie-list">
        {movieList.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
}

//return the other items on the list (will work on in week 4 and 5).
function Movies() {
  return <h2>Movies Page - Will work on it in Week 4</h2>;
}

function Cart() {
  return <h2>Cart Page - Will work on it in Week 4</h2>;
}

function About() {
  return <h2>About Page - Will work on it in Week 5</h2>;
}

//return the navigation bar with the home, movies, cart and about pages.
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <img src="/HomeIcon.png" alt="HomeIcon" className="nav-home-icon" />Home
              </Link>
            </li>
            <li>
              <Link to="/movies">
                <img src="/MovieIcon.png" alt="MovieIcon" className="nav-movie-icon" />Movies
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <img src="/CartIcon.png" alt="CartIcon" className="nav-cart-icon" />Cart
              </Link>
            </li>
            <li>
              <Link to="/about">
                <img src="/AboutIcon.png" alt="AboutIcon" className="nav-about-icon" />About
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;