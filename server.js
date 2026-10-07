const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;
const html = fs.readFileSync(path.join(__dirname, "index.html"));

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(html);
  })
  .listen(port, "0.0.0.0", () => console.log(`Escuchando en el puerto ${port}`));
