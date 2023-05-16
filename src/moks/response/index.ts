import { ApiProperty } from '@nestjs/swagger';
import { BemorResponse } from '../../modules/bemor/response';
import { DepartmentResponse } from '../../modules/department/response';

export class LabaratoryResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty({ type: () => BemorResponse })
    bemor: BemorResponse;

    @ApiProperty({ type: () => DepartmentResponse })
    bolim: DepartmentResponse;

    @ApiProperty()
    kasallik: string;

    @ApiProperty()
    selnaya_kapilyarnaya_krov: string;

    @ApiProperty()
    plazma_krovi: string;

    @ApiProperty()
    pazoboy_moche: string;

    @ApiProperty()
    utrenney_moche: string;

    @ApiProperty()
    sutochnoy_moche: string;

    @ApiProperty()
    sana: string;
}