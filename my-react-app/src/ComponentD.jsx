
import React,{useContext} from "react"

import { UserContext } from "./ComponentA"

function ComponentD(props){

    const user = useContext(UserContext)
    return(
        <div className="box">
            <p>Component D</p>
            <p>hi {user}</p>
        </div>
    )
}

export default ComponentD