import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';


export class CreateDepartmentDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    bolim_nomi: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    hudud: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    muassasa: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    telefon_raqam: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    bolim_boshligi: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    shifokorlar_soni: number;

}



export class UpdateDepartmentDto {

    @ApiProperty()
    @IsOptional()
    @IsString()
    bulimNomi?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    hudud?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    muassasa?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    telefon?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    bulimBoshligi?: string;
}