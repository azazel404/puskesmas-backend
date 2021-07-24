import { Polis } from "../../models";
import { successResponse, errorResponse } from "../../helpers";

export const list = async (req, res) => {
	try {
		const result = await Polis.findAll({ include: ["puskesmas", "dokters"] });
		return successResponse(req, res, "", result);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const create = async (req, res) => {
	try {
		const { nama_poli, puskesmas_id, dokter_id } = req.body;
		const payload = {
			nama_poli,
			puskesmas_id,
			dokter_id,
		};
		const created = await Polis.create(payload);
		return successResponse(req, res, "sukses create", created);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const update = async (req, res) => {
	try {
		const { nama_poli, puskesmas_id, dokter_id } = req.body;
		const payload = {
			nama_poli,
			puskesmas_id,
			dokter_id,
		};

		let find = await Polis.findByPk(req.params.id);

		if (!find) {
			return res.status(400).send({ message: "polis tidak ditemukan" });
		} else {
			const updated = await find.update(payload);
			return successResponse(req, res, "sukses update", updated);
		}
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const deleted = async (req, res) => {
	try {
		let find = await Polis.findByPk(req.params.id);

		if (!find) {
			return res.status(400).send({ message: "polis tidak ditemukan" });
		} else {
			const destroy = await find.destroy();
			return successResponse(req, res, "sukses delete");
		}
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};
