import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './api/api.module';
import { ServicesModule } from './services/services.module';
import { InfraestructureModule } from './infraestructure/infraestructure.module';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ApiModule,
    DomainModule,
    ServicesModule,
    InfraestructureModule,
  ],
})
export class AppModule {}
