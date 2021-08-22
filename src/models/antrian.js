"use strict";
module.exports = (sequelize, DataTypes) => {
	const Antrian = sequelize.define(
		"Antrian",
		{
			users_id: DataTypes.INTEGER,
			praktik_id: DataTypes.INTEGER,
			dokter_id: DataTypes.INTEGER,
			puskemas_id: DataTypes.INTEGER,
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
			onDelete: "cascade",
		});
		Antrian.belongsTo(models.User, {
			foreignKey: "users_id",
			as: "users",
			onDelete: "cascade",
		});
		Antrian.belongsTo(models.Dokter, {
			foreignKey: "dokter_id",
			as: "dokters",
			onDelete: "cascade",
		});
		Antrian.belongsTo(models.Puskesmas, {
			foreignKey: "puskemas_id",
			as: "puskesmas",
			onDelete: "cascade",
		});
	};
	return Antrian;
};
