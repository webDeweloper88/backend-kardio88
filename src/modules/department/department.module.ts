import { Module } from '@nestjs/common';
import { Department } from './models';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import { SequelizeModule } from '@nestjs/sequelize';



@Module({
    imports: [SequelizeModule.forFeature([Department])],
    controllers: [DepartmentController],
    providers: [DepartmentService],
    exports: [DepartmentService],
})
export class DepartmentModule { }