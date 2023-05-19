import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateQonDto {
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

export class UpdateQonDto {
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
  gemoglablin?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  eritrositlar?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  rang_kursatkichi?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  eritrosit_urta_xajm?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  eritrosit_gemoglablin?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  gemotorkrit?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  trombotsit?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  trombotsit_urtacha_hajm?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  trombotsit_anizotsitozi?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  trombokrid?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  leykositlar?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  miyelositlar?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  metamiyelotsitlar?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  tayoqcha_yadrolineytrofil?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  segment_yadroli_neytrofil?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  eozinofillar?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  bazofillar?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  manotsitlar?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  limfotsitlar?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  plazmatik_hujayralar?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  eritrositning_chukish_tezligi?: string;



}