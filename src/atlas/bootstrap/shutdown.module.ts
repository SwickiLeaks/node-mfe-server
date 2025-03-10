/**
 * Copyright 2025
 */
import { Module } from '@nestjs/common';
import { CustomLoggerModule } from '../core/logger/logger.module';
import { ShutdownService } from './shutdown.service';

/**
 * Module for handling application shutdown
 * @module ShutdownModule
 */
@Module({
  imports: [CustomLoggerModule],
  providers: [ShutdownService],
  exports: [ShutdownService],
})
export class ShutdownModule {}
