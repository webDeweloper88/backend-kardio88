import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Department } from './models';
import { CreateDepartmentDto } from './dto';

@Injectable()
export class DepartmentService {
    constructor(@InjectModel(Department) private departmentModel: typeof Department) { }

    async create(dto: CreateDepartmentDto): Promise<CreateDepartmentDto> {
        const newDepartment = new Department();
        newDepartment.bolim_nomi = dto.bolim_nomi;
        newDepartment.hudud = dto.hudud;
        newDepartment.muassasa = dto.muassasa;
        newDepartment.telefon_raqam = dto.telefon_raqam;
        newDepartment.bolim_boshligi = dto.bolim_boshligi;
        newDepartment.shifokorlar_soni = dto.shifokorlar_soni;
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