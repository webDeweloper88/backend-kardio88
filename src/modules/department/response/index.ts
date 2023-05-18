import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { Department } from '../models';

export class DepartmentResponse {
    @ApiProperty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsString()
    bolim_nomi: string;

    @ApiProperty()
    @IsString()
    hudud: string;

    @ApiProperty()
    @IsString()
    muassasa: string;

    @ApiProperty()
    @IsString()
    telefon_raqam: string;

    @ApiProperty()
    @IsString()
    bolim_boshligi: string;

    static fromModel(model: Department): DepartmentResponse {
        const departmentResponse = new DepartmentResponse();
        departmentResponse.id = model.id,
            departmentResponse.bolim_nomi = model.bolim_nomi,
            departmentResponse.hudud = model.hudud,
            departmentResponse.muassasa = model.muassasa,
            departmentResponse.telefon_raqam = model.telefon_raqam
        departmentResponse.bolim_boshligi = model.bolim_boshligi
        return departmentResponse;
    }
}