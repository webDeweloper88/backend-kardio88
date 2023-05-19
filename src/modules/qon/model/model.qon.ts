import { Model, Table, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Bemors } from '../../bemor/models/bemor.model';
import { Department } from '../../department/models/index';

@Table
export class Qon extends Model<Qon> {
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
  gemoglablin: string;

  @Column
  eritrositlar: string;

  @Column
  rang_kursatkichi: string;

  @Column
  eritrosit_urta_xajm: string;

  @Column
  eritrosit_gemoglablin: string;

  @Column
  gemotorkrit: string;

  @Column
  trombotsit: string;

  @Column
  trombotsit_urtacha_hajm: string;

  @Column
  trombotsit_anizotsitozi: string;

  @Column
  trombokrid: string;

  @Column
  leykositlar: string;

  @Column
  miyelositlar: string;

  @Column
  metamiyelotsitlar: string;

  @Column
  tayoqcha_yadrolineytrofil: string;

  @Column
  segment_yadroli_neytrofil: string;

  @Column
  eozinofillar: string;

  @Column
  bazofillar: string;

  @Column
  manotsitlar: string;

  @Column
  limfotsitlar: string;

  @Column
  plazmatik_hujayralar: string;

  @Column
  eritrositning_chukish_tezligi: string;
}