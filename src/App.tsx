import React, { Suspense } from 'react';
import './App.css';
const Title = React.lazy( () => import('./Title'))
const MenuBar = React.lazy( () => import("./MenuBar"))


function App() {
    return (
        <div className="React">
            <Suspense fallback={<br></br>}>
                <MenuBar/>
            </Suspense>
            <Suspense fallback={<h1> Loading... </h1>}>
                <Title/>
            </Suspense>
            <p>
                React start
            </p>
            <header className="App-header">
                <p>
                    Ediasdfasdft <code>src/App.tsx</code> and save to reload.
                </p>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <p>ㅎㅇ</p>
            </header>
        </div>
    );
}



export default App;
