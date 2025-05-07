// capacitor.config.ts

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kendra.acucharts',
  appName: 'AcuCharts',
  webDir: 'www', // this should point to your web build directory, which is typically "www"
  server: {
    url: 'https://access.resumefox.net/AcuChartsUAT', // URL of your live web app
    cleartext: true // For HTTP connections, only if your server does not use HTTPS
  }
};
export default config;
