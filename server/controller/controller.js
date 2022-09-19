const CuelloBotellaDb = require('../model/model');

// create and save new cb report
exports.create = (req, res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"Content can not by empty"})
        return;
    }
    //new cuellobotella
    const newCbReport = new CuelloBotellaDb({
        code:req.body.code,
        date:req.body.date,
        dniEncargado:req.body.dniEncargado,
        reason:req.body.reason,
        lot:req.body.lot,
        section:req.body.section,
        hourBegin:req.body.hourBegin,
        hourFinal:req.body.hourFinal
    })

    // saving data in the db
    newCbReport
    .save()
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
            res.status(500).send({message:err.message || "Some error ocurred while operation create!"});
        });

}

// retrive and return all cuellobotella/retrive and return a single report
exports.find = (req, res)=>{
    CuelloBotellaDb.find()
    .then(cuellobotella=>{
        res.send(cuellobotella)
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "Error ocurred while while retriving cuellobotella information!"});
    })
} 

// update a new indentify report by cuellobotella id
exports.update = (req, res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data to update cant not by empty!"})
    }
    // const code = req.params.code;
    const code = req.params.code;
    const dataTochange = req.body.reason;

    // {_id:0} esto indica que ignore este campo en la consulta
    CuelloBotellaDb.updateOne({code: code}, {$set:{reason:dataTochange}}, {_id:0})
    .then(data=>{
        if(!data){
            res.status(400).send({message:`Can't update cuellobotella with ${code}. The report not found!`})
        } else {
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Error updating information, with code: " + err})
    })
}

// delete a cuellobotella especified by id
exports.delete=(req, res)=>{
    const mycode = req.params.code;
    CuelloBotellaDb.findByIdAndDelete(mycode)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Can't delete report with code ${mycode}. Maybe the code is wrong!`})
        } else{
            res.send({
                message:"Report was delete successfully!"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:"Could't delete report with id=" + mycode + " and "+ err
        })
    });
}