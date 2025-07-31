const express = require('express');
const app = express();

const port = 3030;
const router = require('./routes/userRouter');

app.use(express.json());
app.use('/', router);

app.listen(port, () => {
  console.log(`Servidor aberto na porta: ${port}`);
});
