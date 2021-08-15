import React from 'react';
import '../index.css';

//this component is used to display the result
const Result = ({result}) => {
    return (
        <div className="result">
            {/* this is just for styling */}
            <div className="option">
                <div className="bg_red"></div>
                <div className="bg_yellow"></div>
                <div className="bg_green"></div>
            </div>
            <p>{result}</p>
        </div>
    )
}

export default Result;