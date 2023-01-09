const rootDir = require("../util/path");
const path = require("path");

exports.getContactUs = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactUs.html"));
};

exports.postContactUs = (req, res, next) => {
  res.redirect("/success");
};
