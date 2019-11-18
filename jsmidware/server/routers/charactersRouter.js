const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/get/all', async (req, res) => {
    const result = await models.characters.findAll();
    res.send(result);
});

router.get('/get/:index', async (req, res) => {
    const result = await models.characters.findAll({
        where: {
            id: req.params.index
        }
    });
    res.send(result);
});

router.post('/post', async (req, res) => {
    await models.characters.create(req.body);
    res.send();
});


// models.characters.update({ name: 'bob' }, { where: { id: 1234 } });
// models.characters.destroy({ where: { blah: 'shit' }, limit: 1 });





module.exports = router;

// router.get('/:index', async (req, res) => {
//     const [first = null] = await models.characters.findAll({ where: { id: req.params.index } });
//     if(first) {
//         res.send(first);
//     } else {
//         res.status(404).send({message: 'Item not found for index ' + req.params.index});
//     }
// });
