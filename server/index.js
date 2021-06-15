const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const FoodModel = require('./models/Food')

// middlewear

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://dbzakaria:123becode@mern.ssl2u.mongodb.net/food?retryWrites=true&w=majority',{
    useNewUrlParser:true,
})

app.post('/insert', async (req, res) => {
    // crée une food 
    const foodName = req.body.foodName;
    const origine = req.body.origine;
    const tasty = req.body.tasty;
    const food = new FoodModel({foodName: foodName, origineFood:origine,tasty:tasty})
    try{
        await food.save()
        res.send("Insert data")
        
    }catch(err){
        console.error(err)
    }
})

app.get('/read', async (req, res) => { 
   FoodModel.find({},(err,result) => {
       if(err){
           res.send(err)
       }

       res.send(result);
   })
})
app.listen(3001,() => {
    console.log('Server running on port 3001...');
})