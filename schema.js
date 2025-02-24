const mongoose = require('mongoose');


const politicsSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true  // Makes sure the 'data' field is required
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const politicsModels = mongoose.model('politics', politicsSchema);


const postSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true  // Makes sure the 'data' field is required
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const postModels = mongoose.model('post', postSchema);


const romanceSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true  // Makes sure the 'data' field is required
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const romanceModels = mongoose.model('romance', romanceSchema);



const educationSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true  // Makes sure the 'data' field is required
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const educationModels = mongoose.model('education', educationSchema);




const careerSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true  // Makes sure the 'data' field is required
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const careerModels = mongoose.model('career', careerSchema);




const lifestyleSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true  // Makes sure the 'data' field is required
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const lifestyleModels = mongoose.model('lifestyle', lifestyleSchema);





const entertainmentSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true  // Makes sure the 'data' field is required
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const entertainmentModels = mongoose.model('entertainment', entertainmentSchema);




module.exports = {politicsModels, romanceModels, postModels, careerModels, educationModels, entertainmentModels, lifestyleModels};


