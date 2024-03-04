import React from "react";
import './../styles/App.css';
import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom'
import Groming from "./Groming";
import Jwellery from "./Jwellery";
import Trouser from './Trouser';
import Shirt from './Shirt'
import Header from "./Header";
import Women from "./Women";
import Home from "./Home"
import Layout from "./Layout";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <main>
        <BrowserRouter>
        
        <Outlet></Outlet>
          <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index  element={<Home/>}/>
              <Route path="women" element={<Women/>}>
                 <Route path="Groming" element={<Groming/>}/>
                 <Route path="Trouser" element={<Trouser/>}/>
                 <Route path="Jwellery" element={<Jwellery/>}/>
                 <Route path="Shirt" element={<Shirt/>}/>
               </Route>
            </Route>
          </Routes>
        </BrowserRouter>
        </main>
    </div>
  )
}

export default App