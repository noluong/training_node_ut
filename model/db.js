const Sequelize = require('sequelize');
const configDb = {
	database: 'nola_test',
	username: 'root',
	password: 123456,
	dialect: 'mysql',
	operatorsAliases: false
};
const sequelize = new Sequelize(configDb);

sequelize.import(__dirname + '/comments')

module.exports = {
	sequelize: sequelize,
	Sequelize: Sequelize
};