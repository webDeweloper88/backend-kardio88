import { Model, Table, Column } from "sequelize-typescript";

@Table
export class Bemors extends Model<Bemors> {

    //@Column({ type: 'int' })
    //bemor_id: number;

    @Column
    fio: string;

    @Column
    jinsi: string;

    @Column
    tugilgan_sana: string;

    @Column
    buyi: string;

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
}