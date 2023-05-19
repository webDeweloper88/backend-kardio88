import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class ResponseIndeksDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsNumber()
  bemorId: number;

  @ApiProperty()
  @IsNumber()
  departmentId: number;

  @ApiProperty()
  @IsString()
  rieatm: string;

  @ApiProperty()
  @IsString()
  sana: string;

  @ApiProperty()
  @IsString()
  t_c: string;

  @ApiProperty()
  @IsString()
  shikoyat: string;

  @ApiProperty()
  @IsString()
  anamnezis: string;

  @ApiProperty()
  @IsString()
  anamnezis_vitae: string;

  @ApiProperty()
  @IsString()
  epid: string;

  @ApiProperty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsString()
  nafas_olish: string;

  @ApiProperty()
  @IsString()
  yurak_qon_tomir: string;

  @ApiProperty()
  @IsString()
  ovqat_hazm_qilish: string;

  @ApiProperty()
  @IsString()
  siydik_chiqarish_tizimi: string;

  @ApiProperty()
  @IsString()
  gipotalamo: string;

  @ApiProperty()
  @IsString()
  buyi: string;

  @ApiProperty()
  @IsString()
  ogirligi: string;

  @ApiProperty()
  @IsString()
  imt: string;

  @ApiProperty()
  @IsString()
  imt2: string;

  @ApiProperty()
  @IsString()
  qalqonsimon_bez: string;

  @ApiProperty()
  @IsString()
  qalqonsimon_bezoldi_bez: string;

  @ApiProperty()
  @IsString()
  buyrak_usti: string;

  @ApiProperty()
  @IsString()
  oshqozon_osti: string;

  @ApiProperty()
  @IsString()
  jinsiy_tizim: string;

  @ApiProperty()
  @IsString()
  dastlabki_tashxiz: string;

  @ApiProperty()
  @IsString()
  asosiy_kasallik: string;

  @ApiProperty()
  @IsString()
  hamrox: string;

  @ApiProperty()
  @IsString()
  umumiy_qon_taxlili: string;

  @ApiProperty()
  @IsString()
  umumiy_siydik_taxlili: string;

  @ApiProperty()
  @IsString()
  qondaqand_taxlili: string;

  @ApiProperty()
  @IsString()
  bioximik_taxlil: string;

  @ApiProperty()
  @IsString()
  rw: string;

  @ApiProperty()
  @IsString()
  rengenttekshiruv: string;

  @ApiProperty()
  @IsString()
  ekg_tekshiruv: string;

  @ApiProperty()
  @IsString()
  parxez: string;

  @ApiProperty()
  @IsString()
  davolovchi: string;

  @IsString()
  @ApiProperty()  
  bolim_mudiri: string;

  @IsString()
  @ApiProperty()  
  direktor_urinbosari: string;
}