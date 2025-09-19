import ComponentC from "./ComponentC";

function ComponentB(){

    return(
        <div className="box">
            <p>Component B</p>
            <ComponentC />
        </div>
    )
}

export default ComponentB