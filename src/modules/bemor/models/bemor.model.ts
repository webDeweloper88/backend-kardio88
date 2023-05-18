import { Model, Table, Column, HasMany } from 'sequelize-typescript';
import { Labaratory } from '../../labaratory/model/labaratory.model';

@Table
export class Bemors extends Model<Bemors> {
    @Column({ primaryKey: true, autoIncrement: true })
    id: number;

    @Column
    fio: string;

    @Column
    jinsi: string;

    @Column
    tugilgan_sana: string;

    @Column
    boyi: string;

    @Column
    vazni: string;

    @Column
    tana_xarorati: string;

    @Column
    manzili: string;

    @Column
    ish_joyi: string;

    @Column
    qayerdan_yuborilgan: string;

    @Column
    yuborilgan_tashxis: string;

    @Column
    qabulxona_tashxisi: string;

    @Column
    shoshilinch_keltirilgan: string;

    @Column
    qanday_transportda: string;

    @HasMany(() => Labaratory)
    labaratories: Labaratory[];
}