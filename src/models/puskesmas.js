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
	};
	return Puskesmas;
};