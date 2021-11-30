import React from 'react';
// import './App.css';


function App() {    
    return (
        <div className="React">
            <p>
                React start
            </p>
            <header className="App-header" style={css.App_header}>
                <p>
                    Ediasdfasdft <code>src/App.tsx</code> and save to reload.
                </p>
                <a>
                    Learn React
                </a>
            </header>
        </div>
    );
}


const css = {
    "App": {
        "text-align": "center"
    },
    "App_logo": {
        "height": "40vmin",
        "pointer-eventes": "none"
    },
    "App_header": {
        "background-color": "#282c34",
        "min-height": "100vh",
        "display": "flex",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "center",
        "font-size": "calc(10px + 2vmin)",
        "color": "white"
    }
}
/*
const cssf = {
    App = {
        text-align: center;
    },
    
    .App-logo {
        height: 40vmin;
        pointer-events: none;
    }
    
    @media (prefers-reduced-motion: no-preference) {
        .App-logo {
            animation: App-logo-spin infinite 20s linear;
        }
    }
    
    .App-header {
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
    }
    
    .App-link {
        color: #61dafb;
    }
    
    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    
    
}
*/

export default App;
