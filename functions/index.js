const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JW7hjBt7rglUkGswKk6oPKeebxP8acN7vRzP1bedQZIXhmlsSyHJLIPwCH61NEJM44qkkLiKMA5QCmj1QX0Xn7M00jZk5yswv"
);
//API
//---App config
const app = express();

//---Middlewares
// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
const corsOptions = {
  origin: "https://fake-860f4.web.app/",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

//---API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved!", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//---listen command
exports.api = functions.https.onRequest(app);
