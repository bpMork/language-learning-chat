const express = require('express');
const { submitChat } = require('../services/chat-service');

const router = express.Router();

router.post('/' + '?text=' + text + '&language' + language, async (req, res, next) => {
  try {
    const { text, language } = req.body;
    const response = submitChat(text, language);
    res.status(201).send(response);
  } catch (err) {
    next(err);
  }
});
