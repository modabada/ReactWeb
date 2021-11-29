import React, {useState, useEffect, useRef} from 'react';
import './Title.css';


const word = "1인 청소년 웹개발 연습 홈페이지"

function Title() {
    const timer = useRef(0);
    const interv: any = useRef(0);
    const [index, SetIndex] = useState(0);
    console.log(timer.current);
    useEffect( () => {
        interv.current = setInterval( () => {
            if(timer.current++ > 4) {
                SetIndex(timer.current - 5);
            }
        }, 200);
        return () => clearInterval(interv.current);
    }, []);
    useEffect( () => {
        if(index > 25) {
            clearInterval(interv.current);
        }
    }, [index]);


    return (
        <div className="Title">
            <h5>{word.slice(0, index)}</h5>
        </div>
    )
}

export default Title;
