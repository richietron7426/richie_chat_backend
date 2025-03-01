const express = require("express");
const mongoose = require("mongoose");
const {politicsModels, romanceModels, postModels, careerModels, educationModels, entertainmentModels, lifestyleModels} = require("./schema");
const cors = require("cors");

// const url = "mongodb://localhost:27017/"

const url = `mongodb+srv://Richietron:74267426%40Okon@richietron-7426.0pgvw.mongodb.net/`
const app = express();


app.use(express.static("build"))
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






    
try {
    app.get('/', (req, res) => {
        res.sendFile('./build/static/index.html');
        })
} catch (error) {
    console.log(err)
}











app.get("/politicsPage", (req, res) => {

    
    politicsModels.find()
    .then(result => res.json(result))
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: "Error fetching tasks" });
       });

       });


    
app.post("/politicsPage", (req, res) => {
    const { data } = req.body; 

    politicsModels.create({ data: data }) 
    .then(result => {
        res.status(201).json(result);
    })
    .catch(err => {
        console.error(err);
        res.status(400).json({ message: "Error creating task", error: err });
    });
});














app.get("/romancePage", (req, res) => {
    romanceModels.find()
    .then(result => res.json(result))
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: "Error fetching tasks" });
       });
       });
    

app.post("/romancePage", (req, res) => {
    const { data } = req.body; 

    romanceModels.create({ data: data }) 
    .then(result => {
        res.status(201).json(result); 
    })
    .catch(err => {
        console.error(err);
        res.status(400).json({ message: "Error creating task", error: err });
    });
});
















app.get("/postPage", (req, res) => {
    postModels.find()
    .then(result => res.json(result))
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: "Error fetching tasks" });
       });
       });
    

app.post("/postPage", (req, res) => {
    const { data } = req.body;  

    postModels.create({ data: data }) 
    .then(result => {
        res.status(201).json(result); 
    })
    .catch(err => {
        console.error(err);
        res.status(400).json({ message: "Error creating task", error: err });
    });
});












app.get("/careerPage", (req, res) => {
    careerModels.find()
    .then(result => res.json(result))
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: "Error fetching tasks" });
       });
       });
    

app.post("/careerPage", (req, res) => {
    const { data } = req.body;  

    careerModels.create({ data: data }) 
    .then(result => {
        res.status(201).json(result); 
    })
    .catch(err => {
        console.error(err);
        res.status(400).json({ message: "Error creating task", error: err });
    });
});











app.get("/educationPage", (req, res) => {
    educationModels.find()
    .then(result => res.json(result))
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: "Error fetching tasks" });
       });
       });
    

app.post("/educationPage", (req, res) => {
    const { data } = req.body;  

    educationModels.create({ data: data }) 
    .then(result => {
        res.status(201).json(result); 
    })
    .catch(err => {
        console.error(err);
        res.status(400).json({ message: "Error creating task", error: err });
    });
});






app.get("/entertainmentPage", (req, res) => {
    entertainmentModels.find()
    .then(result => res.json(result))
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: "Error fetching tasks" });
       });
       });
    

app.post("/entertainmentPage", (req, res) => {
    const { data } = req.body;  

    entertainmentModels.create({ data: data }) 
    .then(result => {
        res.status(201).json(result); 
    })
    .catch(err => {
        console.error(err);
        res.status(400).json({ message: "Error creating task", error: err });
    });
});








app.get("/lifestylePage", (req, res) => {
    lifestyleModels.find()
    .then(result => res.json(result))
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: "Error fetching tasks" });
       });
       });
    

app.post("/lifestylePage", (req, res) => {
    const { data } = req.body;  

    lifestyleModels.create({ data: data }) 
    .then(result => {
        res.status(201).json(result); 
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
