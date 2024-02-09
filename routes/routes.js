const express = require('express')
const { getProducts } = require('../consultas/consultas')

const router = express.Router()

router.get('/products', async(req, res) => {
    try {
        const queryString = req.query
        const result = await getProducts(queryString);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router