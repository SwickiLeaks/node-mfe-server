import { Module } from '@nestjs/common';
import { CustomLoggerModule } from '../global/core/logger/logger.module';
import { AuthService } from './auth.service';
import { CachingModule } from '../global/caching/caching.module';

@Module({
  imports: [CustomLoggerModule, CachingModule],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
