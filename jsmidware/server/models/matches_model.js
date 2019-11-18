module.exports = (sequelize, DataTypes) => {
    return sequelize.define('matches', {
       
        player1_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        player2_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
         character1_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
         character2_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        matchwinner_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, { timestamps: false });
}
