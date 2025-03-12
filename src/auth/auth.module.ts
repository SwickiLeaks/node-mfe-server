import { Module } from '@nestjs/common';
import { CustomLoggerModule } from '../global/core/logger/logger.module';
import { AuthService } from './auth.service';

@Module({
  imports: [CustomLoggerModule],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
