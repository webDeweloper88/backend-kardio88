import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateIndeksDto, UpdaeteIndeksDto } from './dto';
import { Bemors } from '../bemor/models/bemor.model';
import { Department } from '../department/models';
import { Indeks } from './model/model.indeks';

@Injectable()
export class IndeksService {
	constructor(@InjectModel(Indeks) private readonly indeksyModel: typeof Indeks) { }

	async create(dto: CreateIndeksDto): Promise<CreateIndeksDto> {

		const newIndeks = new Indeks()
		newIndeks.bemorId = dto.bemorId
		newIndeks.departmentId = dto.departmentId;
		newIndeks.rieatm = dto.rieatm;
		newIndeks.sana = dto.sana;
		newIndeks.t_c = dto.t_c;
		newIndeks.shikoyat = dto.shikoyat;
		newIndeks.anamnezis = dto.anamnezis;
		newIndeks.anamnezis_vitae = dto.anamnezis_vitae;
		newIndeks.epid = dto.epid;
		newIndeks.status = dto.status;
		newIndeks.nafas_olish = dto.nafas_olish;
		newIndeks.yurak_qon_tomir = dto.yurak_qon_tomir;
		newIndeks.ovqat_hazm_qilish = dto.ovqat_hazm_qilish;
		newIndeks.siydik_chiqarish_tizimi = dto.siydik_chiqarish_tizimi;
		newIndeks.gipotalamo = dto.gipotalamo;
		newIndeks.buyi = dto.buyi;
		newIndeks.ogirligi = dto.ogirligi;
		newIndeks.imt = dto.imt;
		newIndeks.imt2 = dto.imt2;
		newIndeks.qalqonsimon_bez = dto.qalqonsimon_bez;
		newIndeks.qalqonsimon_bezoldi_bez = dto.qalqonsimon_bezoldi_bez;
		newIndeks.buyrak_usti = dto.buyrak_usti;
		newIndeks.oshqozon_osti = dto.oshqozon_osti;
		newIndeks.jinsiy_tizim = dto.jinsiy_tizim;
		newIndeks.dastlabki_tashxiz = dto.dastlabki_tashxiz;
		newIndeks.asosiy_kasallik = dto.asosiy_kasallik;
		newIndeks.umumiy_qon_taxlili = dto.umumiy_qon_taxlili;
		newIndeks.umumiy_siydik_taxlili = dto.umumiy_siydik_taxlili;
		newIndeks.qondaqand_taxlili = dto.qondaqand_taxlili;
		newIndeks.bioximik_taxlil = dto.bioximik_taxlil;
		newIndeks.rw = dto.rw;
		newIndeks.rengenttekshiruv = dto.rengenttekshiruv;
		newIndeks.ekg_tekshiruv = dto.ekg_tekshiruv;
		newIndeks.davolovchi = dto.davolovchi;
		newIndeks.bolim_mudiri = dto.bolim_mudiri;
		newIndeks.direktor_urinbosari = dto.direktor_urinbosari;

		return newIndeks.save();
	}

	async findAll(): Promise<Indeks[]> {
		return this.indeksyModel.findAll({
			attributes: { exclude: ['bemorId', 'departmentId'] },
			include: [
				{ model: Bemors, attributes: ['id', 'fio'] },
				{ model: Department, attributes: ['id', 'bolim_nomi'] }
			]
		});
	}

	async findOne(id: number): Promise<Indeks> {
		return this.indeksyModel.findByPk(id, {
			attributes: { exclude: ['bemorId', 'departmentId'] },
			include: [
				{ model: Bemors, attributes: ['id', 'fio'] },
				{ model: Department, attributes: ['id', 'bolim_nomi'] }
			]
		});
	}

	async update(id: number, updaeteIndeksDto: UpdaeteIndeksDto): Promise<Indeks> {
		await this.indeksyModel.update(updaeteIndeksDto, { where: { id } });
		return this.findOne(id);
	}

	async remove(id: number): Promise<void> {
		await this.indeksyModel.destroy({ where: { id } });
	}
}