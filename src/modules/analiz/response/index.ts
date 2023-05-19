import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class ResponseAnalizDto {
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
  sana: string;

  @ApiProperty()
  @IsNumber()
  tibbiy_karta_Raqami: number;

  @ApiProperty()
  @IsNumber()
  miqdor: number;

  @ApiProperty()
  @IsNumber()
  rang: number;

  @ApiProperty()
  @IsNumber()
  tiniq: number;

  @ApiProperty()
  @IsNumber()
  nisbiy_zichlik: number;

  @ApiProperty()
  @IsNumber()
  reaksiya: number;

  @ApiProperty()
  @IsNumber()
  oqsil: number;

  @ApiProperty()
  @IsNumber()
  gl: number;

  @ApiProperty()
  @IsNumber()
  glyukoza: number;

  @ApiProperty()
  @IsNumber()
  geton_tanachalari: number;

  @ApiProperty()
  @IsNumber()
  qon_borligini_aniqlash_reaks: number;

  @ApiProperty()
  @IsNumber()
  bilirubin: number;

  @ApiProperty()
  @IsNumber()
  urobilinoidlar: number;

  @ApiProperty()
  @IsNumber()
  ot: number;

  @ApiProperty()
  @IsNumber()
  kislotasi: number;
}