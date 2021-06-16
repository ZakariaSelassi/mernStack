import React , {useState,useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import './FoodList.css'
const FoodList = () => {

    const [foodList,setFoodList] = useState([])
    const [newFoodName,setNewFoodName] = useState("")


    const [newFoodOrigine,setNewFoodOrigine] = useState("")
    const [newTasty, setNewTasty] = useState(0)
    useEffect(() => {
        axios.get("http://localhost:3001/read")
            .then(res => {
                setFoodList(res.data)
            })
    },[])
    
    const updateFood = (id) => {
        console.log(newFoodName);
        if(newFoodName.length < 0 ){
            setNewFoodName(id.foodName)
        }
        axios.put("http://localhost:3001/update",{
            id: id,
            newFoodName: newFoodName,
            newFoodOrigine: newFoodOrigine,
        })
        window.location.reload(false)
    }

    const deleteFood = (id) => {
        axios.delete(`http://localhost:3001/delete/${id}`)
        window.location.reload(false)
    }

    return (
        <>
         <h1>Your list</h1>
            {
                foodList.map((item, index) => {
                return <div className="containerList" key={index}>
                        <h2>{item.foodName}</h2>
                        <label>update name Food : </label>
                        <input 
                        type="text" 
                        placeholder="change foodName" 
                        onChange={(event) =>{ setNewFoodName(event.target.value)}} 
                        name="foodtitle"/>
                        <p>{item.origineFood}</p>
                        <label>update name origine : </label>
                        <input type="text" 
                        placeholder="change origine" 
                        onChange={(event) =>{ setNewFoodOrigine(event.target.value)}} />
                        <p>{item.tasty}</p>
                        <button onClick={() => updateFood(item._id)}>Update </button>
                        <button onClick={() => deleteFood(item._id)}>Delete</button>
                    </div>
                })
            } 
        <Link to='/CreateFood'>Add new item in your list</Link>
        </>
    );
};

export default FoodList;