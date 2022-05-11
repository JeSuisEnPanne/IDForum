module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      pseudo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            msg: 'Le pseudo est déjà pris.'
        },
        validate: {
          notEmpty: { msg: 'Le pseudo ne peut pas etre vide.'}
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'Le mot de passe ne peut pas etre vide.'}
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            msg: "L'adresse email est déjà pris."
        },
        validate: {
          notEmpty: { msg: "L'adresse email ne peut pas etre vide."}
        }
      },
      avatar_id: {
        type: DataTypes.STRING,
      },
      isAdmin: {
        type: DataTypes.STRING,
      },
    })
  }