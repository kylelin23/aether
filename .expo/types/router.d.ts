/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/log_in` | `/log_in`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/sign_up` | `/sign_up`; params?: Router.UnknownInputParams; } | { pathname: `/routes/startingStack`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/log_in` | `/log_in`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/sign_up` | `/sign_up`; params?: Router.UnknownOutputParams; } | { pathname: `/routes/startingStack`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/log_in${`?${string}` | `#${string}` | ''}` | `/log_in${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/sign_up${`?${string}` | `#${string}` | ''}` | `/sign_up${`?${string}` | `#${string}` | ''}` | `/routes/startingStack${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/log_in` | `/log_in`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/sign_up` | `/sign_up`; params?: Router.UnknownInputParams; } | { pathname: `/routes/startingStack`; params?: Router.UnknownInputParams; } | `/+not-found` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
    }
  }
}
