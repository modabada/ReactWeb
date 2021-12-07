import { useState, useEffect, useRef } from 'react';
import './Title.css';

function Title() {
    const word = " 1인 청소년 웹개발 연습 홈페이지".normalize("NFKD");
    const dict: Function = (n: string) => {
        switch (n) {
            case "ᄀ": return "ㄱ";
            case "ᄂ": return "ㄴ";
            case "ᄃ": return "ㄷ";
            case "ᄅ": return "ㄹ";
            case "ᄆ": return "ㅁ";
            case "ᄇ": return "ㅂ";
            case "ᄉ": return "ㅅ";
            case "ᄋ": return "ㅇ";
            case "ᄌ": return "ㅈ";
            case "ᄎ": return "ㅊ";
            case "ᄏ": return "ㅋ";
            case "ᄐ": return "ㅌ";
            case "ᄑ": return "ㅍ";
            case "ᄒ": return "ㅎ";
            default: return n;
        }
    }
    const word_output = () => {
        let code = word[index].charCodeAt(0);
        if(4352 <= code && code <= 4370) {
            return word.slice(0, index) + dict(word[index])
        }
        else {
            return word.slice(0, index + 1);
        }
    }

    const timer = useRef(0);
    const interv: any = useRef(0);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        interv.current = setInterval(() => {
            if (timer.current++ > 4) {
                setIndex(timer.current - 5);
            }
        }, 130);
        return () => clearInterval(interv.current);
    }, []);
    useEffect(() => {
        if (index > 38) {
            clearInterval(interv.current);
        }
    }, [index]);
    const subTitle = <h5 className="SubTitle" draggable id="sex">{word_output()} </h5>
    const test = () => {alert("이벤트 종료")}
    const el = document.getElementsByClassName('MainTitle');
    if(el.length > 0) {
        el[0].addEventListener("transisionend", test, true);
    }

    return (
        <div className="Title">
            <h1 className="MainTitle" draggable>문 인 우</h1>
            {subTitle}
        </div>
    )
}

export default Title;
