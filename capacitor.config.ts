import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'notion-clone',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
