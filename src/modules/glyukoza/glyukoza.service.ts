import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Glyukoza } from './models/model.glyukoza';
import { CreateGlyukozaDto, UpdateGlyukozaDto } from './dto';
import { Bemors } from '../bemor/models/bemor.model';
import { Department } from '../department/models';

@Injectable()
export class GlyukozaService {
	constructor(@InjectModel(Glyukoza) private readonly glyukozaModel: typeof Glyukoza) { }
	async create(dto: CreateGlyukozaDto): Promise<CreateGlyukozaDto> {
		const newGlyukoza = new Glyukoza()
		newGlyukoza.bemorId = dto.bemorId;
		newGlyukoza.departmentId = dto.departmentId;
		newGlyukoza.xona = dto.xona;
		newGlyukoza.tibbiy_karta = dto.tibbiy_karta;
		newGlyukoza.g1 = dto.g1;
		newGlyukoza.g2 = dto.g2;
		newGlyukoza.g3 = dto.g3;
		newGlyukoza.g4 = dto.g4;
		newGlyukoza.g5 = dto.g5;
		return newGlyukoza.save();
	}

	async findAll(): Promise<Glyukoza[]> {
		return this.glyukozaModel.findAll({
			attributes: { exclude: ['bemorId', 'departmentId'] },
			include: [
				{ model: Bemors, attributes: ['id', 'fio'] },
				{ model: Department, attributes: ['id', 'bolim_nomi'] }
			]
		});
	}

	async findOne(id: number): Promise<Glyukoza> {
		return this.glyukozaModel.findByPk(id, {
			attributes: { exclude: ['bemorId', 'departmentId'] },
			include: [
				{ model: Bemors, attributes: ['id', 'fio'] },
				{ model: Department, attributes: ['id', 'bolim_nomi'] }
			]
		});
	}

	async update(id: number, updateGlyukozaDto: UpdateGlyukozaDto): Promise<Glyukoza> {
		await this.glyukozaModel.update(updateGlyukozaDto, { where: { id } });
		return this.findOne(id);
	}

	async remove(id: number): Promise<void> {
		await this.glyukozaModel.destroy({ where: { id } });
	}


}


