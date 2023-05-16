import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Bemors } from '../../modules/bemor/models/bemor.model';
import { Department } from '../../modules/department/models';

@Table
export class Laboratoriya extends Model<Laboratoriya> {

    @ForeignKey(() => Bemors)
    @Column
    bemorId: number;

    @BelongsTo(() => Bemors)
    bemor: Bemors;

    @ForeignKey(() => Department)
    @Column
    bolimId: number;

    @BelongsTo(() => Department)
    bolim: Department;

    @Column
    kasallik: string;

    @Column
    selnaya_kapilyarnaya_krov: string;

    @Column
    plazma_krovi: string;

    @Column
    pazoboy_moche: string;

    @Column
    utrenney_moche: string;

    @Column
    sutochnoy_moche: string;

    @Column
    sana: string;
}