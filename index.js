// get the client
require('dotenv').config();
const mysql = require('mysql2/promise');
const express = require("express");
let app = express()
// app.listen(3000)
// create the connection to database


app.set('port', process.env.PORT || 3000)


app.listen(app.get('port'), () => {
    console.info(`Server listen on port ${app.get('port')}`);
})
async function data() {

    var connection = await mysql.createConnection({
        host:process.env.HOST,
        database:process.env.DATABASE,
        user:process.env.USER,
        password:process.env.PASSWORD,
        port: 3306
    });
    return connection

}
// data()

app.get('/', async (req, res, next) => {
    var connection = await data()
    var body = { name: "ewf" }
    connection.query('insert into pank set name="sitaram" ;'
    ).then(data => {
        console.log(data)
        res.send(data)
        res.end()
    })
        .catch(data => {
            console.log(data)
        })


})