import { Model, Table, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Bemors } from '../../bemor/models/bemor.model';
import { Department } from '../../department/models/index';

@Table
export class Analiz extends Model<Analiz> {
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
  sana: string;

  @Column
  tibbiy_karta_Raqami: number;

  @Column
  miqdor: number;

  @Column
  rang: number;

  @Column
  tiniq: number;

  @Column
  nisbiy_zichlik: number;

  @Column
  reaksiya: number;

  @Column
  oqsil: number;

  @Column
  gl: number;

  @Column
  glyukoza: number;

  @Column
  geton_tanachalari: number;

  @Column
  qon_borligini_aniqlash_reaks: number;

  @Column
  bilirubin: number;

  @Column
  urobilinoidlar: number;

  @Column
  ot: number;

  @Column
  kislotasi: number;
}