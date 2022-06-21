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

//handles all 404 errors what were not matched by a route
app.use((request, response, next) => {
    return next(new NotFoundError())
}) 

//Generic error handler, anythign that is not handeled at this point is handeled
app.use((error, request, response, next) => {
    return response.status(error.status || 500).json({
        error: {message: error.message || "Something went wrong in the application", status: error.status || 500}
    })
})

module.exports = app