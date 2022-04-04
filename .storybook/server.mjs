import baseConfig from '../web-dev-server.config.mjs';
import { storybookPlugin } from '@web/dev-server-storybook';

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  ...baseConfig,
  open: '/',
  plugins: [storybookPlugin({ type: 'web-components' }), ...baseConfig.plugins],
});
