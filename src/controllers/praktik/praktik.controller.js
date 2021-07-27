import { Praktik } from "../../models";
import { successResponse, errorResponse } from "../../helpers";

export const list = async (req, res) => {
	try {
		const result = await Praktik.findAll({ include: ["polis", "dokters", "puskesmas"] });
		return successResponse(req, res, "", result);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const create = async (req, res) => {
	try {
		const {
			nama_praktik,
			jam_mulai,
			jam_tutup,
			start_praktik,
			end_praktik,
			polis_id,
			dokter_id,
			puskesmas_id,
			status,
		} = req.body;
		const payload = {
			nama_praktik,
			jam_mulai,
			jam_tutup,
			start_praktik,
			end_praktik,
			polis_id,
			dokter_id,
			puskesmas_id,
			status,
		};
		const created = await Praktik.create(payload);
		return successResponse(req, res, "sukses create", created);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const update = async (req, res) => {
	try {
		const {
			nama_praktik,
			jam_mulai,
			jam_tutup,
			start_praktik,
			end_praktik,
			polis_id,
			dokter_id,
			puskesmas_id,
			status,
		} = req.body;
		const payload = {
			nama_praktik,
			jam_mulai,
			jam_tutup,
			start_praktik,
			end_praktik,
			polis_id,
			dokter_id,
			puskesmas_id,
			status,
		};
		let find = await Praktik.findByPk(req.params.id);

		if (!find) {
			return res.status(400).send({ message: "praktik tidak ditemukan" });
		} else {
			const updated = await find.update(payload);
			return successResponse(req, res, "sukses update", updated);
		}
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const updateStatus = async (req, res) => {
	try {
		const { status } = req.body;
		const payload = {
			status,
		};
		let find = await Praktik.findByPk(req.params.id);

		if (!find) {
			return res.status(400).send({ message: "praktik tidak ditemukan" });
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
		let find = await Praktik.findByPk(req.params.id);

		if (!find) {
			return res.status(400).send({ message: "praktik tidak ditemukan" });
		} else {
			const destroy = await find.destroy();
			return successResponse(req, res, "sukses delete");
		}
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};
