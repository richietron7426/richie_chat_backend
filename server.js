const express = require("express");
const mongoose = require("mongoose");
const todomodels = require("./schema");
const cors = require("cors");

const url = "mongodb://localhost:27017/richie_chat";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(url)
    .then(() => {
        console.log("You have been connected to the database:", url);
    })
    .catch(err => {
        console.error("Database connection error:", err);
    });

// Corrected endpoint to return "hello people"
app.get('/get/todo', (req, res) => {
    res.send("<h1>hello people, this is from server.js, which is the backend</h1>");
});

// Get all todos
app.get("/get", (req, res) => {
    todomodels.find()
        .then(result => res.json(result))
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: "Error fetching tasks" });
        });
});
app.get("/", (req,res)=>{
    res.send("<h1>this is a port that is open at the server, this is port 4000</h1>")
});
// Create a new todo
app.post("/post", (req, res) => {
    const { data } = req.body;  // Expect 'message' instead of 'data'

    todomodels.create({ data: data })  // Store the message as the 'data' field
        .then(result => {
            res.status(201).json(result); // Respond with the created task
        })
        .catch(err => {
            console.error(err);
            res.status(400).json({ message: "Error creating task", error: err });
        });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("Port is running on 4000...");
});
