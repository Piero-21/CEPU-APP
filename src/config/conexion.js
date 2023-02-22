const mysql = require('mysql' );

const conexion = mysql. createConnection({
    host: 'localhost',
    user: 'root2',
    password: 'root2',
    database: 'cepu_data'
});

conexion.connect((err)=>{
    if(err){
        conexion.log('ha ocurrido un error :'+ err)
    }
    más
    {console.log(' la base de datos se conecto!!!')}
});

module. exports=conexion