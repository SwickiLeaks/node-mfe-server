/**
 * Copyright 2025
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ShutdownModule } from './atlas/bootstrap/shutdown.module';
import { CustomLoggerModule } from './atlas/core/logger/logger.module';

/**
 * The root module of the application that imports all other modules
 * @module AppModule
 */
@Module({
  imports: [ShutdownModule, CustomLoggerModule],
  controllers: [AppController],
})
export class AppModule {}
