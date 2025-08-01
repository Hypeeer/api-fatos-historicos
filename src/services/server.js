const express = require('express');
const app = express();

const port = 3030;
const router = require('../routes/fatosRouter');

app.use(express.json());
app.use('/', router); //Middleware usa conjunto de rotas definidos por '/'

app.listen(port, () => {
  console.log(`Servidor aberto na porta: ${port}`);
});
