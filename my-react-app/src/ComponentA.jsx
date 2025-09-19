import ComponentB from "./ComponentB";
import React,{useState,createContext} from "react";

export const UserContext = createContext();

function ComponentA(){
    const [user,setUser] = useState("Satish ")
    return(
        <div className="box">
            <p>Component A</p>
            <p>hi {user}</p>
            <UserContext.Provider value={user}>
            <ComponentB user={user}/>
            </UserContext.Provider>
            
        </div>
    )
}

export default ComponentA