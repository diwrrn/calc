const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", (req, res)=>{
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res)=>{
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmiAns = weight / ( height * height);
    res.send("Your BMI is: "+ bmiAns); 

    
})

app.post("/", (req ,res)=>{
    var num1 = Number(req.body.num1); 
    var num2 = Number(req.body.num2);
    var result = num1 + num2;  
    res.send("Your result is: "+ result);
});
3a68914598ea035ff3f4315586c78e26



app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})
