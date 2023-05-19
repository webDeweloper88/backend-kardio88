import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bemors } from '../bemor/models/bemor.model';
import { Department } from '../department/models';
import { Bioximik } from './model/model.bioximik';
import { UpdateBioximikDto, CreateBioximikDto } from './dto';


@Injectable()
export class BioximikService {
	constructor(@InjectModel(Bioximik) private readonly bioximikModel: typeof Bioximik) { }
	async create(dto: CreateBioximikDto): Promise<CreateBioximikDto> {
		const newBioximik = new Bioximik()
		newBioximik.bemorId = dto.bemorId;
		newBioximik.departmentId = dto.departmentId;
		newBioximik.albumin = dto.albumin;
		newBioximik.xolesterin_umumiy = dto.xolesterin_umumiy;
		newBioximik.trigliseridlar = dto.trigliseridlar;
		newBioximik.glyukoza = dto.glyukoza;
		newBioximik.mochevina = dto.mochevina;
		newBioximik.kreatin = dto.kreatin;
		newBioximik.alaninaminotransferaza = dto.alaninaminotransferaza;
        newBioximik.aspartataminotransferza = dto.aspartataminotransferza;
        newBioximik.gammagglutamilransferza= dto.gammagglutamilransferza;
        newBioximik.laktatdegidrogenaza = dto.laktatdegidrogenaza;
        newBioximik.a_amilaza = dto.a_amilaza;
        newBioximik.ishqoriy_fostataza = dto.ishqoriy_fostataza;
        newBioximik.tmol=dto.tmol;
        newBioximik.kaliy=dto.kaliy;
        newBioximik.kaltsiy=dto.kaltsiy;
        newBioximik.temir =dto.temir;
        newBioximik.fosfor = dto.fosfor;
        newBioximik.xlor =dto.xlor;
		return newBioximik.save();
	}

	async findAll(): Promise<Bioximik[]> {
		return this.bioximikModel.findAll({
			attributes: { exclude: ['bemorId', 'departmentId'] },
			include: [
				{ model: Bemors, attributes: ['id', 'fio'] },
				{ model: Department, attributes: ['id', 'bolim_nomi'] }
			]
		});
	}

	async findOne(id: number): Promise<Bioximik> {
		return this.bioximikModel.findByPk(id, {
			attributes: { exclude: ['bemorId', 'departmentId'] },
			include: [
				{ model: Bemors, attributes: ['id', 'fio'] },
				{ model: Department, attributes: ['id', 'bolim_nomi'] }
			]
		});
	}

	async update(id: number, updateBioximikDto: UpdateBioximikDto): Promise<Bioximik> {
		await this.bioximikModel.update(updateBioximikDto, { where: { id } });
		return this.findOne(id);
	}

	async remove(id: number): Promise<void> {
		await this.bioximikModel.destroy({ where: { id } });
	}


}
