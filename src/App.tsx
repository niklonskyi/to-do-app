import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Outlet} from "react-router";

function App() {
  return (
    <div className="App">
        <Header isLoggedIn={false}/>
            <Outlet/>
    </div>
  );
}

export default App;
