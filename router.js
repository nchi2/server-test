const express = require('express');
const route = express.Router();

const getControll = require("./controller/getControll");

route.get("/", getControll.main);
route.get("/api", getControll.api);
route.get("/api/name", getControll.apiName);

module.exports = route;