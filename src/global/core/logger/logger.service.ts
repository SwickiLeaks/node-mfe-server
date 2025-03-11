/**
 * Copyright 2025
 */
import { Injectable, LoggerService as NestLoggerService, Scope } from '@nestjs/common';
import * as winston from 'winston';

@Injectable({ scope: Scope.TRANSIENT })
export class CustomLoggerService implements NestLoggerService {
  private logger: winston.Logger;
  private context?: string;

  /**
   * Constructor responsible for initializing the logger
   * @param context - The context to set
   */
  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(winston.format.timestamp(), this.customFormat()),
      transports: [new winston.transports.Console()],
    });
  }

  /**
   * Set the context for the logger
   * @param context
   * @returns
   */
  setContext(context: string) {
    this.context = context;
  }

  /**
   * Log a message - level: 'log'
   * @param message
   * @param context
   */
  log(message: string, context?: string) {
    const logContext = context || this.context;
    this.logger.info(message, { context: logContext });
  }

  /**
   * Log a message - level: 'error'
   * @param message
   * @param context
   */
  error(message: string, context?: string) {
    const logContext = context || this.context;
    this.logger.error(message, { context: logContext });
  }

  /**
   * Log a message - level: 'warn'
   * @param message
   * @param context
   */
  warn(message: string, context?: string) {
    const logContext = context || this.context;
    this.logger.warn(message, { context: logContext });
  }

  /**
   * Log a message - level: 'debug'
   * @param message
   * @param context
   */
  debug(message: string, context?: string) {
    const logContext = context || this.context;
    this.logger.debug(message, { context: logContext });
  }

  /**
   * Log a message - level: 'verbose'
   * @param message
   * @param context
   */
  verbose(message: string, context?: string) {
    const logContext = context || this.context;
    this.logger.verbose(message, { context: logContext });
  }

  // Custom format for log messages
  private customFormat() {
    return winston.format.printf((info) => {
      const pid = process.pid;
      let nestLevel = 'LOG';
      let levelColor = '\x1b[36m'; // Green for log (default)
      let messageColor = '\x1b[37m'; // White for default messages

      if (info.level.includes('error')) {
        nestLevel = 'ERROR';
        levelColor = '\x1b[31m'; // Red for error
        messageColor = '\x1b[91m'; // Bright red for error messages
      } else if (info.level.includes('warn')) {
        nestLevel = 'WARN';
        levelColor = '\x1b[33m'; // Yellow for warning
        messageColor = '\x1b[93m'; // Bright yellow for warning messages
      } else if (info.level.includes('debug')) {
        nestLevel = 'DEBUG';
        levelColor = '\x1b[34m'; // Blue for debug
        messageColor = '\x1b[94m'; // Bright blue for debug messages
      } else if (info.level.includes('verbose')) {
        nestLevel = 'VERBOSE';
        levelColor = '\x1b[35m'; // Magenta for verbose
        messageColor = '\x1b[95m'; // Bright magenta for verbose messages
      }

      const levelStr = `${levelColor}${nestLevel.padEnd(1)}\x1b[0m`;
      const contextStr = info.context ? `\x1b[36m[${info.context}]\x1b[0m` : '';
      const messageStr = `${messageColor}${info.message}\x1b[0m`;
      const beginStr = `${levelColor}[NEST] ${pid}`;
      const formattedDate = new Date(info.timestamp as string).toLocaleString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });

      return `${beginStr}  - ${formattedDate}     ${levelStr} ${contextStr} ${messageStr}`;
    });
  }
}
