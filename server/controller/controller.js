const bottleneckDb = require('../model/model');

// create and save new cb report
exports.create = (req, res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"Content cann't by empty"})
        return;
    }
    //new bottleneck report
    const newBottleneckRpt = new bottleneckDb({
        code:req.body.code,
        date:req.body.date,
        dniManager:req.body.dniManager,
        reason:req.body.reason,
        lot:req.body.lot,
        section:req.body.section,
        hourBegin:req.body.hourBegin,
        hourFinal:req.body.hourFinal
    })

    // saving data in the db
    newBottleneckRpt
    .save(newBottleneckRpt)
    .then(data=>{
        //res.send(data)
        res.redirect('/add-bottleneck')
    })
    .catch(err=>{
            res.status(500).send({message:err.message || "Some error ocurred while operation create!"});
        });

}

// retrive and return all bottleneck/retrive and return a single report
exports.find = (req, res)=>{
    if(req.query.code){
        bottleneckDb.findOne({code:req.query.code}, {_id:0})
        .then(data=>{
            if(!data){
                res.status(404).send({message:`Not found report with id: ${req.query.code}`})
            } else {
                res.send(data)
            }
        }).catch(err=>{
            res.status(500).send({message:`${err}, retrieving report with id: ${req.query.code}`})
        })
    } else {
        bottleneckDb.find()
    .then(bottlenecks=>{
        res.send(bottlenecks)
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "Error ocurred while while retriving bottlenecks information!"});
    })
    }
} 

// update a indentify report by bottleneck code
exports.update = (req, res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data to update cant not by empty!"})
    }

    // {_id:0} esto indica que ignore este campo en la consulta
    bottleneckDb.updateOne({code: req.params.code}, {$set:{reason:req.body.reason, lot:req.body.lot, section:req.body.section, hourFinal:req.body.hourFinal}}, {_id:0})
    .then(data=>{
        if(!data){
            res.status(400).send({message:`Can't update bottleneck with ${req.params.code}. The report not found!`})
        } else {
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message: `Error updating information, with code: ${err}`})
    })
}

// delete a bottleneck especified by id
exports.delete=(req, res)=>{

    bottleneckDb.findOneAndDelete({code: req.params.code})
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Can't delete report with code ${req.params.code}!`})
        } else{
            res.send({
                message:"Report was delete successfully!"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:`Could't delete report with id: ${req.params.code} => ${err}`})
    });
}