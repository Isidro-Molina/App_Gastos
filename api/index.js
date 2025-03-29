const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { router } = require('./routes/index.js');
const { configDotenv } = require('dotenv');
configDotenv();
// const port = process.env.PORT;

const app = express();

// app.use(
//   cors({
//     origin: 'http://localhost:5173', // URL de mi Front End
//     credentials: true, // permitir envio de cookies
//   })
// );

app.options('*', cors());

app.use(morgan('dev')); // Muestra los pedidos en la consola (ruta y status code)
app.use(express.json());
app.use('/', router);

app.listen(3001, () => {
  console.log(`Server is running on port: ${3001}`);
});

// module.exports = app;
