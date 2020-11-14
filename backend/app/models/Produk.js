const { DataTypes } = require('sequelize');
const Database = require('../config/Database');

const Produk = Database.define('Produk', {
    nama_produk: {
        type: DataTypes.STRING
    },
    keterangan: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    jumlah: {
        type: DataTypes.INTEGER
    },
    harga: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true
});

module.exports = Produk;