import { Module } from '@nestjs/common';
import { AnalizController } from './analiz.controller';
import { AnalizService } from './analiz.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Analiz } from './model/model.analiz';
import { Bemors } from '../bemor/models/bemor.model';
import { Department } from '../department/models';

@Module({
  imports:[SequelizeModule.forFeature([Analiz, Bemors, Department])],
  controllers: [AnalizController],
  providers: [AnalizService]
})
export class AnalizModule {}
