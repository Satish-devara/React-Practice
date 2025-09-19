import React, {useState} from "react"


function Counter(){

    const [counter, setCounter] = useState(0);
    
    const decrease = () => {
        setCounter(counter - 1);
        
    }

    const increase = () => {
        setCounter(counter+1);
    }

    const reset = () => {
        setCounter(0);
    }

    return(
        <div>
        <p>{counter}</p>
        <button onClick = {decrease}>Decrement</button>
        <button onClick = {reset}>Reset</button>
        <button onClick = {increase}>Increment</button>
            
        </div>
    )

}

export default Counter