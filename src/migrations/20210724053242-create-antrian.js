"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("Antrians", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			users_id: {
				type: Sequelize.INTEGER,
			},
			praktik_id: {
				type: Sequelize.INTEGER,
			},
			dokter_id: {
				type: Sequelize.INTEGER,
			},
			puskemas_id: {
				type: Sequelize.INTEGER,
			},
			tanggal_kunjungan: {
				type: Sequelize.DATE,
			},
			status_antrian: {
				type: Sequelize.STRING,
			},
			nomor_antrian: {
				type: Sequelize.INTEGER,
			},

			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("Antrians");
	},
};
