import { Model, Table, Column, HasMany } from "sequelize-typescript";
import { Doctor } from "../../doctor/models";

@Table
export class Department extends Model {
    @Column
    bulimNomi: string;

    @Column
    hudud: string;

    @Column
    muassasa: string;

    @Column
    telefon: string;

    @Column
    bulimBoshligi: string;

    @HasMany(() => Doctor)
    doctors: Doctor[];
}