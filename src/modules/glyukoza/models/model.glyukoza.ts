import { Model, Table, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Bemors } from '../../bemor/models/bemor.model';
import { Department } from '../../department/models';

@Table
export class Glyukoza extends Model<Glyukoza> {
	@Column({ primaryKey: true, autoIncrement: true })
	id: number;

	@ForeignKey(() => Bemors)
	@Column
	bemorId: number;

	@BelongsTo(() => Bemors)
	bemor: Bemors;

	@ForeignKey(() => Department)
	@Column
	departmentId: number;

	@BelongsTo(() => Department)
	department: Department;

	@Column
	xona: string;

	@Column
	tibbiy_karta: string;

	@Column
	g1: string;

	@Column
	g2: string;

	@Column
	g3: string;

	@Column
	g4: string;

	@Column
	g5: string;

	@Column
	sana: string;
}