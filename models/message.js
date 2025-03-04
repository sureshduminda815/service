module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define("Message", {
      text: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isUser: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    });
    return Message;
  };