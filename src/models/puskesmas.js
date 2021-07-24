"use strict";
module.exports = (sequelize, DataTypes) => {
	const Puskesmas = sequelize.define(
		"Puskesmas",
		{
			nama_puskesmas: DataTypes.STRING,
			lokasi: DataTypes.STRING,
			no_telp: DataTypes.STRING,
		},
		{}
	);
	Puskesmas.associate = function (models) {
		// associations can be defined here
		Puskesmas.hasOne(models.Polis, {
			foreignKey: "puskesmas_id",
			as: "polis",
		});
	};
	return Puskesmas;
};
