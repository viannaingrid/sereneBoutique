import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <NavBar />
        <main>
          <Header/>
        </main>
      </div>
  );
}

export default App;
