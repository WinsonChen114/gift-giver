const express = require("express")
const router = express.Router()

router.post("/pairs", async (request, response, next) => {
    response.status(200).json({ "pairs": "ok" })
})

router.post("/traditional", async (request, response, next) => {
    response.status(200).json({ "traditional": "ok" })
})
module.exports = router