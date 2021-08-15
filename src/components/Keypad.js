import React from 'react';
import '../index.css';

//component to show all the buttons and to add handleclick event on them
 const Keypad = ({handleClick}) => {
    return (
        <div className="keypad">

            <div>
                <button className="bg_lightGray" onClick={() => handleClick("C")}>C</button>
                <button className="bg_lightGray" onClick={() => handleClick("+/-")}>+/-</button>
                <button className="bg_lightGray" onClick={() => handleClick("%")}>%</button>
                <button className="bg_orange"  onClick={() => handleClick("/")}>/</button>
            </div>

            <div>
                <button className="bg_lightGray" onClick={() => handleClick("7")}>7</button>
                <button className="bg_lightGray" onClick={() => handleClick("8")}>8</button>
                <button className="bg_lightGray" onClick={() => handleClick("9")}>9</button>
                <button className="bg_orange" onClick={() => handleClick("*")}>*</button>
            </div>

            <div>
                <button className="bg_lightGray" onClick={() => handleClick("4")}>4</button>
                <button className="bg_lightGray" onClick={() => handleClick("5")}>5</button>
                <button className="bg_lightGray" onClick={() => handleClick("6")}>6</button>
                <button className="bg_orange" onClick={() => handleClick("-")}>-</button>
            </div>

            <div>
                <button className="bg_lightGray" onClick={() => handleClick("1")}>1</button>
                <button className="bg_lightGray" onClick={() => handleClick("2")}>2</button>
                <button className="bg_lightGray" onClick={() => handleClick("3")}>3</button>
                <button className="bg_orange" onClick={() => handleClick("+")}>+</button>
            </div>
           
            <div>
                <button className="bg_lightGray" style={{width:"50%"}}  onClick={() => handleClick("0")}>0</button>
                <button className="bg_lightGray" onClick={() => handleClick(".")}>.</button>
                <button className="bg_orange" onClick={() => handleClick("=")}>=</button>
            </div>

        </div>
    )
}

export default Keypad;
