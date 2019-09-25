const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    dsc_titulo: {
        type: String,
        require: true
    },
    investimento_total: {
        type: String,
        require: true
    },
    sig_uf: {
        type: String,
        require: true
    },
    txt_municipios: {
        type: String,
        require: true
    },
    txt_executores: {
        type: String,
        require: true
    },
    dsc_orgao: {
        type: String,
        require: true
    },
    dat_ciclo: {
        type: String,
        require: true
    }
});


module.exports = mongoose.model('Posts', PostSchema);