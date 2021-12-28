import { useState, useEffect, useRef } from 'react';
import './Home.css';

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
        const code = word[index].charCodeAt(0);
        if (4352 <= code && code <= 4370) {
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
            if (timer.current++ > 25) {
                setIndex(timer.current - 26);
            }
        }, 130);
        return () => clearInterval(interv.current);
    }, []);
    useEffect(() => {
        if (index > word.length - 2) {
            clearInterval(interv.current);
        }
    }, [index]);

    return (
        <div className="Home">
            <div className="Title" draggable>
                <h1 id="MainTitle">문 인 우</h1>
                <h5 id="SubTitle">{word_output()}{'\u200b'}</h5>
            </div>
            <div className="Doc">
                <div id="text">
                    text display
                </div>
                <div id="block">
                    block display
                </div>
                <div id="text">
                    text display again
                </div>
            </div>
            <div className="info">
                <p>해당 페이지는 데스크탑 환경에 최적화되어있습니다</p>
            </div>
        </div>
    )
}

export default Title;
