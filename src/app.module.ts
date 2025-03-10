/**
 * Copyright 2025
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ShutdownModule } from './atlas/bootstrap/shutdown.module';
import { CustomLoggerModule } from './atlas/core/logger/logger.module';
import { TemplateDataService } from './template-data/template-data.service';
import { AppContextService } from './app-context/app-context.service';

/**
 * The root module of the application that imports all other modules
 * @module AppModule
 */
@Module({
  imports: [ShutdownModule, CustomLoggerModule],
  providers: [AppContextService, TemplateDataService],
  controllers: [AppController],
})
export class AppModule {}
