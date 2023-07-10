const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
  const viewFilePath = path.join(__dirname, '../views', 'home/home.ejs');
  const content = fs.readFileSync(viewFilePath, 'utf-8');
  
  res.render('index', {
    title: 'Home',
    content: content
  });
});

router.get('/contato', (req, res) => {
  const viewFilePath = path.join(__dirname, '../views', 'contato/contato.ejs');
  const content = fs.readFileSync(viewFilePath, 'utf-8');
  
  res.render('index', {
    title: 'Contato',
    content: content
  });
});

router.get('/sobre', (req, res) => {
  const viewFilePath = path.join(__dirname, '../views', 'about/about.ejs');
  const content = fs.readFileSync(viewFilePath, 'utf-8');
  
  res.render('index', {
    title: 'Quem Somos',
    content: content
  });
});



module.exports = router;
