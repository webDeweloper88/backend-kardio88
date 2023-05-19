import { Body, Controller, Delete, Get, Injectable, Param, Post, Put } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateQonDto,  UpdateQonDto, } from './dto';
import { Bemors } from '../bemor/models/bemor.model';
import { Department } from '../department/models';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Qon } from './model/model.qon';

@Controller('qon')
export class QonController {
	constructor(@InjectModel(Qon) private readonly qonModel: typeof Qon) { }

	@ApiTags('Qon')
	@ApiResponse({ status: 201, type: CreateQonDto })
	@Post('create_qon')
	async create(@Body() dto: CreateQonDto): Promise<CreateQonDto> {
		return await this.qonModel.create(dto);
	}

	@ApiTags('Qon')
	@ApiResponse({ status: 201, type: Qon })
	@Get('All')
	async findAll(): Promise<Qon[]> {
		return this.qonModel.findAll({
			attributes: { exclude: ['bemorId', 'departmentId'] },
			include: [
				{ model: Bemors, attributes: ['id', 'fio'] },
				{ model: Department, attributes: ['id', 'bolim_nomi'] }
			]
		});
	}

	@ApiTags('Qon')
	@ApiResponse({ status: 201, type: Qon })
	@Get(':id')
	async findOne(@Param('id') id: number): Promise<Qon> {
		return this.qonModel.findByPk(id, {
			attributes: { exclude: ['bemorId', 'departmentId'] },
			include: [
				{ model: Bemors, attributes: ['id', 'fio'] },
				{ model: Department, attributes: ['id', 'bolim_nomi'] }
			]
		});
	}

	@ApiTags('Qon')
	@ApiResponse({ status: 201, type: Qon })
	@Put(':id')
	async update(@Param('id') id: number, @Body() updateQonDto: UpdateQonDto): Promise<Qon> {
		await this.qonModel.update(updateQonDto, { where: { id } });
		return this.findOne(id);
	}

	@ApiTags('Qon')
	@ApiResponse({ status: 201, type: Qon })
	@Delete(':id')
	async delete(@Param('id') id: number): Promise<void> {
		await this.qonModel.destroy({ where: { id } });
	}
}