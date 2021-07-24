import { Antrian,Polis } from "../../models";

import { successResponse, errorResponse } from "../../helpers";

export const list = async (req, res) => {
	try {
		const result = await Antrian.findAll({ include: ["users","praktiks"]});
		return successResponse(req, res, "", result);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const historyList = async (req, res) => {
	try {
		const result = await Antrian.findAll({ include: ["users","praktiks"]},{where : {status_antrian : "selesai"}});
		return successResponse(req, res, "", result);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const create = async (req, res) => {
	try {
		const { 
			users_id,
			praktik_id,
			tanggal_kunjungan,
			status_antrian,
			nomor_antrian 
		} = req.body;
		const payload = {
			users_id,
			praktik_id,
			tanggal_kunjungan,
			status_antrian,
			nomor_antrian
		};
		const created = await Antrian.create(payload);
		return successResponse(req, res, "sukses create", created);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const update = async (req, res) => {
	try {
		const { 
			status_antrian,
			
		} = req.body;
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
