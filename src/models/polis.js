"use strict";
module.exports = (sequelize, DataTypes) => {
	const polis = sequelize.define(
		"polis",
		{
			nama_poli: DataTypes.STRING,
			puskesmas_id: DataTypes.NUMBER,
			dokter_id: DataTypes.NUMBER,
		},
		{}
	);
	polis.associate = function (models) {
		// associations can be defined here
	};
	return polis;
};
