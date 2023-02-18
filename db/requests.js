const db = require('./config');

function requestAll(table, callback) {
  db.any( `SELECT * FROM ${table}`)
    .then((result) => {
      callback(null, result);
    })
    .catch((error) => {
      callback(error)
    })
}

function requestOne(table, id, callback) {
  db.any( `SELECT * FROM ${table} WHERE id = ${id}`)
    .then((result) => {
      callback(null, result);
    })
    .catch((error) => {
      callback(error)
    })
}

function create(table, item, callback) {
  const keys = Object.keys(item);
  const properties = keys.join(", ");
  const values = keys.map((key) => `'${item[key]}'`).join(", ");

  db.any( `INSERT INTO ${table} (${properties}) VALUES(${values}) returning *`)
    .then(([result]) => {
      callback(null, result)
    })
    .catch((error) => {
      callback(error);
    })
}

function update(table, id, item, callback) {
  const keys = Object.keys(item)
  const updates = keys.map((key) => `${key} = '${item[key]}'`).join(', ')

  db.any(`UPDATE ${table} SET ${updates} WHERE id = ${id} returning *`)
    .then(([result])=>{
      callback(null, result)
    })
    .catch((error) =>{
      callback(error)
    })
}

function drop(table, id , callback) {
  db.any(`DELETE FROM ${table} WHERE id=${id}`)
    .then (()=> callback(null))
    .catch((error) => callback(error))
}

module.exports = { 
  requestAll, requestOne, create, update, drop
}