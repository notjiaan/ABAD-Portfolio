const http = require("http");
const fs = require("fs");
const PORT = 5000;

const server = http.createServer((req, res) => {
  //defines what content is being returned
  res.setHeader("Content-type", "text/html");

  // html files directory path
  let path = "./web-page/";

  //append to log file the url

  fs.appendFile(
    "./logs/logs.txt",
    "The user visited: " + req.url + "\n" + "<br />",
    () => {
      console.log("url added to log file\n");
    }
  );

  //switch case router for views
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;

    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;

    case "/history":
      res.setHeader("Content-type", "text/html");
      path += "../logs/logs.txt";
      res.statusCode = 200;
      break;

    case "/secret":
      path += "secret.html";
      res.statusCode = 403;
      break;

    default:
      path += "404.html";
      res.statusCode = 404;
      appendLogs();
      break;
  }

  //renders html file depending on current path
  fs.readFile(path, (err, data) => {
    if (err) {
      throw err;
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(PORT, "localhost", () => {
  console.log(`Server is listening on port ${PORT}`);
});
