import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { Bioximik } from '../model/bioximik.model';

export class ResponseBioximikDto {
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

  static fromModel(bioximik: Bioximik): ResponseBioximikDto {
    const responseDto = new ResponseBioximikDto();
    responseDto.id = bioximik.id;
    responseDto.bemorId = bioximik.bemorId;
    responseDto.departmentId = bioximik.departmentId;
    responseDto.umumiy_oqsil = bioximik.umumiy_oqsil;
    responseDto.albumin = bioximik.albumin;
    responseDto.xolesterin_umumiy = bioximik.xolesterin_umumiy;
    responseDto.trigliseridlar = bioximik.trigliseridlar;
    responseDto.glyukoza = bioximik.glyukoza;
    responseDto.mochevina = bioximik.mochevina;
    responseDto.kreatin = bioximik.kreatin;
    responseDto.alaninaminotransferaza = bioximik.alaninaminotransferaza;
    responseDto.aspartataminotransferza = bioximik.aspartataminotransferza;
    responseDto.gammagglutamilransferza = bioximik.gammagglutamilransferza;
    responseDto.laktatdegidrogenaza = bioximik.laktatdegidrogenaza;
    responseDto.a_amilaza = bioximik.ishqoriy_fostataza;
    responseDto.tmol = bioximik.tmol;
    responseDto.kaliy = bioximik.kaliy;
    responseDto.kaltsiy = bioximik.kaltsiy;
    responseDto.temir = bioximik.temir;
    responseDto.fosfor = bioximik.fosfor;
    responseDto.xlor = bioximik.xlor;
    return responseDto
  }
}