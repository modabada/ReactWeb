import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Title from './Title'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
ReactDOM.render(
    <React.StrictMode>
        <Title/>
    </React.StrictMode>,
    document.getElementById('title')
)

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
