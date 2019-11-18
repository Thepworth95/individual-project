const Sequelize = require('sequelize');

var sequelize = new Sequelize(
    'individual_project',        //database
    'root',                      //username
    'password',                  //password
    {
        host: '127.0.0.1',
        dialect: 'mysql'
    }

);

// Models
const players = sequelize.import(__dirname + '/players_model');
const characters = sequelize.import(__dirname + '/characters_model');
const matches = sequelize.import(__dirname + '/matches_model');

// Associations
matches.belongsTo(players, { as: 'player1', foreignKey: 'player1_id' });
matches.belongsTo(players, { as: 'player2', foreignKey: 'player2_id' });
matches.belongsTo(players, { as: 'winner', foreignKey: 'matchwinner_id' });
// players.hasMany(matches);


matches.belongsTo(characters, { as: 'character1', foreignKey: 'character1_id' });
matches.belongsTo(characters, { as: 'character2', foreignKey: 'character2_id' });
// characters.hasMany(matches);

players.belongsTo(characters, { foreignKey: 'favouriteCharacter_id' });
// characters.hasOne(players);

//sequelize.sync({force: true});
// 


module.exports = {
    players,
    characters,
    matches
};
