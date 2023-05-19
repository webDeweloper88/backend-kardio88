import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {  CreateQonDto, UpdateQonDto  } from './dto';
import { Bemors } from '../bemor/models/bemor.model';
import { Department } from '../department/models';
import { Qon } from './model/model.qon';


@Injectable()
export class QonService {
	constructor(@InjectModel(Qon) private readonly qonModel: typeof Qon) { }
	async create(dto: CreateQonDto): Promise<CreateQonDto> {
		const newQon= new Qon()
		newQon.bemorId = dto.bemorId;
		newQon.departmentId = dto.departmentId;
		newQon.gemoglablin = dto.gemoglablin;
		newQon.eritrositlar = dto.eritrositlar;
		newQon.rang_kursatkichi = dto.rang_kursatkichi;
		newQon.eritrosit_urta_xajm = dto.eritrosit_urta_xajm;
		newQon.eritrosit_gemoglablin = dto.eritrosit_gemoglablin;
		newQon.gemotorkrit = dto.gemotorkrit;
		newQon.trombotsit = dto.trombotsit;
		newQon.trombotsit_urtacha_hajm = dto.trombotsit_urtacha_hajm;
		newQon.trombotsit_anizotsitozi = dto.trombotsit_anizotsitozi;
		newQon.leykositlar = dto.leykositlar;
		newQon.miyelositlar = dto.miyelositlar;
		newQon.metamiyelotsitlar = dto.metamiyelotsitlar;
		newQon.tayoqcha_yadrolineytrofil = dto.tayoqcha_yadrolineytrofil;
		newQon.segment_yadroli_neytrofil = dto.segment_yadroli_neytrofil;
		newQon.eozinofillar = dto.eozinofillar;
		newQon.bazofillar = dto.bazofillar;
		newQon.manotsitlar = dto.manotsitlar;
		newQon.limfotsitlar = dto.limfotsitlar;
		newQon.plazmatik_hujayralar = dto.plazmatik_hujayralar;
		newQon.eritrositning_chukish_tezligi = dto.eritrositning_chukish_tezligi;
		return newQon.save();
	}

	async findAll(): Promise<Qon[]> {
		return this.qonModel.findAll({
			attributes: { exclude: ['bemorId', 'departmentId'] },
			include: [
				{ model: Bemors, attributes: ['id', 'fio'] },
				{ model: Department, attributes: ['id', 'bolim_nomi'] }
			]
		});
	}

	async findOne(id: number): Promise<Qon> {
		return this.qonModel.findByPk(id, {
			attributes: { exclude: ['bemorId', 'departmentId'] },
			include: [
				{ model: Bemors, attributes: ['id', 'fio'] },
				{ model: Department, attributes: ['id', 'bolim_nomi'] }
			]
		});
	}

	async update(id: number, updateQonDto: UpdateQonDto): Promise<Qon> {
		await this.qonModel.update(updateQonDto, { where: { id } });
		return this.findOne(id);
	}

	async remove(id: number): Promise<void> {
		await this.qonModel.destroy({ where: { id } });
	}


}


