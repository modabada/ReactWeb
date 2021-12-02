import { Component } from 'react';
import './MenuBar.css';

function MenuBar() {
    const Sections:Array<JSX.Element> = [];
    for(let i = 0; i < 10; i++) {
        Sections.push(<Section index={i + ""}/>)
    }
    return (
        <div className="MenuBar">
            {Sections}
        </div>
    )
}

function Section(prop: any) {
    return(<h1>{prop.index}</h1>)
}

export default MenuBar;
