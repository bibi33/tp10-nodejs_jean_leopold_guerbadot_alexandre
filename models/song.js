module.exports = (sequelize, Sequelize) => {
    return sequelize.define("Song", {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV1,
            },
            title: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            type: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            artist: {
                type: Sequelize.TEXT,
                allowNull: false,

            },
            duration: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
        },
        );
}