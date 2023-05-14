import { Module } from '@nestjs/common';
import { BemorController } from './bemor.controller'
import { BemorService } from './bemor.service'
import { Bemors } from './models/bemor.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Bemors])],
  controllers: [BemorController],
  providers: [BemorService],
  exports: [BemorService]

})
export class BemorModule { }



