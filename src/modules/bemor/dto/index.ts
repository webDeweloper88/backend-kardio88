import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';


export class CreateBemorDto {


    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    fio: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    jinsi: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    tugilgan_sana: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    boyi: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    vazni: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    tana_xarorati: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    manzili: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    ish_joyi: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    qayerdan_yuborilgan: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    yuborilgan_tashxis: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    qabulxona_tashxisi: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    shoshilinch_keltirilgan: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    qanday_transportda: string;
}