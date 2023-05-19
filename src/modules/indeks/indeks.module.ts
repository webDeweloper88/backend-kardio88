import { Module } from '@nestjs/common';
import { IndeksController } from './indeks.controller';
import { IndeksService } from './indeks.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Indeks } from './model/model.indeks';
import { Bemors } from '../bemor/models/bemor.model';
import { Department } from '../department/models';

@Module({
  imports: [SequelizeModule.forFeature([Indeks, Bemors, Department])],
  controllers: [IndeksController],
  providers: [IndeksService]
})
export class IndeksModule {}
