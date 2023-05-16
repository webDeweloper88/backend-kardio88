
import { Model, Table, Column, ForeignKey } from "sequelize-typescript";
import { Department } from "src/modules/department/models";


@Table
export class Doctor extends Model {
    @Column
    fio: string

    @Column
    mutaxassislik: string;


    @ForeignKey(() => Department)
    @Column
    departmentId: number;
}