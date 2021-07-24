import { Dokter } from "../../models";
import { successResponse, errorResponse } from "../../helpers";

export const list = async (req, res) => {
	try {
		const result = await Dokter.findAll({});
		return successResponse(req, res, "", result);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const create = async (req, res) => {
	try {
		const { nama_dokter, spesialis, email, no_hp, alamat } = req.body;
		const payload = {
			nama_dokter,
			spesialis,
			email,
			no_hp,
			alamat,
		};
		const created = await Dokter.create(payload);
		return successResponse(req, res, "sukses create", created);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const update = async (req, res) => {
	try {
		const { nama_dokter, spesialis, email, no_hp, alamat } = req.body;
		const payload = {
			nama_dokter,
			spesialis,
			email,
			no_hp,
			alamat,
		};

		let find = await Dokter.findByPk(req.params.id);

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

export const deleted = async (req, res) => {
	try {
		let find = await Dokter.findByPk(req.params.id);

		if (!find) {
			return res.status(400).send({ message: "dokter tidak ditemukan" });
		} else {
			const destroy = await find.destroy();
			return successResponse(req, res, "sukses delete");
		}
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};
