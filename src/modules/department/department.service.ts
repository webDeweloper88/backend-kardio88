import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Department } from './models';
import { CreateDepartmentDto } from './dto';
import { Doctor } from '../doctor/models';

@Injectable()
export class DepartmentService {
    constructor(@InjectModel(Department) private departmentModel: typeof Department) { }

    async create(dto: CreateDepartmentDto): Promise<CreateDepartmentDto> {
        const newDepartment = new Department();
        newDepartment.bulimNomi = dto.bulimNomi;
        newDepartment.hudud = dto.hudud;
        newDepartment.muassasa = dto.muassasa;
        newDepartment.telefon = dto.telefon;
        newDepartment.bulimBoshligi = dto.bulimBoshligi;

        const doctors = dto.doctors.map(doctorDto => {
            const doctor = new Doctor();
            doctor.fio = doctorDto.fio;
            doctor.mutaxassislik = doctorDto.mutaxassislik
            return doctor;
        });

        newDepartment.doctors = doctors;


        return newDepartment.save();
    }

    async findAll(): Promise<Department[]> {
        return this.departmentModel.findAll();
    }

    async findOne(id: string): Promise<Department> {
        return this.departmentModel.findByPk(id);
    }

    async update(id: string, createDepartmentDto: CreateDepartmentDto): Promise<Department> {
        const department = await this.findOne(id);
        await department.update(createDepartmentDto);
        return department;
    }

    async delete(id: string): Promise<void> {
        const department = await this.findOne(id);
        await department.destroy();
    }
}