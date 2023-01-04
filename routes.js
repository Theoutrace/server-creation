const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
      //   console.log("data frm file: ", data);
      res.write("<html>");
      res.write("<head><title>My Page</title></head>");
      res.write(
        `<body>${data}<form action="/message" method="POST" ><input type="text" name="message"><button type="submit">send</button></form></body>`
      );
      res.write("</html>");

      return res.end();
    });
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      //   console.log("chunk is :", chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      //   console.log("parsedBody", parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        // console.log(err);
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
};

module.exports = requestHandler;

// to kill all the ports open run:   taskkill /f /im node.exe
