/**
 * Copyright 2025
 */
import { Module } from '@nestjs/common';
import { CustomLoggerService } from './logger.service';

@Module({
  providers: [CustomLoggerService],
  exports: [CustomLoggerService],
})
export class CustomLoggerModule {}
