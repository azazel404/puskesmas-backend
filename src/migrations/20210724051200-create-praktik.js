"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("Praktiks", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			jam_mulai: {
				type: Sequelize.STRING,
			},
			jam_tutup: {
				type: Sequelize.STRING,
			},
			start_praktik: {
				type: Sequelize.DATE,
			},
			end_praktik: {
				type: Sequelize.DATE,
			},
			polis_id: {
				type: Sequelize.INTEGER,
			},
			status: {
				type: Sequelize.STRING,
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
		return queryInterface.dropTable("Praktiks");
	},
};
