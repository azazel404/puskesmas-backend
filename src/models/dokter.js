"use strict";
module.exports = (sequelize, DataTypes) => {
	const Dokter = sequelize.define(
		"Dokter",
		{
			nama_dokter: {
				type: DataTypes.STRING,
			},
			spesialis: {
				type: DataTypes.STRING,
			},
			email: {
				type: DataTypes.STRING,
			},
			no_hp: {
				type: DataTypes.STRING,
			},
			alamat: {
				type: DataTypes.STRING,
			},
		},
		{}
	);
	Dokter.associate = function (models) {
		// associations can be defined here
		Dokter.hasOne(models.Polis, {
			foreignKey: "dokter_id",
			as: "polis",
		});
	};
	return Dokter;
};
