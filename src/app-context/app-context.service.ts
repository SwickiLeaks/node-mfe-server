import { Injectable } from '@nestjs/common';
import { MfeContextData } from '../template-data/template-data.model';

@Injectable()
export class AppContextService {
  constructor() {}

  public async getMfeContext(request: Request): Promise<MfeContextData> {
    return {
      userContext: {
        id: 'id',
        uid: 'uid',
        displayName: 'displayName',
        alias: 'alias',
        email: 'email',
        uiRights: ['uiRights'],
      },
      authContext: {
        loginUrl: 'loginUrl',
        logoutUrl: 'logoutUrl',
        apiUrl: 'apiUrl',
        refreshUrl: 'refreshUrl',
        csrfToken: 'csrfToken',
      },
      requestContext: {
        locales: ['locales'],
        devMode: false,
        appBaseUrl: 'appBaseUrl',
      },
      loginContext: {
        goto: 'goto',
        gotoOnFail: 'gotoOnFail',
        resetUrl: 'resetUrl',
        hasNetworkContstraints: false,
        rememberMe: false,
      },
    };
  }
}
