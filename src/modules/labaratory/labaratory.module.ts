import { Module } from '@nestjs/common';
import { LabaratoryController } from './labaratory.controller';
import { LabaratoryService } from './labaratory.service';

@Module({
  controllers: [LabaratoryController],
  providers: [LabaratoryService]
})
export class LabaratoryModule {}
