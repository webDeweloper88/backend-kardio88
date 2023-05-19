import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAnalizDto,  UpdateAnalizDto } from './dto';
import { Bemors } from '../bemor/models/bemor.model';
import { Department } from '../department/models';
import { Analiz } from './model/model.analiz';


@Injectable()
export class AnalizService {
	constructor(@InjectModel(Analiz) private readonly analizModel: typeof Analiz) { }
	async create(dto: CreateAnalizDto): Promise<CreateAnalizDto> {
		const newAnaliz = new Analiz()
		newAnaliz.bemorId = dto.bemorId;
		newAnaliz.departmentId = dto.departmentId;
		newAnaliz.sana = dto.sana;
		newAnaliz.tibbiy_karta_Raqami = dto.tibbiy_karta_Raqami;
		newAnaliz.miqdor = dto.miqdor;
		newAnaliz.rang = dto.rang;
		newAnaliz.tiniq = dto.tiniq;
		newAnaliz.nisbiy_zichlik = dto.nisbiy_zichlik;
		newAnaliz.oqsil = dto.oqsil;
		newAnaliz.gl = dto.gl;
		newAnaliz.geton_tanachalari = dto.geton_tanachalari;
		newAnaliz.qon_borligini_aniqlash_reaks = dto.qon_borligini_aniqlash_reaks;
		newAnaliz.urobilinoidlar = dto.urobilinoidlar;
		newAnaliz.ot = dto.ot;
		newAnaliz.kislotasi = dto.kislotasi;
		return newAnaliz.save();
	}

	async findAll(): Promise<Analiz[]> {
		return this.analizModel.findAll({
			attributes: { exclude: ['bemorId', 'departmentId'] },
			include: [
				{ model: Bemors, attributes: ['id', 'fio'] },
				{ model: Department, attributes: ['id', 'bolim_nomi'] }
			]
		});
	}

	async findOne(id: number): Promise<Analiz> {
		return this.analizModel.findByPk(id, {
			attributes: { exclude: ['bemorId', 'departmentId'] },
			include: [
				{ model: Bemors, attributes: ['id', 'fio'] },
				{ model: Department, attributes: ['id', 'bolim_nomi'] }
			]
		});
	}

	async update(id: number, updateAnalizDto: UpdateAnalizDto): Promise<Analiz> {
		await this.analizModel.update(updateAnalizDto, { where: { id } });
		return this.findOne(id);
	}

	async remove(id: number): Promise<void> {
		await this.analizModel.destroy({ where: { id } });
	}


}
