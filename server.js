const express = require('express')
const server = express()
const bodyParser = require('body-parser')
//Importar para ter acesso ao caminho dos arquivos
const path = require('path')
//Expor arquivos estáticos..
server.use(express.static('trabalho'));
server.use(express.json()) //Possibilidade de usar JSON

server.use(bodyParser.urlencoded({ extended: true }))

//EXemplo GET
server.get('/add-novela', (req, res) => {
    res.sendFile(path.join(__dirname, 'trabalho/add-novela.html'))
})
server.listen(3000, () => {
    console.log("servidor no ar...")
})
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'trabalho/index.html'))
})
server.get('/list-novela', (req, res) => {
    res.sendFile(path.join(__dirname, 'trabalho/list-novelas.html'))
})