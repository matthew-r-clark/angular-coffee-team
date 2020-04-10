const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/coffee-team'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/coffee-team/index.html'));
});

app.get('/data', (req, res) => {
  let data = {
    firstName: "Matthew",
    lastName: "Clark",
  };
  res.render(data);
});

app.listen(process.env.PORT || 8080);