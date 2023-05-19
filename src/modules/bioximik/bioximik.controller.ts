import { Body, Controller, Delete, Get, Injectable, Param, Post, Put } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateBioximikDto, UpdateBioximikDto,  } from './dto';
import { Bemors } from '../bemor/models/bemor.model';
import { Department } from '../department/models';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Bioximik } from './model/model.bioximik';

@Controller('bioximik')
export class BioximikController {
	constructor(@InjectModel(Bioximik) private readonly bioximikModel: typeof Bioximik) { }

	@ApiTags('Bioximik')
	@ApiResponse({ status: 201, type: CreateBioximikDto })
	@Post('create_bioximik')
	async create(@Body() dto: CreateBioximikDto): Promise<CreateBioximikDto> {
		return await this.bioximikModel.create(dto);
	}

	@ApiTags('Bioximik')
	@ApiResponse({ status: 201, type: Bioximik })
	@Get('All')
	async findAll(): Promise<Bioximik[]> {
		return this.bioximikModel.findAll({
			attributes: { exclude: ['bemorId', 'departmentId'] },
			include: [
				{ model: Bemors, attributes: ['id', 'fio'] },
				{ model: Department, attributes: ['id', 'bolim_nomi'] }
			]
		});
	}

	@ApiTags('Bioximik')
	@ApiResponse({ status: 201, type: Bioximik })
	@Get(':id')
	async findOne(@Param('id') id: number): Promise<Bioximik> {
		return this.bioximikModel.findByPk(id, {
			attributes: { exclude: ['bemorId', 'departmentId'] },
			include: [
				{ model: Bemors, attributes: ['id', 'fio'] },
				{ model: Department, attributes: ['id', 'bolim_nomi'] }
			]
		});
	}

	@ApiTags('Bioximik')
	@ApiResponse({ status: 201, type: Bioximik })
	@Put(':id')
	async update(@Param('id') id: number, @Body() updateBioximikDto: UpdateBioximikDto): Promise<Bioximik> {
		await this.bioximikModel.update(updateBioximikDto, { where: { id } });
		return this.findOne(id);
	}

	@ApiTags('Bioximik')
	@ApiResponse({ status: 201, type: Bioximik })
	@Delete(':id')
	async delete(@Param('id') id: number): Promise<void> {
		await this.bioximikModel.destroy({ where: { id } });
	}
}