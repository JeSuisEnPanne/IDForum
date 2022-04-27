module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Discussion', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      contenu: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    //   ForumId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //   },

      


    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }