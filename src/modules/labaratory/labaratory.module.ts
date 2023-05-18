import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Labaratory } from './model/labaratory.model';
import { LabaratoryController } from './labaratory.controller';
import { LabaratoryService } from './labaratory.service';
import { Bemors } from '../bemor/models/bemor.model';
import { Department } from '../department/models';

@Module({
  imports: [
    SequelizeModule.forFeature([Labaratory, Bemors, Department]),
  ],
  controllers: [LabaratoryController],
  providers: [LabaratoryService],
})
export class LabaratoryModule { }