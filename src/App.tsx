import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <React.Fragment>
      {/* TODO: here will be a basic header for doing other things.*/}
      <header className="header">
        <Header />
      </header>
      {/* TODO: We will have the home page.*/}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/search" Component={Search} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
