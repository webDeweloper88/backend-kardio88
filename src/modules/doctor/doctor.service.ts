import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Doctor } from './models';
import { CreateDoctorDto, UpdateDoctorDto } from './dto/index';

@Injectable()
export class DoctorService {
    constructor(
        @InjectModel(Doctor) private readonly doctorRepository: typeof Doctor,
    ) { }


    async create(dto: CreateDoctorDto): Promise<CreateDoctorDto> {
        const newDoctor = new Doctor();
        newDoctor.fio = dto.fio;
        newDoctor.mutaxassislik = dto.mutaxassislik;
        newDoctor.departmentId = dto.departmentId

        return await newDoctor.save();
    }

    async findOne(id: number): Promise<Doctor> {
        const doctor = await this.doctorRepository.findByPk(id);
        if (!doctor) {
            throw new NotFoundException(`Doctor with id ${id} not found`);
        }
        return doctor;
    }

    async findAll(): Promise<Doctor[]> {
        return this.doctorRepository.findAll();
    }

    async update(
        id: number,
        updateDoctorDto: UpdateDoctorDto,
    ): Promise<Doctor> {
        const doctor = await this.doctorRepository.findByPk(id);
        if (!doctor) {
            throw new NotFoundException(`Doctor with id ${id} not found`);
        }
        await doctor.update(updateDoctorDto);
        return doctor;
    }

    async remove(id: number): Promise<void> {
        const doctor = await this.doctorRepository.findByPk(id);
        if (!doctor) {
            throw new NotFoundException(`Doctor with id ${id} not found`);
        }
        await doctor.destroy();
    }
}