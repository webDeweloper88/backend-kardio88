import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateLabaratoryDto {


	@ApiProperty()
	@IsNotEmpty()
	@IsNumber()
	bemorId: number;

	@ApiProperty()
	@IsNotEmpty()
	@IsNumber()
	departmentId: number;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	kasallik: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	selnaya_kapilyarnaya_krov: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	plazma_krovi: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	pozoboy_moche: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	utreney_moche: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	stuchnoy_moche: string;

	@ApiProperty()
	@IsOptional()
	@IsString()
	sana?: string;
}

export class UpdateLabaratoryDto {
	@ApiProperty()
	@IsOptional()
	@IsNumber()
	bemorId?: number;

	@ApiProperty()
	@IsOptional()
	@IsNumber()
	departmentId?: number;

	@ApiProperty()
	@IsOptional()
	@IsString()
	kasallik?: string;

	@ApiProperty()
	@IsOptional()
	@IsString()
	selnaya_kapilyarnaya_krov?: string;

	@ApiProperty()
	@IsOptional()
	@IsString()
	plazma_krovi?: string;

	@ApiProperty()
	@IsOptional()
	@IsString()
	pozoboy_moche?: string;

	@ApiProperty()
	@IsOptional()
	@IsString()
	utreney_moche?: string;

	@ApiProperty()
	@IsOptional()
	@IsString()
	stuchnoy_moche?: string;

	@ApiProperty()
	@IsOptional()
	@IsString()
	sana?: string;
}