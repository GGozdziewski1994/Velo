import { isArray, isNil, isString } from 'lodash';

export class QueryParamsUtil {
  static toParamsString(params: any): string {
    if (!params) return '';

    const resultQueryStrings = [];
    const keys = Object.keys(params);

    for (const key of keys) {
      const value = params[key];
      if (isNil(value) || value === '' || (isArray(value) && value.length === 0)) continue;

      isString(value)
        ? resultQueryStrings.push(this.#getQueryParamString(key, encodeURIComponent(value)))
        : resultQueryStrings.push(this.#getQueryParamString(key, value));
    }

    return resultQueryStrings.length ? '?' + resultQueryStrings.join('&') : '';
  }

  static #getQueryParamString(key: string, val: string): string {
    return key + '=' + val;
  }
}
