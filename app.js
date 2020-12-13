const jesonServer = require('json-server');
const server = jesonServer.create();
const router = jesonServer.router('db.json');
const middlewares = jesonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);