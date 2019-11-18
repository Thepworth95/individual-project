const express = require('express');
const cors = require('cors');
const playersRouter = require('./routers/playersRouter');
const charactersRouter = require('./routers/charactersRouter');
const matchesRouter = require('./routers/matchesRouter');
const app = express();


app.use(cors());
app.use(express.json());

app.use('/players', playersRouter);
app.use('/characters', charactersRouter);
app.use('/matches', matchesRouter);

// app.use((err, req, res, next) => {
//     if (err === 'login failed') {
//         res.status(400).send({
//             error: 'something went wrong',
//             message: err
//         });
//     } else if (err === 'field not filled') {
//         res.status(401).send({
//             error: 'something went wrong',
//             message: err
//         });
//     }
// });

app.listen(8080, () => {
    console.log('Server running on port 8080.')
});


module.exports = app;