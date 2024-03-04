
import React from "react";
import './../styles/App.css';
import Header from "./Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <main>
    <div>
    <Header></Header>
    </div>
    
    <Outlet/>
    
        
        
    </main>
  )
}

export default App
