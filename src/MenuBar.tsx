import './MenuBar.css';
import Home from './img/Home.png';
export default function MenuBar() {
    console.log(window.location.search);
    const Sections:Array<JSX.Element> = [];
    for(let i = 0; i < 5; i++) {
        Sections.push(<Section index={i}/>)
    }
    return (
        <div className="MenuBar">
            {Sections}
        </div>
    )
}

function test1(e: number) {
    alert("t" + e);
}
function Section(prop: any) {
    switch(prop.index) {
        case 0:
            return(
                <div className="Btn" id="Home" draggable onClick={e => {
                    window.location.href="/";
                }}>
                    <img src={Home} alt='HOME'/>
                </div>);
        case 1:
            return(
                <div className="Btn" draggable onClick={e => {
                    window.location.href="/doc";
                }}>
                    테0
                </div>);
        case 2:
            return(
                <div className="Btn" draggable onClick={e => {
                    window.location.href="/test"
                    test1(prop.index)
                }}>
                    테1
                </div>
            );
        case 3:
            return(
                <div className="Btn" draggable onClick={e => {
                    test1(prop.index)
                }}>
                    테2
                </div>
            );
        case 4:
            return(
                <div className="Btn" draggable onClick={e => {
                    test1(prop.index)
                }}>
                    테3
                </div>
            );
        default:
            console.log(prop);
            return(<p></p>);
    }
}