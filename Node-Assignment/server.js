const http = require("http");
const fs = require("fs");
const PORT = 5000;

const server = http.createServer((req, res) => {
  //defines what content is being returned
  res.setHeader("Content-type", "text/html");

  // html files directory path
  let path = "./web-page/";

  //append to log file the url
  const appendLogs = () => {
    fs.appendFile(
      "./logs/log.txt",
      `localhost:${PORT}` + req.url + "\n",
      () => {
        console.log("url added to log file\n");
      }
    );

    //console log current url and status code
    console.log(`localhost:${PORT}` + req.url);
    console.log(res.statusCode);
  };

  const showHistoryLogs = () => {
    fs.readFile("./logs/logs.txt", (err, txtString) => {
      if (err) {
        throw err;
      } else {
        console.log(txtString.toString());
        // replace new line (\n) to <br/>
        res.write("<div>" + txtString.toString().replace(/\n/g, "<br />"));

        console.log("history displayed\n");
      }
    });
  };
  //switch case router for views
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      appendLogs();
      break;

    case "/about":
      path += "about.html";
      res.statusCode = 200;
      appendLogs();
      break;

    case "/history":
      path += "history.html";
      showHistoryLogs();
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
