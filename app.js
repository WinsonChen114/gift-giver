const express = require("express")
//logging middleware
const morgan = require("morgan")

const app = express()

app.use(morgan("tiny"))
app.use(express.json())

app.get("/", (request, response) => {
    response.status(200).json({"ping": "pong"})
} )

module.exports = app