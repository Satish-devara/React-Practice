import { useState } from "react";

function SelectColor(){

    const [color, setColor] = useState('');
    const [isDarkText, setDarkText] = useState('false');

    const handleColor = (e) =>{
        setColor(e.target.value);
    }
    return(
        <div>
            <div className = "box" style={{
                backgroundColor:color,
                color : isDarkText ? "#000" : "#ffff"
            }}> {color}</div>
            <div>
                <input type="text"
                value = {color}
                onChange={handleColor} />
                <button
                onClick={() => {
                    setDarkText(!isDarkText)}
                    }>Change text color</button>
            </div>
        </div>
    )
}

export default SelectColor