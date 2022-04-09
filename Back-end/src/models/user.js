module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      pseudo: {
        type: DataTypes.STRING,
        unique: {
            msg: 'Le pseudo est déjà pris.'
        },
        validate: {
          notEmpty: { msg: 'Le pseudo ne peut pas etre vide.'}
        }
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: 'Le mot de passe ne peut pas etre vide.'}
        }
      },
      email: {
        type: DataTypes.STRING,
        unique: {
            msg: "L'adresse email est déjà pris."
        },
        validate: {
          notEmpty: { msg: "L'adresse email ne peut pas etre vide."}
        }
      },
      nom: {
        type: DataTypes.STRING,
      },
      prenom: {
        type: DataTypes.STRING,
      },
      avatar: {
        type: DataTypes.STRING,
      },
    })
  }