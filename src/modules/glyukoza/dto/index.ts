import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateGlyukozaDto {
	@ApiProperty()

	@IsNotEmpty()
	bemorId: number;

	@ApiProperty()
	@IsNumber()
	@IsNotEmpty()
	departmentId: number;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	xona: string;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	tibbiy_karta: string;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	g1: string;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	g2: string;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	g3: string;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	g4: string;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	g5: string;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	sana: string;
}

export class UpdateGlyukozaDto {

	@ApiProperty()
	@IsOptional()
	@IsNumber()
	bemorId: number;

	@ApiProperty()
	@IsOptional()
	@IsNumber()
	departmentId: number;

	@ApiProperty()
	@IsOptional()
	@IsString()
	xona: string;

	@ApiProperty()
	@IsOptional()
	@IsString()
	tibbiy_karta: string;

	@ApiProperty()
	@IsOptional()
	@IsString()
	g1: string;

	@ApiProperty()
	@IsOptional()
	@IsString()
	g2: string;

	@ApiProperty()
	@IsOptional()
	@IsString()
	g3: string;

	@ApiProperty()
	@IsOptional()
	@IsString()
	g4: string;

	@ApiProperty()
	@IsOptional()
	@IsString()
	g5: string;

	@ApiProperty()
	@IsOptional()
	@IsString()
	sana: string;
}


