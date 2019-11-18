const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/get/all', async (req, res) => {
    const result = await models.players.findAll({        
        include: [{
             model: models.characters,
             attributes: ['name']
        }]
    });
    res.send(result);
});

router.get('/get/:index', async (req, res) => {
    const result = await models.players.findAll({
        where: {
            id: req.params.index
        },
        include: [{
             model: models.characters,
             attributes: ['name']
        }]
    });
    res.send(result);
});

router.post('/post', async (req, res) => {
    await models.players.create(req.body);
    res.send();
});

router.delete('/delete/:index', async (req, res) => {
    models.players.destroy({
        where: { id: req.params.index }, limit: 1
    });
    res.send();
});

router.put('/update', async (req, res) => {
    models.players.update(req.body, {
            where: { id: req.body.id }
        });
    res.send();
});


module.exports = router;
