import { Model, Table, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Bemors } from '../../bemor/models/bemor.model';
import { Department } from '../../department/models';

@Table
export class Labaratory extends Model<Labaratory> {
	@Column({ primaryKey: true, autoIncrement: true })
	id: number;

	@ForeignKey(() => Bemors)
	@Column
	bemorId: number;

	@BelongsTo(() => Bemors, { foreignKey: 'bemorId', targetKey: 'id' })
	bemor: Bemors;

	@ForeignKey(() => Department)
	@Column
	departmentId: number;

	@BelongsTo(() => Department, { foreignKey: 'departmentId', targetKey: 'id' })
	department: Department;


	@Column
	kasallik: string;

	@Column
	selnaya_kapilyarnaya_krov: string;

	@Column
	plazma_krovi: string;

	@Column
	pozoboy_moche: string;

	@Column
	utreney_moche: string;

	@Column
	stuchnoy_moche: string;

	@Column
	sana: string;
}