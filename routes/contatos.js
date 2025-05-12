//1 parte]
const express = require('express');
const router = express.Router();
const db = require('../db');

//GET Todos os contatos
router.get('/', (req,res) => {
    db.query('SELECT * FROM contato',(err, results) =>{
        if(err) throw err;
        results.json(results);
    });
});

//2 parte 
router.post('/', (req,res) => {
    const {nome, email, anotacao} = req.body;
    db.query('INSERT INTO contato (nome, email, anotacao) VALUES (?,?,?)',)
    [nome, email, anotacao],
    (err, result) => {
        if (err) throw err;
        res.json({id:result.insertld, nome, email, anotacao});
    }
});

module.exports = router;