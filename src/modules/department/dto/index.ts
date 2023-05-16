import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsOptional, ValidateNested } from 'class-validator';
import { CreateDoctorDto } from 'src/modules/doctor/dto';

export class CreateDepartmentDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    bulimNomi: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    hudud: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    muassasa: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    telefon: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    bulimBoshligi: string;

    @ApiProperty({ type: [CreateDoctorDto] })
    @ValidateNested({ each: true })
    @Type(() => CreateDoctorDto)
    doctors: CreateDoctorDto[];
}



export class UpdateDepartmentDto {

    @ApiProperty()
    @IsOptional()
    @IsString()
    bulimNomi?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    hudud?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    muassasa?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    telefon?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    bulimBoshligi?: string;
}