/**
 * Copyright 2025
 */
import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { json, text } from 'express';
import { join } from 'path';
import { HttpExceptionFilter } from '../core/exceptions/http-exception.filter';
import { LoggingInterceptor } from '../core/interceptors/logging.interceptor';
import { getAppMode, Mode } from '../utilities/getAppMode';

/**
 * The Bootstrap class is responsible for bootstrapping the application
 * @class Bootstrap
 */
export class Bootstrap {
  public mode: Mode;

  /**
   * Constructor for the Bootstrap class
   * Will terminate if the root module is not provided or if the application mode cannot be determined
   * @param rootModule - The root module of the application
   */
  constructor(private rootModule: any) {
    if (!rootModule) throw new Error('Unable to bootstrap app without a root module');

    this.mode = getAppMode();
    if (!this.mode) throw new Error('Unable to get application mode');
  }

  /**
   * Bootstrap and start the application
   * @returns {Promise<void>} A promise that resolves when the application is bootstrapped
   */
  public async bootstrap(): Promise<void> {
    let app = await this.createExpressApplication();

    app = await this.configureMiddleware(app);
    app = await this.configureStaticAssets(app as NestExpressApplication);

    // if (this.mode !== Mode.PROD) {
    //   generateDependencyGraph(app);
    // }

    app.enableShutdownHooks();
    await app.listen(3000);
  }

  /**
   * This configures an express application to serve static files and use EJS as the view engine
   *
   * @param app - The NestExpressApplication instance
   * @returns {Promise<NestExpressApplication>} The configured application
   */
  private async configureStaticAssets(app: NestExpressApplication): Promise<NestExpressApplication> {
    const staticPath = join(__dirname, '..', '..', '..', 'public');
    const viewPath = join(__dirname, '..', '..', '..', 'views');
    const viewEngine = 'ejs';

    if ('useStaticAssets' in app) {
      app.useStaticAssets(staticPath, {
        setHeaders: (res) => {
          res.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
          res.set('Pragma', 'no-cache');
        },
      });
      app.setBaseViewsDir(viewPath);
      app.setViewEngine(viewEngine);
    }

    return app;
  }

  /**
   * Create Express Application
   * @returns {Promise<INestApplication>} The created Express application
   */
  private async createExpressApplication(): Promise<INestApplication> {
    let app = await NestFactory.create<NestExpressApplication>(this.rootModule, {});
    app.disable('x-powered-by');

    return app as INestApplication;
  }

  /**
   * Configure middleware for the application
   * @param {INestApplication} app - The application instance
   * @returns {Promise<INestApplication>} The application instance with configured middleware
   */
  private async configureMiddleware(app: INestApplication): Promise<INestApplication> {
    app.use(text({ limit: '5mb' }));
    app.use(json({ type: ['application/json-patch+json', 'application/json'], limit: '5mb' }));

    app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalInterceptors(new LoggingInterceptor());

    return app;
  }
}
