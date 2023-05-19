import { Model, Table, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Bemors } from '../../bemor/models/bemor.model';
import { Department } from '../../department/models';
import { ApiProperty } from '@nestjs/swagger';

@Table
export class Bioximik extends Model<Bioximik> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Bemors)
  @ApiProperty()
  @Column
  bemorId: number;

  @ApiProperty()  
  @BelongsTo(() => Bemors)
  bemor: Bemors;

  @ApiProperty()
  @ForeignKey(() => Department)
  @Column
  departmentId: number;

  @ApiProperty()
  @BelongsTo(() => Department)
  department: Department;

  @ApiProperty()
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