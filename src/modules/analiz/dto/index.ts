import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAnalizDto {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  bemorId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  departmentId: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  sana: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  tibbiy_karta_Raqami: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  miqdor: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  rang: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  tiniq: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  nisbiy_zichlik: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  reaksiya: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  oqsil: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  gl: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  glyukoza: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  geton_tanachalari: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  qon_borligini_aniqlash_reaks: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  bilirubin: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  urobilinoidlar: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  ot: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  kislotasi: number;
}

export class UpdateAnalizDto {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  bemorId?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  departmentId?: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  sana?: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  tibbiy_karta_Raqami?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  miqdor?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  rang?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  tiniq?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  nisbiy_zichlik?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  reaksiya?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  oqsil?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  gl?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  glyukoza?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  geton_tanachalari?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  qon_borligini_aniqlash_reaks?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  bilirubin?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  urobilinoidlar?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  ot?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  kislotasi?: number;
}