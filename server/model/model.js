const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    code:{
        type:Number,
        required: true,
        unique:true
    },
    date:{
        type:String,
        required:true
    },
    dniManager: {
        type:String,
        required:true
    },
    reason:{
        type:String
    },
    lot:{
        type:Number
    },
    section:{
        type:Number
    },
    hourBegin:{
        type:String
    },
    hourFinal:{
        type:String
    }
});

// al nombre indicado aqui para la coleccion, agregar s al final sino mongodb lo hara por nosotros
const BottleneckDb = mongoose.model('bottlenecks', schema);

module.exports = BottleneckDb;