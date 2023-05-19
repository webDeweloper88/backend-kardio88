import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBioximikDto {
  @ApiProperty()
  @IsNumber()
  bemorId: number;

  @ApiProperty()
  @IsNumber()
  departmentId: number;

  @ApiProperty()
  @IsString()
  umumiy_oqsil: string;

  @ApiProperty()
  @IsString()
  albumin: string;

  @ApiProperty()
  @IsString()
  xolesterin_umumiy: string;

  @ApiProperty()
  @IsString()
  trigliseridlar: string;

  @ApiProperty()
  @IsString()
  glyukoza: string;

  @ApiProperty()
  @IsString()
  mochevina: string;

  @ApiProperty()
  @IsString()
  kreatin: string;

  @ApiProperty()
  @IsString()
  alaninaminotransferaza: string;

  @ApiProperty()
  @IsString()
  aspartataminotransferza: string;

  @ApiProperty()
  @IsString()
  gammagglutamilransferza: string;

  @ApiProperty()
  @IsString()
  laktatdegidrogenaza: string;

  @ApiProperty()
  @IsString()
  a_amilaza: string;

  @ApiProperty()
  @IsString()
  ishqoriy_fostataza: string;

  @ApiProperty()
  @IsString()
  tmol: string;

  @ApiProperty()
  @IsString()
  kaliy: string;

  @ApiProperty()
  @IsString()
  kaltsiy: string;

  @ApiProperty()
  @IsString()
  temir: string;

  @ApiProperty()
  @IsString()
  fosfor: string;

  @ApiProperty()
  @IsString()
  xlor: string;
}

export class UpdateBioximikDto {
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
  umumiy_oqsil?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  albumin?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  xolesterin_umumiy?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  trigliseridlar?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  glyukoza?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  mochevina?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  kreatin?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  alaninaminotransferaza?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  aspartataminotransferza?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  gammagglutamilransferza?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  laktatdegidrogenaza?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  a_amilaza?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  ishqoriy_fostataza?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  tmol?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  kaliy?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  kaltsiy?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  temir?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  fosfor?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  xlor?: string;
}

