import { Antrian } from "../../models";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const xl = require("excel4node");
const wb = new xl.Workbook();
const ws = wb.addWorksheet("Worksheet Name");
const moment = require("moment");

import { successResponse, errorResponse } from "../../helpers";

export const list = async (req, res) => {
	try {
		const result = await Antrian.findAll({ include: ["users", "praktiks"] });
		return successResponse(req, res, "", result);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const historyList = async (req, res) => {
	try {
		const result = await Antrian.findAll(
			{ include: ["users", "praktiks"] },
			{ where: { status_antrian: "selesai" } }
		);
		return successResponse(req, res, "", result);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const exportListHistory = async (req, res) => {
	try {
		const startDate = req.query.startDate;
		const endDate = req.query.endDate;

		if (!startDate || !endDate) {
			return res
				.status(400)
				.json({ message: "tidak ditemukan tanggal awal dan tanggal akhir" });
		}

		const transactions = await Antrian.findAll({
			order: [["createdAt", "DESC"]],
			where: {
				status_antrian: "selesai",
				[Op.or]: {
					createdAt: {
						[Op.between]: [startDate, endDate],
					},
					createdAt: {
						[Op.between]: [startDate, endDate],
					},
				},
			},
			include: ["users", "praktiks"],
		});

		if (transactions.length < 1) {
			return res.status(500).json({
				message: "data laporan transaksi buku  ditemukan",
			});
		}

		// const wb = new xl.Workbook();
		// const ws = wb.addWorksheet('Sheet 1');

		let transactionDisplay = [];
		transactions.forEach((item) => {
			const transactionData = {
				...item.dataValues,
			};
			transactionDisplay.push(transactionData);
		});

		// header
		let headingColumnIndex = 1;
		Object.keys(transactionDisplay[0]).forEach((key) => {
			if (key != "isAdmin") {
				ws.cell(1, headingColumnIndex++).string(key);
			}
		});

		//Write Data in Excel file
		let rowIndex = 2;
		transactionDisplay.forEach((record) => {
			let columnIndex = 1;
			Object.keys(record).forEach((columnName) => {
				if (columnName != "user" && columnName != "book") {
					ws.cell(rowIndex, columnIndex++).string(
						record[columnName] == null ? "" : record[columnName].toString()
					);
				}
			});
			rowIndex++;
		});

		wb.write(`Report Transaction  - ${new Date().getTime() / 1000}.xlsx`, res);
		// res.writeHead(200, [['Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']]);
		// wb.writeToBuffer('Excel.xlsx').then((buffer) => {
		//   res.end(new Buffer(buffer, 'base64'));
		// });
	} catch (error) {
		console.log(error);
	}
};

export const create = async (req, res) => {
	try {
		const {
			users_id,
			praktik_id,
			dokter_id,
			puskemas_id,
			tanggal_kunjungan,
			status_antrian,
			nomor_antrian,
		} = req.body;
		const payload = {
			users_id,
			praktik_id,
			dokter_id,
			puskemas_id,
			tanggal_kunjungan,
			status_antrian,
			nomor_antrian,
		};
		const created = await Antrian.create(payload);
		return successResponse(req, res, "sukses create", created);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const update = async (req, res) => {
	try {
		const { status_antrian } = req.body;
		const payload = {
			status_antrian,
		};

		let find = await Antrian.findByPk(req.params.id);

		if (!find) {
			return res.status(400).send({ message: "dokter tidak ditemukan" });
		} else {
			const updated = await find.update(payload);
			return successResponse(req, res, "sukses update", updated);
		}
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

// export const deleted = async (req, res) => {
// 	try {
// 		let find = await Dokter.findByPk(req.params.id);

// 		if (!find) {
// 			return res.status(400).send({ message: "dokter tidak ditemukan" });
// 		} else {
// 			const destroy = await find.destroy();
// 			return successResponse(req, res, "sukses delete");
// 		}
// 	} catch (error) {
// 		return errorResponse(req, res, error.message);
// 	}
// };
