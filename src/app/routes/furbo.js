const dbConnection = require("../../config/dbConnections.js");

module.exports = app => {
    const connection = dbConnection();

    app.get('/', (req, res) => {
        connection.query('SELECT * FROM Equipo', (err, result) =>{
            console.log(result);
            res.render('furbo/furbo.ejs', {equipo: result});
        });
        
    });

    app.post('/furbo', (req, res)=> {

        const {nombreEquipo} =req.body;
        console.log(req.body);
        connection.query('INSERT INTO Equipo SET?', {
            nombreEquipo:nombreEquipo
           
        }, (err, result) => {
            res.redirect('/');
        });

    })

}