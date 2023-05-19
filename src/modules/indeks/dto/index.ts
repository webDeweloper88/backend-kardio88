import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateIndeksDto {
  @ApiProperty()  
  @IsString()
  rieatm: string;

  @IsString()
  @ApiProperty()  
  sana: string;

  @IsString()
  @ApiProperty()  
  t_c: string;

  @IsString()
  @ApiProperty()  
  shikoyat: string;

  @IsString()
  @ApiProperty()  
  anamnezis: string;

  @IsString()
  @ApiProperty()  
  anamnezis_vitae: string;

  @IsString()
  @ApiProperty()  
  epid: string;

  @IsString()
  @ApiProperty()  
  status: string;

  @IsString()
  @ApiProperty()  
  nafas_olish: string;

  @IsString()
  @ApiProperty()  
  yurak_qon_tomir: string;

  @IsString()
  @ApiProperty()  
  ovqat_hazm_qilish: string;

  @IsString()
  @ApiProperty()  
  siydik_chiqarish_tizimi: string;

  @IsString()
  @ApiProperty()  
  gipotalamo: string;

  @IsString()
  @ApiProperty()  
  buyi: string;

  @IsString()
  @ApiProperty()  
  ogirligi: string;

  @IsString()
  @ApiProperty()  
  imt: string;

  @IsString()
  @ApiProperty()  
  imt2: string;

  @IsString()
  @ApiProperty()  
  qalqonsimon_bez: string;

  @IsString()
  @ApiProperty()  
  qalqonsimon_bezoldi_bez: string;

  @IsString()
  @ApiProperty()  
  buyrak_usti: string;

  @IsString()
  @ApiProperty()  
  oshqozon_osti: string;

  @IsString()
  @ApiProperty()  
  jinsiy_tizim: string;

  @IsString()
  @ApiProperty()  
  dastlabki_tashxiz: string;

  @IsString()
  @ApiProperty()  
  asosiy_kasallik: string;

  @IsString()
  @ApiProperty()  
  hamrox: string;

  @IsString()
  @ApiProperty()  
  umumiy_qon_taxlili: string;

  @IsString()
  @ApiProperty()  
  umumiy_siydik_taxlili: string;

  @IsString()
  @ApiProperty()  
  qondaqand_taxlili: string;

  @IsString()
  @ApiProperty()  
  bioximik_taxlil: string;

  @IsString()
  @ApiProperty()  
  rw: string;

  @IsString()
  @ApiProperty()  
  rengenttekshiruv: string;

  @IsString()
  @ApiProperty()  
  ekg_tekshiruv: string;

  @IsString()
  @ApiProperty()  
  parxez: string;

  @IsString()
  @ApiProperty()  
  davolovchi: string;

  @IsString()
  @ApiProperty()  
  bolim_mudiri: string;

  @IsString()
  @ApiProperty()  
  direktor_urinbosari: string;
}
export class UpdaeteIndeksDto {
  @ApiProperty() 
  @IsOptional() 
  @IsString()
  rieatm?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  sana?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  t_c?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  shikoyat?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  anamnezis?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  anamnezis_vitae?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  epid?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  status?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  nafas_olish: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  yurak_qon_tomir?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  ovqat_hazm_qilish?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  siydik_chiqarish_tizimi?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  gipotalamo?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  buyi?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  ogirligi?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  imt?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  imt2?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  qalqonsimon_bez?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  qalqonsimon_bezoldi_bez?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  buyrak_usti?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  oshqozon_osti?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  jinsiy_tizim?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  dastlabki_tashxiz?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  asosiy_kasallik?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  hamrox?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  umumiy_qon_taxlili?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  umumiy_siydik_taxlili?: string;

  @IsString()
  @ApiProperty()  
  qondaqand_taxlili?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  bioximik_taxlil?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  rw?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  rengenttekshiruv?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  ekg_tekshiruv?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  parxez?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  davolovchi?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  bolim_mudiri?: string;

  @IsString()
    @IsOptional() 
  @ApiProperty()  
  direktor_urinbosari?: string;
}