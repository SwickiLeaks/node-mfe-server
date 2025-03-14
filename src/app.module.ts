/**
 * Copyright 2025
 */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppContextModule } from './app-context/app-context.module';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { ShutdownModule } from './global/bootstrap/shutdown/shutdown.module';
import { CachingModule } from './global/caching/caching.module';
import { CustomLoggerModule } from './global/core/logger/logger.module';
import { TemplateDataService } from './template-data/template-data.service';

/**
 * The root module of the application that imports all other modules
 * @module AppModule
 */
@Module({
  imports: [AuthModule, AppContextModule, ShutdownModule, CustomLoggerModule, CachingModule],
  providers: [TemplateDataService],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes(AppController);
  }
}
