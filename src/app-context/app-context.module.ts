/**
 * Copyright 2025
 */
import { Module } from '@nestjs/common';
import { AppContextService } from './app-context.service';

@Module({
  providers: [AppContextService],
  exports: [AppContextService],
})
export class AppContextModule {}
