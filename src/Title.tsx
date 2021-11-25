import React from 'react';
// import './Title.css';


const word = "1인 청소년 웹개발 연습 홈페이지"
var i = 0
for(i = 0; i < word.length; i++) {
    Title();
}
function Title() {
    return (
        <div className="title">
            <h5>{word.slice(i)}양</h5>
        </div>
    )
}

export default Title;
