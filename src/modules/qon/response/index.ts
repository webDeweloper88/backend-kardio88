import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class ResponseQonDto {
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
  gemoglablin: string;

  @ApiProperty()
  @IsString()
  eritrositlar: string;

  @ApiProperty()
  @IsString()
  rang_kursatkichi: string;

  @ApiProperty()
  @IsString()
  eritrosit_urta_xajm: string;

  @ApiProperty()
  @IsString()
  eritrosit_gemoglablin: string;

  @ApiProperty()
  @IsString()
  gemotorkrit: string;

  @ApiProperty()
  @IsString()
  trombotsit: string;

  @ApiProperty()
  @IsString()
  trombotsit_urtacha_hajm: string;

  @ApiProperty()
  @IsString()
  trombotsit_anizotsitozi: string;

  @ApiProperty()
  @IsString()
  trombokrid: string;

  @ApiProperty()
  @IsString()
  leykositlar: string;

  @ApiProperty()
  @IsString()
  miyelositlar: string;

  @ApiProperty()
  @IsString()
  metamiyelotsitlar: string;

  @ApiProperty()
  @IsString()
  tayoqcha_yadrolineytrofil: string;

  @ApiProperty()
  @IsString()
  segment_yadroli_neytrofil: string;

  @ApiProperty()
  @IsString()
  eozinofillar: string;

  @ApiProperty()
  @IsString()
  bazofillar: string;

  @ApiProperty()
  @IsString()
  manotsitlar: string;

  @ApiProperty()
  @IsString()
  limfotsitlar: string;

  @ApiProperty()
  @IsString()
  plazmatik_hujayralar: string;

  @ApiProperty()
  @IsString()
  eritrositning_chukish_tezligi: string;
}