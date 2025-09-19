import React, {useState} from "react";

function Color(){


    const [color, setColor] = useState("#FFFFFF");

    function handleColor(event){
        setColor(event.target.value);
    }
    return(
        <div>
            <div className="color" style={{backgroundColor: color}}>
                <p >Selected Color {color}</p>
            </div>
            <div>
                <p>Select a color</p>
                <br></br>
                <input type="color" value={color} onChange={handleColor} />
            </div>
        </div>
    )
}

export default Color