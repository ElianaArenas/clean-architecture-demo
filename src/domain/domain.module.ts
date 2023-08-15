import { Module, Provider } from '@nestjs/common';
import { InfraestructureModule } from 'src/infraestructure/infraestructure.module';

const domainProviders: Provider[] = [];

@Module({
  imports: [InfraestructureModule],
  providers: domainProviders,
  exports: domainProviders,
})
export class DomainModule {}
