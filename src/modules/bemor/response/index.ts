import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class BemorResponse {



    @ApiProperty()
    @IsString()
    fio: string;

    @ApiProperty()
    @IsString()
    jinsi: string;

    @ApiProperty()
    @IsString()
    tugilgan_sana: string;

    @ApiProperty()
    @IsString()
    buyi: string;

    @ApiProperty()
    @IsString()
    vazni: string;

    @ApiProperty()
    @IsString()
    tana_xarorati: string;

    @ApiProperty()
    @IsString()
    manzili: string;

    @ApiProperty()
    @IsString()
    ish_joyi: string;

    @ApiProperty()
    @IsString()
    qayerdan_yuborilgan: string;

    @ApiProperty()
    @IsString()
    yuborilgan_tashxis: string;

    @ApiProperty()
    @IsString()
    qabulxona_tashxisi: string;

    @ApiProperty()
    @IsString()
    shoshilinch_keltirilgan: string;

    @ApiProperty()
    @IsString()
    qanday_transportda: string;
}


