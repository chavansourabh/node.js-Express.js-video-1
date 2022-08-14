const http = require("http");

const server = http.createServer((req, res) => {
  // res.write("Welcome to my channel");
  // res.end();
  if (req.url === "/") {
    res.end("Welcome to our Home page");
  }
  if (req.url === "/about") {
    res.end("here is our short history");
  }
  res.end(`
  <h1>Oops!</h1>
  <p> we can't seem to find the page you are looking for</p>
  <a href='/'>back home</a>
  `);
});
server.listen(5000);
