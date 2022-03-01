const express = require('express');
const mysql = require('mysql');

const app = express();

const getPersons = () => {
    const connection = mysql.createConnection({
        host: "db",
        user: "root",
        password: "root",
        database: "nodedb"
    });
    try {
        return new Promise((resolve, reject) => {
            connection.query("select * from people", (err, result) => {
                return err ? reject(err) : resolve(result);
            });
        });
    } catch(error) {
        throw error;
    } finally {
        connection.end();
    }
    
}

app.get("/", async (_, response) => {
    const data = await getPersons();
    response.send(`
        <h1>Full Cycle Rocks!</h1>
        <hr>
        <ul>
            ${data.map(people => `<li>${people.name}</li>`).join("")}
        </ul>
    `);
});

app.listen(3000, () => {
    console.log("Aplicação rodando na porta 3000");
})