import host from '@/constant/http';

export function getEnv(): VUE_APP_ENV {
  return process.env.VUE_APP_ENV;
}

export function getAppId(): string {
  return process.env.VUE_APP_MP_APPID;
}

export function isDevTools(): boolean {
  return uni.getSystemInfoSync().platform === 'devtools';
}

/**
 * 获取请求，资源域名
 */
export function getAPIRoot(namespace = 'api_gw' as HTTP_NAME_SPACE, mock = false): string {
  let space = mock ? host.mock : host[getEnv()] || host.development;
  return space[namespace];
}
