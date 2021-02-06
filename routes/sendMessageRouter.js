const express = require("express");
const {Datastore} = require('@google-cloud/datastore');
const sendMessageRouter = express.Router();

const datastore = new Datastore();

const { SENDGRID_SENDER } = process.env;
const Sendgrid = require("@sendgrid/client");


const getSendGridApiKey = async () => {
  const query = datastore.createQuery('config');
  const [results] = await datastore.runQuery(query);
  return results.find((r) => !!r.SENDGRID_API_KEY).SENDGRID_API_KEY;
};

(async () => {
  try {
    const SENDGRID_API_KEY = await getSendGridApiKey();
    Sendgrid.setApiKey(SENDGRID_API_KEY);
  } catch (e) {
    console.log('** FAILED TO RETRIEVE SEND GRID API KEY FROM DATASTORE')
    console.log(e);
  }
})()

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
      from: { email: 'noreply@jzachb.com' },
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
    success: true,
    sendGridApiKey: SENDGRID_SENDER 
  });
};

sendMessageRouter.post("/send-message", sendMessage);

module.exports = sendMessageRouter;
