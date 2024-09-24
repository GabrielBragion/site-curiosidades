// routes/curiosities.js
const express = require('express');
const router = express.Router();
const Curiosity = require('../models/Curiosity');

// Rota para adicionar uma nova curiosidade
router.post('/add', async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ message: 'O campo de curiosidade é obrigatório' });
    }

    try {
        const newCuriosity = new Curiosity({ text });
        await newCuriosity.save();
        res.status(201).json({ message: 'Curiosidade adicionada com sucesso', curiosity: newCuriosity });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar curiosidade', error });
    }
});

// Rota para obter todas as curiosidades
router.get('/all', async (req, res) => {
    try {
        const curiosities = await Curiosity.find();
        res.status(200).json(curiosities);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar curiosidades', error });
    }
});

// routes/curiosities.js (adicione ao arquivo existente)
router.get('/random', async (req, res) => {
  try {
      const count = await Curiosity.countDocuments();
      const random = Math.floor(Math.random() * count);
      const randomCuriosity = await Curiosity.findOne().skip(random);
      res.status(200).json(randomCuriosity);
  } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar curiosidade aleatória', error });
  }
});

module.exports = router;



