module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.createTable("Users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			nama: {
				type: Sequelize.STRING,
			},
			nik: {
				type: Sequelize.STRING,
			},
			password: {
				type: Sequelize.STRING,
			},
			alamat: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			nomor_hp: {
				type: Sequelize.STRING,
			},
			profile: {
				type: Sequelize.STRING,
			},
			isAdmin: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		}),
	down: (queryInterface, Sequelize) => queryInterface.dropTable("Users"),
};
