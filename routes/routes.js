const express = require('express')
const {
  getProducts,
  getProductsOrder,
  getProductPaginacion,
} = require("../consultas/consultas");

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


router.get('/product/order', async(req, res) => {
    try {
        const queryString = req.query
        const result = await getProductsOrder(queryString);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get('/product/pagination', async(req, res) => {
    try {
        const queryString = req.query
        const result = await getProductPaginacion(queryString);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router