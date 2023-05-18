import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Bemors } from "../models/bemor.model";

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
    boyi: string;

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

    static fromModel(model: Bemors): BemorResponse {
        const bemorResponse = new BemorResponse();

        bemorResponse.fio = model.fio,

            bemorResponse.jinsi = model.jinsi,
            bemorResponse.tugilgan_sana = model.tugilgan_sana,
            bemorResponse.boyi = model.boyi,
            bemorResponse.vazni = model.vazni,
            bemorResponse.tana_xarorati = model.tana_xarorati,
            bemorResponse.manzili = model.manzili,
            bemorResponse.ish_joyi = model.ish_joyi,
            bemorResponse.qayerdan_yuborilgan = model.qayerdan_yuborilgan,
            bemorResponse.yuborilgan_tashxis = model.yuborilgan_tashxis,
            bemorResponse.qabulxona_tashxisi = model.qabulxona_tashxisi,
            bemorResponse.shoshilinch_keltirilgan = model.shoshilinch_keltirilgan,
            bemorResponse.qanday_transportda = model.qanday_transportda
        return bemorResponse;
    }
}


