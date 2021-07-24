"use strict";
module.exports = (sequelize, DataTypes) => {
	const Antrian = sequelize.define(
		"Antrian",
		{
			users_id: DataTypes.INTEGER,
			praktik_id: DataTypes.INTEGER,
			tanggal_kunjungan: DataTypes.DATE,
			status_antrian: DataTypes.STRING,
			nomor_antrian: DataTypes.INTEGER,
		},
		{}
	);
	Antrian.associate = function (models) {
		// associations can be defined here
		Antrian.belongsTo(models.Praktik, {
			foreignKey: "praktik_id",
			as: "praktiks",
		});
		Antrian.belongsTo(models.User, {
			foreignKey: "users_id",
			as: "users",
		});
	};
	return Antrian;
};
