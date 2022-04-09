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
        unique: {
          msg: 'Le nom est déjà pris.'
        },
        validate: {
          notEmpty: { msg: 'Le nom ne peut pas etre vide.'},
          notNull: { msg: 'Le nom est une propriété requise.'}
        }
      },
      contenu: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: 'Le nom est déjà pris.'
        },
        validate: {
          notEmpty: { msg: 'Le nom ne peut pas etre vide.'},
          notNull: { msg: 'Le nom est une propriété requise.'}
        }
      },
      nom_utilisateur: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: 'Le nom est déjà pris.'
        },
        validate: {
          notEmpty: { msg: 'Le nom ne peut pas etre vide.'},
          notNull: { msg: 'Le nom est une propriété requise.'}
        }
      },
      id_discussion: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: 'Le nom est déjà pris.'
        },
        validate: {
          notEmpty: { msg: 'Le nom ne peut pas etre vide.'},
          notNull: { msg: 'Le nom est une propriété requise.'}
        }
      },
      likes: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: 'Le nom est déjà pris.'
        },
        validate: {
          notEmpty: { msg: 'Le nom ne peut pas etre vide.'},
          notNull: { msg: 'Le nom est une propriété requise.'}
        }
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