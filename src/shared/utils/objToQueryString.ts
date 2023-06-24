/**
 * @example
 * params = { last: true, capabilityId: 1, situation: true }
 * console.log(objToQueryString(params)) // 'last=true&capabilityId=1&situation=true'
 */
export const objToQueryString = (obj: Object) =>
  Object.entries(obj)
    .map((param) => param.join('='))
    .join('&');
