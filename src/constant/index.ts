import { string } from 'yargs';

const CDN = {
  MOCK: 'https://static.qa.91jkys.com',
  DEVELOPMENT: 'https://static.qa.91jkys.com',
  PREVIEW: 'https://static.pre.91jkys.com',
  PRODUCTION: 'https://static.91jkys.com'
};

const HOST = {
  mock: {
    api_gw: 'http://mock.qa.91jkys.com',
    cdn: CDN.MOCK,
    config: `${CDN.MOCK}/dms/5049639acd4d8d599421bb560503a7fa.json`,
    log: 'https://frontlo-collection.qa.91jkys.com/log.gif'
  },
  development: {
    api_gw: 'https://apigw.qa.91jkys.com',
    cdn: CDN.DEVELOPMENT,
    config: `${CDN.DEVELOPMENT}/dms/5049639acd4d8d599421bb560503a7fa.json`,
    log: 'https://frontlo-collection.qa.91jkys.com/log.gif'
  },
  preview: {
    api_gw: 'https://apigw.pre.91jkys.com',
    cdn: CDN.PREVIEW,
    config: `${CDN.PREVIEW}/dms/5049639acd4d8d599421bb560503a7fa.json`,
    log: 'https://frontlo-collection.qa.91jkys.com/log.gif'
  },
  production: {
    api_gw: 'https://apigw.91jkys.com',
    cdn: CDN.PRODUCTION,
    config: `${CDN.PRODUCTION}/dms/5049639acd4d8d599421bb560503a7fa.json`,
    log: 'https://frontlo-collection.91jkys.com/log.gif'
  }
};

export default HOST;
