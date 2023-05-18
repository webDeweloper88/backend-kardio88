import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { Glyukoza } from '../models/model.glyukoza';

export class ResponseGlyukozaDto {
	@ApiProperty()
	@IsNumber()
	id: number;

	@ApiProperty()
	@IsNumber()
	bemorId: number;

	@ApiProperty()
	@IsNumber()
	departmentId: number;

	@ApiProperty()
	@IsString()
	xona: string;

	@ApiProperty()
	@IsString()
	tibbiy_karta: string;

	@ApiProperty()
	@IsString()
	g1: string;

	@ApiProperty()
	@IsString()
	g2: string;

	@ApiProperty()
	@IsString()
	g3: string;

	@ApiProperty()
	@IsString()
	g4: string;

	@ApiProperty()
	@IsString()
	g5: string;

	@ApiProperty()
	@IsString()
	sana: string;

	static fromModel(model: Glyukoza): ResponseGlyukozaDto {
		const dto = new ResponseGlyukozaDto();
		dto.id = model.id;
		dto.bemorId = model.bemorId;
		dto.departmentId = model.departmentId;
		dto.xona = model.xona;
		dto.tibbiy_karta = model.tibbiy_karta;
		dto.g1 = model.g1;
		dto.g2 = model.g2;
		dto.g3 = model.g3;
		dto.g4 = model.g4;
		dto.g5 = model.g5;
		dto.sana = model.sana;
		return dto;
	}
}