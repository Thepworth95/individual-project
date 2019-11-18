module.exports = (sequelize, DataTypes) => {
    return sequelize.define('characters', {
        name: {
            type: DataTypes.STRING, 
            unique: true,
            allowNull: false,
        },
        final_smash: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        alt_final_smash: {
            type: DataTypes.STRING
        },  
        tier: {
            type: DataTypes.CHAR,
            allowNull: false,
            validate: {
                isIn: [["S", "A", "B", "C", "D", "E"]],
            }
        }
    }, {timestamps: false});
}
