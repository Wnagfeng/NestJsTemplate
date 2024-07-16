import { Module } from '@nestjs/common';
import { ExampleLogController } from './example-log.controller';

@Module({
  controllers: [ExampleLogController]
})
export class ExampleLogModule {}
