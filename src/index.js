import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import Women from "./components/Women";
import Shirt from "./components/Shirt";
import Groming from "./components/Groming";
import Trouser from "./components/Trouser";
import Jwellery from './components/Jwellery'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="Women" element={<Women />} >
            <Route path="Shirt"  element={<Shirt/>}/>
            <Route path="Groming"  element={<Groming/>}/>
            <Route path="Trouser"  element={<Trouser/>}/>
            <Route path="Jwellery"  element={<Jwellery/>}/>

          </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);