const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/get/all', async (req, res) => {
    const result = await models.matches.findAll({
        include: [{
            model: models.players,
            as: 'player1',
            attributes: ['username']
        },
        {
            model: models.players,
            as: 'player2',
            attributes: ['username']
        },
        {
            model: models.players,
            as: 'winner',
            attributes: ['username']
        },
        {
            model: models.characters,
            as: 'character1',
            attributes: ['name']
        }, 
        {
            model: models.characters,
            as: 'character2',
            attributes: ['name']
        }]
    });
    res.send(result);
});

router.get('/get/:index', async (req, res) => {
    const result = await models.matches.findAll({
        where: {
            id: req.params.index
        }
    });
    res.send(result);
});

router.post('/post', async (req, res) => {
    await models.matches.create(req.body);
    res.send();
});

router.delete('/delete/:index', async (req, res) => {
    models.matches.destroy({
        where: { id: req.params.index }, limit: 1
    });
    res.send();
});


module.exports = router;

// router.get('/:index', async (req, res) => {
//     const [first = null] = await models.matches.findAll({ where: { id: req.params.index } });
//     if (first) {
//         res.send(first);
//     } else {
//         res.status(404).send({ message: 'Item not found for index ' + req.params.index });
//     }
// });
