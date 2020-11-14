const Produk = require('../models/Produk');
const { produkValidation } = require('../config/Validation');

exports.create = async (req, res) => {
    try {
        const { nama_produk, keterangan, jumlah, harga } = req.body;

        // Validate the request
        const { error } = produkValidation(req.body);
        if( error ){
            return res.status(400).json({
                success: false,
                message: error.details[0].message
            });
        }

        const newProduk = new Produk({
            nama_produk, keterangan, jumlah, harga
        });
        await newProduk.save();

        res.status(200).json({
            success: true,
            message: "Produk baru berhasil ditambahkan!"
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error :(");
    }
}

exports.getProduk = async (req, res) => {
    try {
        const getAllProduk = await Produk.findAll();
        res.json({
            success: true,
            data: getAllProduk
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error :(");
    }
}

exports.getProdukById = async (req, res) => {
    try {
        const id = req.params.id;
        const getProduk = await Produk.findOne({ where: { id: id } });
        res.json({
            success: true,
            data: getProduk
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error :(");
    }
}

exports.editProduk = async (req, res) => {
    try {
        const { nama_produk, keterangan, jumlah, harga } = req.body;
        const id = req.params.id;

        // Validate the request
        const { error } = produkValidation(req.body);
        if( error ){
            return res.status(400).json({
                success: false,
                message: error.details[0].message
            });
        }

        await Produk.update({
            nama_produk, keterangan, jumlah, harga
        }, { where: { id: id } });

        res.status(200).json({
            success: true,
            message: "Produk berhasil diperbarui!"
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error :(");
    }
}

exports.deleteProduk = async (req, res) => {
    try {
        const id = req.params.id;
        await Produk.destroy({ where: { id: id } });
        res.json({
            success: true,
            message: "Produk berhasil dihapus!"
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error :(");
    }
}