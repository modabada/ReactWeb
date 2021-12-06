import './MenuBar.css';

function MenuBar() {
    const Sections:Array<JSX.Element> = [];
    for(let i = 0; i < 4; i++) {
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
            const event = () => {};
            return(<div className="Btn" draggable>테0</div>);
        case 1:
            return(<div className="Btn" draggable onClick={e => test1(prop.index)}>테1</div>);
        default:
            return(<div className="Btn" draggable onClick={e => test1(prop.index)}>난 버튼 {prop.index}</div>);
    }
}

export default MenuBar;
