const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

// Acesso aos estilos
app.use(express.static(__dirname + '/public'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
// Middleware para processar dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Importar as rotas

// Utilizar as rotas
app.use('/', routes);

// Iniciar servidor
let port = 3333
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
