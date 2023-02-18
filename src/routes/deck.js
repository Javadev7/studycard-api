const express = require('express');
const { requestAll, requestOne, create, update, drop }  = require("../../db/requests.js");
var router = express.Router();

router.get("/",  (req, res, next) => {
    requestAll("decks", (err, result) => {
      if(err) return next(err);
      console.log(result)
      res.send(result)
    })
})
  
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  requestOne("decks", id, (err, result)=> {
    if(err) return next(err);
    console.log(result)
    res.send(result)
  })
})

router.post("/", (req, res, next) => {
  const body = req.body;
  create("decks", body, (err, result) => {
    if (err) return next(err)
      console.log(result);
      res.send(result)
    })
  })

router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  update('decks', id, body, (err, result)=>{
    if(err) return next(err);
    console.log(result)
    res.send(result)
  })
})

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  drop("decks", id, (err, result)=> {
    if(err) return next(err)
    console.log('Deck deleted')
    res.sendStatus('204')

  })
})


module.exports = router;