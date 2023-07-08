import Sequelize, {sequelize} from "../../config/sequelize";

const User = sequelize.define('user', {
	id: {
		type: sequelize.NUMERIC
	},
	firstName: {
		type: Sequelize.STRING
	},
	lastName: {
		type: Sequelize.STRING
	}
});

export default User