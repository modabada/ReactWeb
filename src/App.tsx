import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
// const Home = React.lazy( () => import('./Home') );
// const MenuBar = React.lazy( () => import("./MenuBar") );
import Home from "./Home";
import MenuBar from "./MenuBar";


function App() {
    return (
        <div className="App">
            <MenuBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <div className="Home">
                            <Home/>
                        </div>
                    } />
                    <Route path="/doc" element={
                        <h1> 나도 모?루?</h1>
                    } />

                </Routes>
            </BrowserRouter>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <h1>p</h1>
        </div>
    );
}



export default App;
