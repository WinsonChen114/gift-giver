const express = require("express")
const router = express.Router()
const GiftExchange = require("../models/gift-exchange.js")

// let names = ["me", "you", "them", "us", "her", "him", "they", "y'all"]
router.post("/pairs", async (request, response, next) => {
    try {
        const random = await GiftExchange.pairs(request.body["names"])
        response.status(200).json(random)
    }
    catch (err) {
        next(err)
    }

})

router.post("/traditional", async (request, response, next) => {
    response.status(200).json({ "traditional": "ok" })
})
module.exports = router