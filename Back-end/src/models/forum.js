module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Forum', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      sujet: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contenu: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nom_utilisateur: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_discussion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      likes: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //   isUrl: { msg: "Utilisez uniquement une URL valide pour l'image."},
        //   notNull: { msg: "L'image est une propriété requise."}
        // }
      },
  
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }