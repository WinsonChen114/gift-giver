const express = require("express")
const router = express.Router()
const GiftExchange = require("../models/gift-exchange.js")
const { BadRequestError} = require("../utils/errors")

// let names = ["me", "you", "them", "us", "her", "him", "they", "y'all"]
router.post("/pairs", async (request, response, next) => {
    try{
        if(!request.body)
        {
            throw new BadRequestError
        }
        if(!request.body["names"])
        {
            throw new BadRequestError
        }
    }
    catch (err)
    {
        next(err)
    }
    try {
        const random = await GiftExchange.pairs(request.body["names"])
        response.status(200).json(random)
    }
    catch (err) {
        next(err)
    }

})

router.post("/traditional", async (request, response, next) => {
    try{
        //If there is no request body, or names does not exist, throw a BadRequestError
        if(!request.body)
        {
            throw new BadRequestError
        }
        if(!request.body["names"])
        {
            throw new BadRequestError
        }
    }
    catch (err)
    {
        next(err)
    }
    try {
        const random = await GiftExchange.traditional(request.body["names"])
        response.status(200).json(random)
    }
    catch (err) {
        next(err)
    }
})
module.exports = router