const express = require('express');
const app = express();
const http = require('http').Server(app); // eslint-disable-line

app.set('port', process.env.PORT || 3000);
app.use('/', express.static('public'));

http.listen(app.get('port'), () => {
  console.log(`App listening on port ${app.get('port')}`); // eslint-disable-line
});
