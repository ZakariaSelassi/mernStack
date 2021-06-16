import React,{useState} from 'react';
import './CreateFood.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
const CreateFood = () => {
    const [foodName,setFoodName] = useState('')
    const [origine,setOrigine] = useState('')
    const [tasty,setTasty] = useState(null)

    const addToList = () =>{
        axios.post('http://localhost:3001/insert', {foodName: foodName, origine:origine, tasty:tasty})
        .catch(err =>{
            console.log("Error");
        })
    }
    return (
        <div className="food-container">
            <h1>Add a food to your list </h1>
            <label>Food Name :</label>
            <input type="text" onChange={(event) =>{ setFoodName(event.target.value)} }/>
            <label>Origine : </label>
            <input type="text" onChange={(event) =>{ setOrigine(event.target.value)} } />
            <label>Tasty rate :</label>
            <input type="number" onChange={(event) =>{ setTasty(event.target.value)} } />
            <button onClick={addToList}>Add</button>
            <div>
            <Link to="/" exact>To list food</Link>
            </div>
        </div>
    );
};

export default CreateFood;