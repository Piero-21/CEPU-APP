const router = require('express'). router()
const conexion = require('./config/conexion')



//---------- agregamos rutas--------
/*Obtener equipos
router. get('/',(req, res)=>{
    let sql ='select * from tb_equipo'
    conexión. query(sql,(err, filas, campos)=>{
        if(err) throw err;
        else{
            res. json(filas)
        }
    })

})

//Get un equipo
router. get('/:id',(req, res)=>{
    const {id} = req. Parámetros
    let sql  ='select * from tb_equipo donde id_equipo = ?'
    conexión. query(sql,[id],(err, filas, campos)=>{
        if(err) throw err;
        else{
            res. json(filas)
        }
    })
})
*/
//agregar equipo

router.post('/',( req, res)=>{
    const{nombre,descripcion} = req.body

    connection.query('INSERT INTO mi_tabla (nombre, descripcion) VALUES (?, ?)', [nombre, descripcion], (error, result) => {
        if (error) {
          console.error('Error al agregar el registro:', error);
          res.status(500).send('Error del servidor');
          return;
        }
        res.json({ id: result.insertId, nombre, descripcion });
      });
});

/*eliminar 
enrutador. delete('/:id',(req, res)=>{
    const{id} = req. Parámetros

    let sql  ='delete from tb_equipo where id_equipo = '${id}''
    conexión. Consulta(SQL, (err, filas, campos)=>{
        if(err) throw err
        más{
            res. json({status: 'equipo eliminado'})
        }
    })
});

//modificar
router.put('/:id',(req, res)=>{
    const{id}=req. Parámetros
    const{nombre, logo} = req. cuerpo

    Let SQL = 'Update tb_equipo Set 
                nombre ='${nombre}',
                logo='${logo}'
 donde id_equipo = '${id}''
    
    conexión. Consulta(SQL, (err, filas, campos)=>{
        if(err) throw err
        else{
            res. json({status: 'equipo modificado'})
        }
    })

})

//----------------------------------*/
module. exports = router