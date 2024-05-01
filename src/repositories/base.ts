import http from "../utils/api/api";

export default class BaseRepository {
  get = async <TResBdy, Params = null>(
    url: string,
    params?: Params,
    headers?: any
  ) => {
    return http.get<TResBdy>(url, { params: params, headers: headers });
  };

  post = async <TReqBdy, TResBdy = null, TParams = null>(
    url: string,
    body?: TReqBdy,
    params?: TParams,
    headers?: any
  ) => {
    return http.post<TResBdy>(url, body, {
      params: params,
      headers: headers,
    });
  };

  put = async <TReqBdy = null, TResBdy = null, TParams = null>(
    url: string,
    body: TReqBdy,
    params?: TParams,
    headers?: any
  ) => {
    return http.put<TResBdy>(url, body, {
      params: params,
      headers: headers,
    });
  };

  patch = async <TReqBdy = null, TResBdy = null, TParams = null>(
    url: string,
    body: TReqBdy,
    params?: TParams,
    headers?: any
  ) => {
    return http.patch<TResBdy>(url, body, {
      params: params,
      headers: headers,
    });
  };

  delete = async <TReqBdy = null, TResBdy = null, TParams = null>(
    url: string,
    body?: TReqBdy,
    params?: TParams,
    headers?: any
  ) => {
    return http.delete<TResBdy>(url, {
      data: body,
      params: params,
      headers: headers,
    });
  };
}

export const baseRepository = new BaseRepository();
