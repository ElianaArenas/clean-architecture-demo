import { Module } from '@nestjs/common';
import { ServicesModule } from '../services/services.module';
import { PersonController } from './controllers/person.controller';

@Module({
  imports: [ServicesModule],
  controllers: [PersonController],
})
export class ApiModule {}
