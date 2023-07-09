import express from 'express'
import mysql from 'mysql2'
import { faker } from '@faker-js/faker';

const app = express()

app.use(express.json())

var connection = mysql.createConnection({
    host     : 'mysqldb',
    user     : 'root',
    password : '123456',
    database : 'fullcycle'
});

connection.connect();

app.get('/', (req, res) => {
    connection.query(`INSERT INTO people (Name) VALUE ('${faker.person.fullName()}')`, function (error, results, fields) {
        if (error)  {
            console.log(error)
            res.status(500).send(error)
        }
        
        connection.query('SELECT * FROM people', (error, results, fields) => {
            if (error)  {
                console.log(error)
                res.status(500).send(error)
            }

            res.status(200).send('<h1>Full Cycle Rocks!</h1>' + "<ul>" + results.map(item => `<li>${item.Name}</li>`).join(' ') + "</ul>");
        })    
    });
})

app.listen(8080, () => console.log('Node.js app listening on port 8080.'))