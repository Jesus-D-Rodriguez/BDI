const app = require('./config/Server');

require('./app/routes/furbo')(app);

app.listen(app.get('port'), ()=> {
    console.log('Server on port', app.get('port'));
});