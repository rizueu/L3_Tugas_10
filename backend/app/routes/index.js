const router = require('express').Router();
const produkController = require('../controllers/produkController');

router.get('/', (req, res) => {
    res.status(200).send("Welcome to Arkcrud REST API");
});

router.post('/produk', produkController.create);
router.get('/produk', produkController.getProduk);
router.get('/produk/:id', produkController.getProdukById);
router.put('/produk/:id', produkController.editProduk);
router.delete('/produk/:id', produkController.deleteProduk);

module.exports = router;