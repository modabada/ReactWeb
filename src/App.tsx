import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
const Title = React.lazy( () => import('./Title'))
const MenuBar = React.lazy( () => import("./MenuBar"))


function App() {
    return (
        <div className="App">
            <Suspense fallback={<p className="MenuBar">Loading...</p>}>
                <MenuBar/>
            </Suspense>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <div className="Home">
                            <Suspense fallback={<h1 className="Title">Loading...</h1>}>
                                <Title/>
                            </Suspense>
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
