import React, { useState } from "react";

import ArrowDown from "../../assets/images/arrow-down.svg";

function FAQDropdown(props) {
    const [ drop, setDrop ] = useState(false);

    const question = props.question;
    const answer = props.answer;

    const toggledrop = () => { setDrop(!drop); }

    return <div className="dropdown-faq ff-inter">
        <button className="question text-start" onClick={toggledrop}>
            <div className="text">{question}</div>
            <div className="icon ps-3">
                <img src={ArrowDown} alt="arrow" style={{ transform: drop ? "rotateZ(180deg)" : "rotateZ(0deg)" }} />
            </div>
        </button>
        <article className="answer" style={{ height: drop ? "200px" : "0px" }}>
            <div style={{
                opacity: drop ? 1 : 0
            }}>
                {answer}
            </div>
        </article>
    </div>;
}

export default FAQDropdown;