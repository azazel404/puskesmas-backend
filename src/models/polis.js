"use strict";
module.exports = (sequelize, DataTypes) => {
	const Polis = sequelize.define(
		"Polis",
		{
			nama_poli: DataTypes.STRING,
			puskesmas_id: DataTypes.INTEGER,
			dokter_id: DataTypes.INTEGER,
		},
		{}
	);
	Polis.associate = function (models) {
		// associations can be defined here
		Polis.belongsTo(models.Dokter, {
			foreignKey: "dokter_id",
			as: "dokters",
		});

		Polis.belongsTo(models.Puskesmas, {
			foreignKey: "puskesmas_id",
			as: "puskesmas",
		});
	};
	return Polis;
};
