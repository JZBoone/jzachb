const express = require("express");
const sendMessageRouter = express.Router();

const { SENDGRID_API_KEY } = process.env;
const { SENDGRID_SENDER } = process.env;
const Sendgrid = require("@sendgrid/client");

Sendgrid.setApiKey(SENDGRID_API_KEY);

const sendMessage = async (req, res, next) => {
  const request = {
    method: "POST",
    url: "/v3/mail/send",
    body: {
      personalizations: [
        {
          to: [{ email: "jzachb@gmail.com" }],
          subject: "jzachb.com Message"
        }
      ],
      from: { email: SENDGRID_SENDER },
      content: [
        {
          type: "text/plain",
          value: req.body.message
        }
      ]
    }
  };

  try {
    await Sendgrid.request(request);
  } catch (err) {
    next(err);
    return;
  }

  res.send({
    success: true
  });
};

sendMessageRouter.post("/send-message", sendMessage);

module.exports = sendMessageRouter;
