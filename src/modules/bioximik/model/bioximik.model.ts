import { Model, Table, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';

import { ApiProperty } from '@nestjs/swagger';
import { Bemors } from '../../bemor/models/bemor.model';
import { Department } from 'src/modules/department/models';

@Table
export class Bioximik extends Model<Bioximik> {
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
	umumiy_oqsil: string;

	@ApiProperty()
	@Column
	albumin: string;

	@ApiProperty()
	@Column
	xolesterin_umumiy: string;

	@ApiProperty()
	@Column
	trigliseridlar: string;

	@ApiProperty()
	@Column
	glyukoza: string;

	@ApiProperty()
	@Column
	mochevina: string;

	@ApiProperty()
	@Column
	kreatin: string;

	@ApiProperty()
	@Column
	alaninaminotransferaza: string;

	@ApiProperty()
	@Column
	aspartataminotransferza: string;

	@ApiProperty()
	@Column
	gammagglutamilransferza: string;

	@ApiProperty()
	@Column
	laktatdegidrogenaza: string;

	@ApiProperty()
	@Column
	a_amilaza: string;

	@ApiProperty()
	@Column
	ishqoriy_fostataza: string;

	@ApiProperty()
	@Column
	tmol: string;

	@ApiProperty()
	@Column
	kaliy: string;

	@ApiProperty()
	@Column
	kaltsiy: string;

	@ApiProperty()
	@Column
	temir: string;

	@ApiProperty()
	@Column
	fosfor: string;

	@ApiProperty()
	@Column
	xlor: string;


}