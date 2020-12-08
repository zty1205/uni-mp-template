import { getAPIRoot } from '../utils/common';
import { toRawType } from '../utils/util';

interface IHooks {
  beforeHooks?: Function;
  successHooks?: Function;
  errorHooks?: Function;
  failHooks?: Function;
  completeHooks?: Function;
}

interface IConfig {
  noToast?: boolean;
  noLoading?: boolean;
  hooks?: IHooks;
  authRepeat?: number;
}

interface IRequestOptions extends UniApp.RequestOptions {
  params?: plainObject;
  config?: IConfig;
}

const URL_PREFIX = getAPIRoot();
console.log('URL_PREFIX = ', URL_PREFIX);

function resolverUrl(url: string, params?: plainObject): string {
  return url;
}

function request(options: IRequestOptions) {
  let { config, ...requestOptions } = options;
  requestOptions.url = resolverUrl(requestOptions.url, requestOptions.params);
  return doRequest(requestOptions, config || {});
}

function processHooksCreator(hooks?: IHooks) {
  if (hooks) {
    return (name: string, args: unknown) => {
      // @ts-ignore
      let fun = hooks[name];
      toRawType(fun) === 'Function' && fun.apply(null, args);
    };
  }
  return () => null;
}

function doRequest(requestOptions: UniApp.RequestOptions, config: IConfig): Promise<unknown> {
  const { noToast, noLoading, hooks, authRepeat } = config;
  if (!noLoading) {
  }
  return new Promise((resolve, reject) => {
    let retry = 0;
    function _request() {
      uni.request({
        ...requestOptions,
        success: () => {},
        fail: () => {},
        complete: () => {}
      });
    }
  });
}
