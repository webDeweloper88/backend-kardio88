import { Module } from '@nestjs/common';
import { BioximikController } from './bioximik.controller';
import { BioximikService } from './bioximik.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Bioximik } from './model/model.bioximik';
import { Bemors } from '../bemor/models/bemor.model';
import { Department } from '../department/models';

@Module({
  imports:[SequelizeModule.forFeature([Bioximik, Bemors, Department])],
  controllers: [BioximikController],
  providers: [BioximikService]
})
export class BioximikModule {}
