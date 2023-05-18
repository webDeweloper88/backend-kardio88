import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { LabaratoryService } from './labaratory.service';
import { CreateLabaratoryDto, UpdateLabaratoryDto } from './dto';
import { LabaratoryResponseDto } from './response';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Labaratory } from './model/labaratory.model';

@Controller('labaratories')
export class LabaratoryController {
	constructor(private readonly labaratoryService: LabaratoryService) { }

	@ApiTags('Labaratory')
	@ApiResponse({ status: 201, type: CreateLabaratoryDto })
	@Post('create')
	async create(@Body() dto: CreateLabaratoryDto): Promise<CreateLabaratoryDto> {
		return await this.labaratoryService.create(dto);
	}

	@ApiTags('Labaratory')
	@ApiResponse({ status: 201, type: Labaratory })
	@Get('all')
	async findAll(): Promise<Labaratory[]> {
		return await this.labaratoryService.findAll();
	}

	@ApiTags('Labaratory')
	@ApiResponse({ status: 201, type: Labaratory })
	@Get(':id')
	async findOne(@Param('id') id: number): Promise<Labaratory> {
		return await this.labaratoryService.findOne(id);
	}

	@ApiTags('Labaratory')
	@ApiResponse({ status: 201, type: CreateLabaratoryDto })
	@Put(':id')
	async update(@Param('id') id: number, @Body() UpdateLabaratoryDto: UpdateLabaratoryDto): Promise<Labaratory> {
		return await this.labaratoryService.update(id, UpdateLabaratoryDto);
	}

	@ApiTags('Labaratory')
	@ApiResponse({ status: 201, type: CreateLabaratoryDto })
	@Delete(':id')
	async remove(@Param('id') id: number): Promise<void> {
		await this.labaratoryService.remove(+id);
	}
}