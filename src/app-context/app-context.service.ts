/**
 * Copyright 2025
 */
import { Injectable } from '@nestjs/common';
import {
  MfeAuthContext,
  MfeContextData,
  MfeLoginContext,
  MfeRequestContext,
  MfeUserContext,
} from '../template-data/template-data.model';

@Injectable()
export class AppContextService {
  constructor() {}

  /**
   * Get the MFE context data to be supplied to MFEs
   * @param request - Express request object
   * @returns Promise<MfeContextData>
   */
  public async getMfeContext(request: Request): Promise<MfeContextData> {
    return {
      userContext: await this.getUserContext(),
      authContext: await this.getAuthContext(),
      requestContext: await this.getRequestContext(),
      loginContext: await this.getLoginContext(),
    };
  }

  /**
   * Get the user context to be supplied to MFEs
   * @returns Promise<MfeUserContext>
   */
  private async getUserContext(): Promise<MfeUserContext> {
    return {
      id: 'id',
      uid: 'uid',
      displayName: 'displayName',
      alias: 'alias',
      email: 'email',
      uiRights: ['uiRights'],
    };
  }

  /**
   * Get the auth context to be supplied to MFEs
   * @returns Promise<MfeAuthContext>
   */
  private async getAuthContext(): Promise<MfeAuthContext> {
    return {
      loginUrl: 'loginUrl',
      logoutUrl: 'logoutUrl',
      apiUrl: 'apiUrl',
      refreshUrl: 'refreshUrl',
      csrfToken: 'csrfToken',
    };
  }

  /**
   * Get the request context to be supplied to MFEs
   * @returns Promise<MfeRequestContext>
   */
  private async getRequestContext(): Promise<MfeRequestContext> {
    return {
      locales: ['locales'],
      devMode: false,
      appBaseUrl: 'appBaseUrl',
    };
  }

  /**
   * Get the login context to be supplied to MFEs
   * @returns Promise<MfeLoginContext>
   */
  private async getLoginContext(): Promise<MfeLoginContext> {
    return {
      goto: 'goto',
      gotoOnFail: 'gotoOnFail',
      resetUrl: 'resetUrl',
      hasNetworkContstraints: false,
      rememberMe: false,
    };
  }
}
