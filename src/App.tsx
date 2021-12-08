import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
// const Title = React.lazy( () => import('./Title'))
import Title from "./Title";
import MenuBar from "./MenuBar";
// const MenuBar = React.lazy( () => import("./MenuBar"))


function App() {
    return (
        <div className="App">
            <MenuBar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <div className="Home">
                            <Title />
                        </div>
                    } />
                    <Route path="doc" element={
                        <h1> 나도 모?루?</h1>
                    } />

                </Routes>
            </BrowserRouter>
        </div>
    );
}



export default App;
