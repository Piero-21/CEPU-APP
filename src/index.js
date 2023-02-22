const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root2',
  password: 'root2',
  database: 'cepu_data'
});

connection.connect((error) => {
  if (error) {
    console.error('Error al conectarse a la base de datos:', error);
    return;
  }
  console.log('Conexión a la base de datos establecida');
});

app.listen(3000, () => {
  console.log('Servidor API escuchando en el puerto 3000');
});

//CONSULTAS
app.post('/estudiantes', (req, res) => {
    const { exp,Apellido,Nombre, Carrera } = req.body;
    connection.query('INSERT INTO estudiantes (expediente,Usu_apellido,Usu_nombre, Carrera_id) VALUES (?, ?)', [exp,Apellido,Nombre, Carrera], (error, result) => {
      if (error) {
        console.error('Error al agregar el registro:', error);
        res.status(500).send('Error del servidor');
        return;
      }
      res.json({ id: result.insertId, Apellido, Nombre });
    });
  });