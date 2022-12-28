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

    });

    app.get('/edit/:id', (req, res)=> {
        const id = req.params.id;
        connection.query('SELECT * FROM Equipo WHERE idEquipo=?', [id], (error, results)=> {
            if (error) {
                console.log("edit");
                throw error;
            } else {
                
                res.render('furbo/edit.ejs', {equipo:results[0]});
            }
        })
    });

    app.post('/update', (req, res) => {
        const idEquipo = req.body.idEquipo;
        const nombreEquipo = req.body.nombreEquipo;
        console.log(req.body);
        connection.query('UPDATE Equipo SET ? WHERE idEquipo = ?', [{nombreEquipo:nombreEquipo}, idEquipo], (error, result)=>{
            if(error) {
                throw error;
            } else {
                res.redirect('/');
            }
        });

    });

    //Ruta para eliminar equipo
    app.get('/delete/:id', (req, res)=> {
        const id = req.params.id;
        connection.query('DELETE FROM Equipo WHERE idEquipo = ?', [id], (error, result)=> {
            if (error) {
                //throw error;
            } else {
                res.redirect('/');
            }
        } )
    })


}