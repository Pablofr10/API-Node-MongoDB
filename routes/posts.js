const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Todos
router.get('/', async (req, res)=>{
    try {
        const post= await Post.find();
        res.json(post);
    } catch (error) {
        res.json({message:error})
    }
});

// Adicionar
router.post('/', async (req, res) => {
    const post = new Post({
        dsc_titulo: req.body.dsc_titulo,
        investimento_total: req.body.investimento_total,
        sig_uf: req.body.sig_uf,
        txt_municipios: req.body.txt_municipios,
        txt_executores: req.body.txt_executores,
        dsc_orgao: req.body.dsc_orgao,
        dat_ciclo: req.body.dat_ciclo,
    });

    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({mensagem: err}) 
    }
});

// Por id
router.get('/:id', async (req, res) => {
    try {
        //console.log(req.params.id);
        const post = await Post.findById(req.params.id);
        res.json(post);
    } catch (error) {
        res.json({ message: error });
    }
   
});

// Deletar
router.delete('/delete/:id', async (req, res) => {
    try {
        const removePost = await Post.remove({_id: req.params.id });
        res.json(removePost);
    } catch (error) {
        res.json({ message: error });
    }
   
});

// Atualizar
router.patch('/update/:id', async (req, res) => {
    try {
        const updatePost = await Post.updateOne({ _id: req.params.id},
            { $set: { investimento_total: req.body.investimento_total }});
            res.json(updatePost);
    } catch (error) {
        res.json({ message: error })
    }
});


module.exports = router;