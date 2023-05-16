import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateDoctorDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    fio: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    mutaxassislik: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    departmentId: number;
}

export class UpdateDoctorDto {

    @ApiProperty()
    @IsOptional()
    @IsString()
    fio?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    mutaxassislik?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    bo_limId?: string;
}