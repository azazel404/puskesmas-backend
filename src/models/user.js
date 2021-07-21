module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		"User",
		{
			nama: {
				type: DataTypes.STRING,
			},
			nik: {
				type: DataTypes.STRING,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			alamat: {
				type: DataTypes.STRING,
			},
			email: {
				type: DataTypes.STRING,
			},
			nomor_hp: {
				type: DataTypes.STRING,
			},
			profile: {
				type: DataTypes.STRING,
			},
			isAdmin: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
		},
		{
			defaultScope: {
				attributes: { exclude: ["password", "isAdmin"] },
			},
			scopes: {
				withSecretColumns: {
					attributes: { include: ["password", "isAdmin"] },
				},
			},
		}
	);
	User.associate = function (models) {
		// associations can be defined here
	};
	return User;
};
