const express = require('express');
const next = require('next');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

let path;
switch (process.env.NODE_ENV) {
  case 'production':
    path = `${__dirname}/../.env.prod`;
    break;
  default:
    path = `${__dirname}/../.env.dev`;
    break;
}

dotenv.config({ path });

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const apiRoutes = require('./routes/apiRoutes.js');

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  // TODO: mvc 패턴으로 바꿔야됨.
  server.use('/api', apiRoutes);

  server.all('*', (req, res) => handle(req, res));

  server.listen(port, error => {
    if (error) throw error;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
