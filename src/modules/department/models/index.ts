import { Model, Table, Column, HasMany } from 'sequelize-typescript';
import { Labaratory } from '../../labaratory/model/labaratory.model';
import { Glyukoza } from '../../glyukoza/models/model.glyukoza';
import { Bioximik } from '../../bioximik/model/bioximik.model';
import { Analiz } from '../../analiz/model/model.analiz';
import { Indeks } from '../../indeks/model/model.indeks';
import { Qon } from '../../qon/model/model.qon';

@Table
export class Department extends Model<Department> {
    @Column({ primaryKey: true, autoIncrement: true })
    id: number;

    @Column
    bolim_nomi: string;

    @Column
    hudud: string;

    @Column
    muassasa: string;

    @Column
    telefon_raqam: string;

    @Column
    bolim_boshligi: string;

    @Column
    shifokorlar_soni: number;

    @HasMany(() => Labaratory)
    labaratories: Labaratory[];

    @HasMany(() => Glyukoza)
    glyukoza: Glyukoza[];

    @HasMany(() => Bioximik)
    bioximik: Bioximik[];

    @HasMany(() => Analiz)
    analiz: Analiz[];


    @HasMany(() => Qon)
    qon: Qon[];

    @HasMany(() => Indeks)
    indeks: Indeks[];


}