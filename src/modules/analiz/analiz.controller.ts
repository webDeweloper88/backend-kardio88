import { Body, Controller, Delete, Get, Injectable, Param, Post, Put } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAnalizDto,  UpdateAnalizDto,  } from './dto';
import { Bemors } from '../bemor/models/bemor.model';
import { Department } from '../department/models';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Analiz } from './model/model.analiz';

@Controller('analiz')
export class AnalizController {
	constructor(@InjectModel(Analiz) private readonly analizModel: typeof Analiz) { }

	@ApiTags('Analiz')
	@ApiResponse({ status: 201, type: CreateAnalizDto })
	@Post('create_analiz')
	async create(@Body() dto: CreateAnalizDto): Promise<CreateAnalizDto> {
		return await this.analizModel.create(dto);
	}

	@ApiTags('Analiz')
	@ApiResponse({ status: 201, type: Analiz })
	@Get('All')
	async findAll(): Promise<Analiz[]> {
		return this.analizModel.findAll({
			attributes: { exclude: ['bemorId', 'departmentId'] },
			include: [
				{ model: Bemors, attributes: ['id', 'fio'] },
				{ model: Department, attributes: ['id', 'bolim_nomi'] }
			]
		});
	}

	@ApiTags('Analiz')
	@ApiResponse({ status: 201, type: Analiz })
	@Get(':id')
	async findOne(@Param('id') id: number): Promise<Analiz> {
		return this.analizModel.findByPk(id, {
			attributes: { exclude: ['bemorId', 'departmentId'] },
			include: [
				{ model: Bemors, attributes: ['id', 'fio'] },
				{ model: Department, attributes: ['id', 'bolim_nomi'] }
			]
		});
	}

	@ApiTags('Analiz')
	@ApiResponse({ status: 201, type: Analiz })
	@Put(':id')
	async update(@Param('id') id: number, @Body() updateGlyukozaDto: UpdateAnalizDto): Promise<Analiz> {
		await this.analizModel.update(updateGlyukozaDto, { where: { id } });
		return this.findOne(id);
	}

	@ApiTags('Analiz')
	@ApiResponse({ status: 201, type: Analiz })
	@Delete(':id')
	async delete(@Param('id') id: number): Promise<void> {
		await this.analizModel.destroy({ where: { id } });
	}
}