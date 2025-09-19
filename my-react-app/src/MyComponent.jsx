import React,{useState} from "react";

function MyComponent(){

    // const [car, setName] = useState({year: 2024,
    //                                 model: "Ford",
    //                                 nake: "Mustang"});

    // function handleChange(){
    //     setName(c => ({...c, year: event.target.value}))
    // }

    // const [foods, setFoods] = useState(["Apple", "Orange","Banana"]);
 

    // function AddFood(){
    //     const newFood = document.getElementById("foodInput").value;
    //     document.getElementById("foodInput").value = "";

    //     setFoods([...foods,newFood]);
    // }

    // function removeFood(){
    //     const needtoRemove = document.getElementById("foodOut").value.trim().toLowerCase();
    //     document.getElementById("foodOut").value = "";

    //     setFoods(f => f.filter(food => food.toLowerCase() !== needtoRemove ))
    // }


    
    return(
        // <div>
        //     <p>Your facourite car is : {car.nake} {car.year} {car.model}</p>
        //     <input type="number" onChange={handleChange} />
        // </div>

        <div>
            <h2>
                List of foods
            </h2>
            <ul>
                {foods.map((food, index) => <li key={index}>{food}</li>)}
            </ul>
            <input type="text"  id="foodInput" placeholder="enter food name" />
            <button onClick={AddFood}>Add food</button>
            <br />
            <input type="text"  id="foodOut" placeholder="enter food name" />
            <button onClick={removeFood}>RemoveFood</button>
        </div>
        
        
    )
}

export default MyComponent