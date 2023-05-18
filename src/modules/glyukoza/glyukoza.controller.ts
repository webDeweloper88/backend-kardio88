import { Body, Controller, Delete, Get, Injectable, Param, Post, Put } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGlyukozaDto, UpdateGlyukozaDto, } from './dto';
import { Bemors } from '../bemor/models/bemor.model';
import { Department } from '../department/models';
import { Glyukoza } from './models/model.glyukoza';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('glyukoza')
export class GlyukozaContoller {
	constructor(@InjectModel(Glyukoza) private readonly glyukozamodel: typeof Glyukoza) { }

	@ApiTags('Glyukoza')
	@ApiResponse({ status: 201, type: CreateGlyukozaDto })
	@Post('create_glyukoza')
	async create(@Body() dto: CreateGlyukozaDto): Promise<CreateGlyukozaDto> {
		return await this.glyukozamodel.create(dto);
	}

	@ApiTags('Glyukoza')
	@ApiResponse({ status: 201, type: Glyukoza })
	@Get('All')
	async findAll(): Promise<Glyukoza[]> {
		return this.glyukozamodel.findAll({
			attributes: { exclude: ['bemorId', 'departmentId'] },
			include: [
				{ model: Bemors, attributes: ['id', 'fio'] },
				{ model: Department, attributes: ['id', 'bolim_nomi'] }
			]
		});
	}

	@ApiTags('Glyukoza')
	@ApiResponse({ status: 201, type: Glyukoza })
	@Get(':id')
	async findOne(@Param('id') id: number): Promise<Glyukoza> {
		return this.glyukozamodel.findByPk(id, {
			attributes: { exclude: ['bemorId', 'departmentId'] },
			include: [
				{ model: Bemors, attributes: ['id', 'fio'] },
				{ model: Department, attributes: ['id', 'bolim_nomi'] }
			]
		});
	}

	@ApiTags('Glyukoza')
	@ApiResponse({ status: 201, type: Glyukoza })
	@Put(':id')
	async update(@Param('id') id: number, @Body() updateGlyukozaDto: UpdateGlyukozaDto): Promise<Glyukoza> {
		await this.glyukozamodel.update(updateGlyukozaDto, { where: { id } });
		return this.findOne(id);
	}

	@ApiTags('Glyukoza')
	@ApiResponse({ status: 201, type: Glyukoza })
	@Delete(':id')
	async delete(@Param('id') id: number): Promise<void> {
		await this.glyukozamodel.destroy({ where: { id } });
	}
}