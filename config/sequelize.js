const Sequelize = require('sequelize');

export const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'mysql'
});

export default Sequelize