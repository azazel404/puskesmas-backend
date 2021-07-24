"use strict";
module.exports = (sequelize, DataTypes) => {
	const Praktik = sequelize.define(
		"Praktik",
		{
			jam_mulai: DataTypes.STRING,
			jam_tutup: DataTypes.STRING,
			start_praktik: DataTypes.DATE,
			end_praktik: DataTypes.DATE,
			polis_id: DataTypes.INTEGER,
			status: DataTypes.STRING,
		},
		{}
	);
	Praktik.associate = function (models) {
		// associations can be defined here
		Praktik.belongsTo(models.Polis, {
			foreignKey: "polis_id",
			as: "polis",
		});
	};
	return Praktik;
};
