const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(dirname, 'views'));

// Rotas
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(Servidor rodando em http://localhost:${PORT});
});