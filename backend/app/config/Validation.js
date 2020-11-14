const Joi = require('joi');

const produkValidation = data => {
    const schema = Joi.object().keys({
        nama_produk: Joi.string().min(4).required(),
        keterangan: Joi.string(),
        jumlah: Joi.number().required(),
        harga: Joi.number().required()
    });
    return schema.validate(data);
}

module.exports.produkValidation = produkValidation;