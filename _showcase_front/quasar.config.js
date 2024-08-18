import { configure } from 'quasar/wrappers';

export default configure((ctx) => {
  return {
    eslint: {
      warnings: true,
      errors: true
    },
    boot: [
      'i18n'
    ],
    css: [
      'app.scss'
    ],

    extras: [
      'roboto-font',
      'material-icons',
    ], build: {
      vueRouterMode: 'hash',
      esbuildTarget: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20'
      },
    }, devServer: {
      server: {
        type: 'http'
      },
      open: true
    },
    framework: {
      config: {},
      plugins: []
    },
    animations: [], ssr: {
      prodPort: 3000,
      middlewares: [
        'render'
      ],
      pwa: false
    }, pwa: {
      workboxMode: 'GenerateSW'
    }, capacitor: {
      hideSplashscreen: true
    }, electron: {
      preloadScripts: ['electron-preload'], inspectPort: 5858,
      bundler: 'packager',
      packager: {},
      builder: {
        appId: 'quasar-project'
      }
    }, bex: {
      contentScripts: [
        'my-content-script'
      ]
    }
  }
});
