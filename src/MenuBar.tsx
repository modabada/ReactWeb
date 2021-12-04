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


class button {
    prop;
    constructor(prop: any) {
        this.prop = prop;
    }
    static test1(e: number) {
        alert(e);
    }

    static Section(prop: any) {
        return(<div className="Btn" onClick={this.test1.bind(this, prop.index)}>난버튼{prop.index}</div>)
    }
}
const moveLink = (e: number) => {
    switch(e) {
        case 0:
            alert("ㅎㅇ");
            break;
    }
}

function test() {
    alert("test");
}
function test1(e: number) {
    alert("t" + e);
}
function Section(prop: any) {
    return(<div className="Btn" onClick={(e) => test1.bind(e, prop.index)}>난 버튼{prop.index}</div>)
}

export default MenuBar;
