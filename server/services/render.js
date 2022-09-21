const axios = require('axios');

exports.homeRoutes = (req, res) =>{
    // Making a get request to /api/bottleneck
    //axios.get('https://myreport-api-nodejs.herokuapp.com/api/bottleneck')
    axios.get('http://localhost:3000/api/bottleneck')    
    .then(function(response){
        console.log(response)
        res.render('index', {bottlenecks:response.data});
    })
    .catch(err=>{
        res.send(err);
    })   
}

exports.add_bottleneck = (req, res) =>{
    res.render('add_bottleneck');
}

exports.update_bottleneck = (req, res) =>{
    res.render('update_bottleneck');
}