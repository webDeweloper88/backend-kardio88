import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DepartmentService, } from './department.service';
import { CreateDepartmentDto } from './dto';
import { Department } from './models';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('departments')
export class DepartmentController {
    constructor(private readonly departmentService: DepartmentService) { }

    @ApiTags('API')
    @ApiResponse({ status: 201, type: CreateDepartmentDto })
    @Post('create')
    async create(@Body() dto: CreateDepartmentDto): Promise<CreateDepartmentDto> {
        return await this.departmentService.create(dto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Department> {
        return await this.departmentService.findOne(id);
    }

    @ApiTags('API')
    @ApiResponse({ status: 201, type: Department })
    @Get('')
    async findAll(): Promise<Department[]> {
        return await this.departmentService.findAll();
    }


    @ApiTags('API')
    @ApiResponse({ status: 201, type: CreateDepartmentDto })
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateDepartmentDto: CreateDepartmentDto): Promise<Department> {
        return await this.departmentService.update(id, updateDepartmentDto);
    }
    @ApiTags('API')
    @ApiResponse({ status: 201, })
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.departmentService.delete(id);
    }
}