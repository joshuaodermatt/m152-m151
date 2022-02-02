import { createServer } from 'http';

const server = createServer(async(req, res) => {
  if(req.url === '/api' && req.methode === "GET") {
    res.writeHead(200, {"Content-Type": "text/html"}),
    res.write("<h1>Hello World!</h1>");
    res.end()
  } else {
    res.writeHead(404, {"Content-Type": "application/json"})
    res.write(JSON.stringify({message: "route not found"}))
    res.end()
  }
});




server.listen(8080, () => {
  console.log(
    `Server is listening to http://localhost.${server.address().port}`
  );
});