module.exports = (sequelize, DataTypes) => {
    return sequelize.define('players', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        favouriteCharacter_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, { timestamps: false });
}
