import { MfeAccessToken } from '../auth/auth.model';

/**
 * Template data for the index page.  Contains data that needs to flow to client side resources
 */
export interface TemplateData {
  title: string;
  message: string;
  mfeAccessToken: MfeAccessToken;
  domainType: string;
  mfeContextData: MfeContextData;
}

/**
 * Full context data provided by the app service
 */
export interface MfeContextData {
  userContext: Readonly<MfeUserContext>;
  authContext: Readonly<MfeAuthContext>;
  requestContext: Readonly<MfeRequestContext>;
  loginContext: Readonly<MfeLoginContext>;
}

/**
 * User Context for MFEs
 */
export interface MfeUserContext {
  id: string;
  uid: string;
  displayName: string;
  alias: string;
  email: string;
  uiRights: string[];
}

/**
 * Auth Context for MFEs
 */
export interface MfeAuthContext {
  loginUrl: string;
  logoutUrl: string;
  apiUrl: string;
  refreshUrl: string;
  csrfToken: string;
}

/**
 * Request Context for MFEs
 */
export interface MfeRequestContext {
  locales: string[];
  devMode: boolean;
  appBaseUrl: string;
}

/**
 * Login Context for MFEs
 */
export interface MfeLoginContext {
  goto: string;
  gotoOnFail: string;
  resetUrl: string;
  hasNetworkContstraints: boolean;
  rememberMe: boolean;
}
