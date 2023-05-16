import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { Department } from '../models';

export class DepartmentResponse {
    @ApiProperty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsString()
    bulimNomi: string;

    @ApiProperty()
    @IsString()
    hudud: string;

    @ApiProperty()
    @IsString()
    muassasa: string;

    @ApiProperty()
    @IsString()
    telefon: string;

    @ApiProperty()
    @IsString()
    bulimBoshligi: string;

    static fromModel(model: Department): DepartmentResponse {
        const departmentResponse = new DepartmentResponse();
        departmentResponse.id = model.id,
            departmentResponse.bulimNomi = model.bulimNomi,
            departmentResponse.hudud = model.hudud,
            departmentResponse.muassasa = model.muassasa,
            departmentResponse.telefon = model.telefon
        departmentResponse.bulimBoshligi = model.bulimBoshligi
        return departmentResponse;
    }
}