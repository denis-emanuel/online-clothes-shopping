const express = require("express"); //older version of import
const bodyParser = require("body-parser"); //for JSON parsing
const path = require("path"); //native module, lets us build pathing for our directories

if (process.env.NODE_ENV !== "production") require("dotenv").config(); //load env into our environment

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express(); //instantiate a new express application
const port = process.env.PORT || 5000; //localhost on 3000

//from express
//any process coming in will have it's body converted to JSON so that we can use it
app.use(bodyParser.json());
//urlencoded -> make sure that URLs don't contain spaces and symbols
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  //express.static allows us to serve a certain file inside of this URL/path that we pass to it
  // /build is what gets build when we run our script inside of our package.json
  app.use(express.static(path.join(__dirname, "client/build")));

  //for any URL
  app.get("*", function (request, response) {
    //if a user is trying to get something from any of our URLs we want to send in our static files (Html, Css, Js files)
    //we will give the response as index.html file in our build which hold all of our code
    response.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

app.post("/payment", (request, response) => {
  const body = {
    source: request.body.token.id,
    amount: request.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (stripeErr, stripeResponse) => {
    if (stripeErr) {
      response.status(500).send({ error: stripeErr });
    } else {
      response.status(200).send({ success: stripeResponse });
    }
  });
});
