import React from "react"; //Needed for the main react app.
import { BrowserRouter as Router } from "react-router-dom"; //Needed to allow navigation and routing in the NavMenu.
import NavMenu from "./NavMenu"; //Importing the NavMenu component.
import RoutePaths from "./RoutePaths"; //Importing the RoutePaths component.
import "./App.css"; //Importing the App.css file for styling.

//Main app.
function App() {
  return (
    <Router>
      <NavMenu />
      <RoutePaths />
    </Router>
  );
}

export default App;