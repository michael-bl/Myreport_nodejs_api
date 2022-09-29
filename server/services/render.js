const axios = require('axios');

exports.homeRoutes = (req, res) => {
    // Making a get request to /api/bottleneck
    //axios.get('http://localhost:3000/api/bottleneck')
    axios.get('https://myreport-api-nodejs.herokuapp.com/api/bottleneck')
        .then(function (response) {
            res.render('index', { bottlenecks: response.data });
        })
        .catch(err => {
            res.send(err);
        })
}

exports.add_bottleneck = (req, res) => {
    res.render('add_bottleneck');
}

//axios.get('http://localhost:3000/api/bottleneck'
exports.update_bottleneck = (req, res) => {
    axios.get('myreport-api-nodejs.herokuapp.com/api/bottleneck', { params: { code: req.query.code } })
        .then(function (bottleneckdata) {
            res.render("update_bottleneck", { bottleneck: bottleneckdata.data })
        })
        .catch(err => {
            res.send(err);
        })
}