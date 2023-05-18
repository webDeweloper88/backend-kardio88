import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Labaratory } from './model/labaratory.model';
import { CreateLabaratoryDto, UpdateLabaratoryDto } from './dto';
import { Bemors } from '../bemor/models/bemor.model';
import { Department } from '../department/models';

@Injectable()
export class LabaratoryService {
	constructor(@InjectModel(Labaratory) private readonly labaratoryModel: typeof Labaratory) { }

	async create(dto: CreateLabaratoryDto): Promise<CreateLabaratoryDto> {

		const newLabaratory = new Labaratory()
		newLabaratory.bemorId = dto.bemorId;
		newLabaratory.departmentId = dto.departmentId;
		newLabaratory.kasallik = dto.kasallik;
		newLabaratory.selnaya_kapilyarnaya_krov = dto.selnaya_kapilyarnaya_krov;
		newLabaratory.pozoboy_moche = dto.pozoboy_moche;
		newLabaratory.utreney_moche = dto.utreney_moche;
		newLabaratory.stuchnoy_moche = dto.stuchnoy_moche;
		newLabaratory.sana = dto.sana;

		return newLabaratory.save();
	}

	// async findAll(): Promise<Labaratory[]> {
	// 	return this.labaratoryModel.findAll({
	// 		attributes: { exclude: ['bemorId', 'departmentId'] },
	// 		include: [
	// 			{ association: Labaratory.associations.bemor, attributes: ['id', 'fio'] },
	// 			{ association: Labaratory.associations.department, attributes: ['id', 'bolim_nomi'] }
	// 		]
	// 	});
	// }
	async findAll(): Promise<Labaratory[]> {
		return this.labaratoryModel.findAll({
			attributes: { exclude: ['bemorId', 'departmentId'] },
			include: [
				{ model: Bemors, attributes: ['id', 'fio'] },
				{ model: Department, attributes: ['id', 'bolim_nomi'] }
			]
		});
	}

	async findOne(id: number): Promise<Labaratory> {
		return this.labaratoryModel.findByPk(id, {
			attributes: { exclude: ['bemorId', 'departmentId'] },
			include: [
				{ model: Bemors, attributes: ['id', 'fio'] },
				{ model: Department, attributes: ['id', 'bolim_nomi'] }
			]
		});
	}

	async update(id: number, updateLabaratoryDto: UpdateLabaratoryDto): Promise<Labaratory> {
		await this.labaratoryModel.update(updateLabaratoryDto, { where: { id } });
		return this.findOne(id);
	}

	async remove(id: number): Promise<void> {
		await this.labaratoryModel.destroy({ where: { id } });
	}
}