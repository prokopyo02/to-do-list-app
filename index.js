import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));




let todayList = [];
let workList = [];


app.get("/",(req,res)=>{
    res.render("index.ejs",{ 
        newTaskList: todayList,
    });
});

app.post("/", (req,res)=>{
    let newTaskItem = req.body.newTask;
    todayList.push(newTaskItem);
    res.redirect("/");
});

app.get("/work", (req,res) =>{
    res.render("work.ejs",{ 
        newWorkList: workList
    });
});

app.post("/submit", (req,res)=>{
    let newWorkItem = req.body.newWorkTask;
    workList.push(newWorkItem);
    res.redirect("/work");
});

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
});