'use strict'

const express = require('express');
const router = express.Router();
const Message = require('../models/message');

router.post('/', function (req, res, next) {
  let message = new Message({
      content: req.body.content
  });
  message.save((err, result) => {
    if (err) {
      return res.status(500).json({
        title: 'Bad things happened',
        error: err
      });
    }
    res.status(201).json({
      message: 'Message was saved',
      obj: result
    });
  });
});

module.exports = router;
