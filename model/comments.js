const Comments = (sequelize, DataTypes) => {
	sequelize.define('comments', {
	  id: {type: DataTypes.INTEGER, primaryKey: true },
	  message: {type: DataTypes.TEXT},
	  nickname: {type: DataTypes.TEXT}
	});
};

module.exports = Comments;