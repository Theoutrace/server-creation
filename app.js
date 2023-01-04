const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method, req.headers);
  //   process.exit();

  const url = req.url;
  if (url === "/home") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>My Page</title></head>");
    res.write("<body><h1>Welcome home</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/about") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>My Page</title></head>");
    res.write("<body><h1>Welcome to About Us page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/node") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>My Page</title></head>");
    res.write("<body><h1>Welcome to my Node Js project</h1></body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Page</title></head>");
  res.write("<body><h1>Hello from my Node js server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
