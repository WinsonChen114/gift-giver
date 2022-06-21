const express = require("express")
//logging middleware
const morgan = require("morgan")
const gift_exchange = require("./routes/gift-exchange")
const { NotFoundError } = require("./utils/errors")

const app = express()

app.use(morgan("tiny"))
app.use(express.json())
app.use("/gift-exchange", gift_exchange)

app.get("/", async (request, response, next) => {
    response.status(200).json({"ping": "pong"})
} )

module.exports = app