import { registerApplication, start } from 'single-spa';
import { constructApplications, constructLayoutEngine, constructRoutes } from 'single-spa-layout';
import 'systemjs';
import './polyfills';

function decodeHtmlEntities(encodedString: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(encodedString, 'text/html');
  return doc.documentElement.textContent || '';
}

// Retrieve and decode the MFE config
const mfeConfigElement = document.getElementById('mfe-configs-json') as HTMLScriptElement;
const mfeConfig = mfeConfigElement ? JSON.parse(decodeHtmlEntities(mfeConfigElement.textContent || '{}')) : [];
console.log('MFE Config:', mfeConfig);

const routes = constructRoutes(document.querySelector('#single-spa-layout').innerHTML, {
  loaders: {},
  props: {},
  errors: {},
});

const applications = constructApplications({
  routes,
  loadApp: (config) => System.import(config.name),
});

const layoutEngine = constructLayoutEngine({ routes, applications, active: false });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
