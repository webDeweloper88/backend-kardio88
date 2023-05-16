import { Module } from '@nestjs/common';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
//import { SequelizeModule } from '@nestjs/sequelize';
import { Doctor } from './models';

import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Doctor])],
  controllers: [DoctorController],
  providers: [DoctorService]
})
export class DoctorModule { }
