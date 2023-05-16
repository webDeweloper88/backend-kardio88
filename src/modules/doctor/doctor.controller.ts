import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto, UpdateDoctorDto } from './dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Doctor } from './models';

@Controller('doctors')
export class DoctorController {
    constructor(private readonly doctorService: DoctorService) { }

    @ApiTags('API')
    @ApiResponse({ status: 201, type: CreateDoctorDto })
    @Post('create_doctor')
    async register(@Body() createDoctorDto: CreateDoctorDto) {
        return this.doctorService.create(createDoctorDto);
    }

    @ApiTags('API')
    @ApiResponse({ status: 201, type: Doctor })
    @Get()
    async findAll() {
        return this.doctorService.findAll();
    }

    @ApiTags('API')
    @ApiResponse({ status: 201, type: Doctor })
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.doctorService.findOne(+id);
    }

    @ApiTags('API')
    @ApiResponse({ status: 201, type: Doctor })
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateDoctorDto: UpdateDoctorDto) {
        return this.doctorService.update(+id, updateDoctorDto);
    }

    @ApiTags('API')
    @ApiResponse({ status: 201, })
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.doctorService.remove(+id);
    }
}