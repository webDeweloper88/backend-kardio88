import { Model, Table, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Bemors } from '../../bemor/models/bemor.model';
import { Department } from '../../department/models';

@Table
export class Indeks extends Model<Indeks> {
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
  rieatm: string;

  @Column
  sana: string;

  @Column
  t_c: string;

  @Column
  shikoyat: string;

  @Column
  anamnezis: string;

  @Column
  anamnezis_vitae: string;

  @Column
  epid: string;

  @Column
  status: string;

  @Column
  nafas_olish: string;

  @Column
  yurak_qon_tomir: string;

  @Column
  ovqat_hazm_qilish: string;

  @Column
  siydik_chiqarish_tizimi: string;

  @Column
  gipotalamo: string;

  @Column
  buyi: string;

  @Column
  ogirligi: string;

  @Column
  imt: string;

  @Column
  imt2: string;

  @Column
  qalqonsimon_bez: string;

  @Column
  qalqonsimon_bezoldi_bez: string;

  @Column
  buyrak_usti: string;

  @Column
  oshqozon_osti: string;

  @Column
  jinsiy_tizim: string;

  @Column
  dastlabki_tashxiz: string;

  @Column
  asosiy_kasallik: string;

  @Column
  hamrox: string;

  @Column
  umumiy_qon_taxlili: string;

  @Column
  umumiy_siydik_taxlili: string;

  @Column
  qondaqand_taxlili: string;

  @Column
  bioximik_taxlil: string;

  @Column
  rw: string;

  @Column
  rengenttekshiruv: string;

  @Column
  ekg_tekshiruv: string;

  @Column
  parxez: string;

  @Column
  davolovchi: string;

  @Column
  bolim_mudiri: string;

  @Column
  direktor_urinbosari: string;
}