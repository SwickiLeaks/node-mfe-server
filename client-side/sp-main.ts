function decodeHtmlEntities(encodedString: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(encodedString, 'text/html');
  return doc.documentElement.textContent || '';
}

// Retrieve and decode the MFE config
const mfeConfigElement = document.getElementById('mfe-configs-json') as HTMLScriptElement;
const mfeConfig = mfeConfigElement ? JSON.parse(decodeHtmlEntities(mfeConfigElement.textContent || '{}')) : [];
console.log('MFE Config:', mfeConfig);
