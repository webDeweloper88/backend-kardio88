import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';

import { CreateIndeksDto, UpdaeteIndeksDto } from './dto';

import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { IndeksService } from './indeks.service';
import { Indeks } from './model/model.indeks';

@Controller('Indeks')
export class IndeksController {
	constructor(private readonly indeksService: IndeksService) { }

	@ApiTags('Indeks')
	@ApiResponse({ status: 201, type: CreateIndeksDto })
	@Post('create')
	async create(@Body() dto: CreateIndeksDto): Promise<CreateIndeksDto> {
		return await this.indeksService.create(dto);
	}

	@ApiTags('Indeks')
	@ApiResponse({ status: 201, type: Indeks })
	@Get('all')
	async findAll(): Promise<Indeks[]> {
		return await this.indeksService.findAll();
	}

	@ApiTags('Indeks')
	@ApiResponse({ status: 201, type: Indeks })
	@Get(':id')
	async findOne(@Param('id') id: number): Promise<Indeks> {
		return await this.indeksService.findOne(id);
	}

	@ApiTags('Indeks')
	@ApiResponse({ status: 201, type: CreateIndeksDto })
	@Put(':id')
	async update(@Param('id') id: number, @Body() updaeteIndeksDto: UpdaeteIndeksDto): Promise<Indeks> {
		return await this.indeksService.update(id, updaeteIndeksDto);
	}

	@ApiTags('Indeks')
	@ApiResponse({ status: 201, type: CreateIndeksDto })
	@Delete(':id')
	async remove(@Param('id') id: number): Promise<void> {
		await this.indeksService.remove(+id);
	}
}
