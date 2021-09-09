const mongoose = require('mongoose');

const NewsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    date: {
        type: Date,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default: "Unknown"
    },
    archiveDate: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model('News', NewsSchema);