import { ApiProperty } from '@nestjs/swagger';

export class LabaratoryResponseDto {
	@ApiProperty()
	id: number;

	@ApiProperty()
	bemorId: number;

	@ApiProperty()
	departmentId: number;

	@ApiProperty()
	kasallik: string;

	@ApiProperty()
	selnaya_kapilyarnaya_krov: string;

	@ApiProperty()
	plazma_krovi: string;

	@ApiProperty()
	pozoboy_moche: string;

	@ApiProperty()
	utreney_moche: string;

	@ApiProperty()
	stuchnoy_moche: string;

	@ApiProperty()
	sana: string;
}