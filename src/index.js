require('./config/conexion');
const express = require('express')
const port = (proceso. env. puerto ||  3000)

//expresar
const app = express()

//admitir
app.Uso(expreso. JSON())

//configurar
app.set('puerto',puerto)

//rutas
app.use('/api', require('./rutas'))


//inicializar exprés
app. listen(app. get('port'),(error)=>{
    if(error)
    {consola. log('error al iniciar el servidor: '+error)}
    else{
        consola. log('servidor iniciado en el prueto: '+port)
    }
})