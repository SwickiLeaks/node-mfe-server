/**
 * Copyright 2025
 */
import { Module } from '@nestjs/common';
import { AppContextService } from './app-context/app-context.service';
import { AppController } from './app.controller';
import { ShutdownModule } from './global/bootstrap/shutdown/shutdown.module';
import { CustomLoggerModule } from './global/core/logger/logger.module';
import { TemplateDataService } from './template-data/template-data.service';

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
