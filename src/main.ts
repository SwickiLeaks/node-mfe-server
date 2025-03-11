/**
 * Copyright 2025
 */
import { AppModule } from './app.module';
import { Bootstrap } from './global/bootstrap/bootstrap';

/**
 * Bootstrap the application
 */
new Bootstrap(AppModule).bootstrap();
