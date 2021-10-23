module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    email: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });

  return User;
};
