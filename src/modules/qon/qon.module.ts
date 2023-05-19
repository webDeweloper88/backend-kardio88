import { Module } from '@nestjs/common';
import { QonController } from './qon.controller';
import { QonService } from './qon.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Qon } from './model/model.qon';
import { Department } from '../department/models';
import { Bemors } from '../bemor/models/bemor.model';

@Module({
  imports:[SequelizeModule.forFeature([Qon, Bemors, Department])],
  controllers: [QonController],
  providers: [QonService]
})
export class QonModule {}
 