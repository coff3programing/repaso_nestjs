import { Module } from '@nestjs/common';
import { KnightsController } from './knights.controller';
import { KnightsService } from './knights.service';

@Module({
  controllers: [KnightsController],
  providers: [KnightsService],
})
export class KnightsModule {}
