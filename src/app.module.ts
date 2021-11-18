import { Module } from '@nestjs/common';
import { RegisterModule } from './modules/register/register.module';

@Module({
  imports: [RegisterModule]
})
export class AppModule {}
