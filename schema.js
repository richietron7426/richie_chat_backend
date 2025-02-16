const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
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
    
});
const todomodels = mongoose.model('Message', messageSchema);



module.exports = todomodels;


