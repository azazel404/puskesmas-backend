import { Puskesmas } from "../../models";
import { successResponse, errorResponse } from "../../helpers";

export const list = async (req, res) => {
	try {
		const result = await Puskesmas.findAll({});
		return successResponse(req, res, result);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const create = async (req, res) => {
	try {
		const { nama_puskesmas, lokasi, no_telp } = req.body;
		const payload = {
			nama_puskesmas,
			lokasi,
			no_telp,
		};
		const created = await Puskesmas.create(payload);
		return successResponse(req, res, "sukses create", created);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const update = async (req, res) => {
	try {
		const { nama_puskesmas, lokasi, no_telp } = req.body;
		const payload = {
			nama_puskesmas,
			lokasi,
			no_telp,
		};

		let find = await Dokter.findByPk(req.params.id);

		if (!find) {
			return res.status(400).send({ message: "puskesmas tidak ditemukan" });
		} else {
			const updated = await Puskesmas.update(payload);
			return successResponse(req, res, "sukses update", updated);
		}
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const deleted = async (req, res) => {
	try {
		let find = await Puskesmas.findByPk(req.params.id);

		if (!find) {
			return res.status(400).send({ message: "puskesmas tidak ditemukan" });
		} else {
			const destroy = await Puskesmas.destroy(payload);
			return successResponse(req, res, "sukses delete");
		}
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};
