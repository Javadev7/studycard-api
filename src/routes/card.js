const express =  require('express');
const { requestAll, requestOne, create, update, drop } = require('../../db/requests');
var router = express.Router()

// Card routes

router.get("/", (req, res, next) =>{
    requestAll("cards", (err, result) =>{
      if(err) return next(err);
      res.send(result);
    })
})

router.get("/:id", (req, res, next) => {
    const id= req.params.id;
    requestOne("cards", id, (err, result) => {
      if(err) return next(err);
      res.send(result)
    })
})

router.post("/", (req, res, next) => {
    const body = req.body;
    create("cards", body, (err, result) => {
      if(err) return next(err);
      console.log(result)
      res.send(result)
    })
})

router.put("/:id", (req, res, next) => {
    const body = req.body;
    const id = req.params.id
    update("cards", id, body, (err, result) => {
      if(err) return next(err);
      res.send(result)
    })
})

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  drop("cards", id, (err, result) => {
    if(err) return next(err);
    console.log("Card deleted")
    res.sendStatus(204)
  })
})

module.exports = router;