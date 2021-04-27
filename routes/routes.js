const express = require(`express`);
const controller = require(`../controllers/controller.js`)

const app = express();

app.get(`/`, controller.getIndex);

app.get(`/profile/:username`, controller.getProfile);

module.exports = app;
