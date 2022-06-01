const Grown = require('grown')();
const server = new Grown();

server.mount(conn => {
  conn.res.end(`
    <h1>It works?</h1>
    <pre>${JSON.stringify(process.env, null, 2)}</pre>
  `);
});
server.listen(8080);
