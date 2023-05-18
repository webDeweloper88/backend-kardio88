import { CreateBemorDto } from './dto/index';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bemors } from './models/bemor.model';
import { BemorResponse } from './response';


@Injectable()
export class BemorService {
    constructor(@InjectModel(Bemors) private readonly pasientRepository: typeof Bemors) { }

    async createBemor(dto: CreateBemorDto): Promise<CreateBemorDto> {
        const newBemor = new Bemors();
        //newBemor.bemor_id = dto.bemor_id;
        newBemor.fio = dto.fio;
        newBemor.jinsi = dto.jinsi;
        newBemor.tugilgan_sana = dto.tugilgan_sana;
        newBemor.boyi = dto.boyi;
        newBemor.vazni = dto.vazni;
        newBemor.tana_xarorati = dto.tana_xarorati;
        newBemor.manzili = dto.manzili;
        newBemor.ish_joyi = dto.ish_joyi;
        newBemor.qayerdan_yuborilgan = dto.qayerdan_yuborilgan
        newBemor.yuborilgan_tashxis = dto.yuborilgan_tashxis;
        newBemor.qabulxona_tashxisi = dto.qabulxona_tashxisi;
        newBemor.shoshilinch_keltirilgan = dto.shoshilinch_keltirilgan;
        newBemor.qanday_transportda = dto.qanday_transportda;

        return await newBemor.save();
    }

    async publicBemor(): Promise<BemorResponse[]> {
        return this.pasientRepository.findAll();
    }

    async updateBemor(id: number, dto: CreateBemorDto): Promise<BemorResponse> {
        const bemor = await this.pasientRepository.findByPk(id);

        if (!bemor) {
            throw new NotFoundException(`Bemor with id ${id} not found`);
        }
        bemor.fio = dto.fio;
        bemor.jinsi = dto.jinsi;
        bemor.tugilgan_sana = dto.tugilgan_sana;
        bemor.boyi = dto.boyi;
        bemor.vazni = dto.vazni;
        bemor.tana_xarorati = dto.tana_xarorati;
        bemor.manzili = dto.manzili;
        bemor.ish_joyi = dto.ish_joyi;
        bemor.qayerdan_yuborilgan = dto.qayerdan_yuborilgan;
        bemor.yuborilgan_tashxis = dto.yuborilgan_tashxis;
        bemor.qabulxona_tashxisi = dto.qabulxona_tashxisi;
        bemor.shoshilinch_keltirilgan = dto.shoshilinch_keltirilgan;
        bemor.qanday_transportda = dto.qanday_transportda;

        await bemor.save();
        return bemor;
    }
}

