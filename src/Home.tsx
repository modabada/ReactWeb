import { useState, useEffect, useRef } from 'react';
import './Home.css';

function Title() {
    const word = " 야스온더빗ㅊ".normalize("NFKD");
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
            return word.slice(0, index) + dict(word[index]);
        }
        else {
            return word.slice(0, index + 1);
        }
    }

    const timer = useRef(0);
    const interv: any = useRef();
    const [index, setIndex] = useState(0);
    const leng = useRef(word.length);
    useEffect(() => {
        interv.current = setInterval(() => {
            if (timer.current++ > 25) {
                setIndex(timer.current - 26);
            }
        }, 130);
        return () => clearInterval(interv.current);
    }, []);
    useEffect(() => {
        if (index > leng.current - 2) {
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
                <h3>어서오세요!</h3> 

                <div id="text">
                    text display
                </div>
                <div id="block">
                    block display
                </div>
                <div id="text">
                    text display again
                </div>
                it is just text
            </div>
            <div className="info">
                <p>이 웹사이트는 데스크탑 환경에 최적화되어있습니다</p>
            </div>
        </div>
    )
}

export default Title;
