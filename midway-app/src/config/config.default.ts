import { EggAppConfig, EggAppInfo, PowerPartial } from 'midway';

export type DefaultConfig = PowerPartial<EggAppConfig>

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1603767570206_8170';

  // add your config here
  config.middleware = [
    'cors'
  ];

  config.cors = {
    methods: '*',
    origin: '*'
  }

  return config;
};
