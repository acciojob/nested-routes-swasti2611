
import React from "react";
import './../styles/App.css';
import Header from "./Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
    <div>
    <Header></Header>
    </div>
    
    <Outlet/>
    
        
        
    </div>
  )
}

export default App
