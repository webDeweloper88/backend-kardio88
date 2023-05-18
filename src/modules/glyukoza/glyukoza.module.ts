import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GlyukozaContoller } from './glyukoza.controller';
import { GlyukozaService } from './glyukoza.service';
import { Bemors } from '../bemor/models/bemor.model';
import { Department } from '../department/models';
import { Glyukoza } from './models/model.glyukoza';

@Module({
  imports: [
    SequelizeModule.forFeature([Glyukoza, Bemors, Department]),
  ],
  controllers: [GlyukozaContoller],
  providers: [GlyukozaService],
})
export class GlyukozaModule { }