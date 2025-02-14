import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'cypress',
      webServerCommands: {
        default: 'nx run weather:serve',
      },
    }),
    ciWebServerCommand: 'nx run my-project:serve-static',
    baseUrl: 'http://localhost:3000',
  },
});
