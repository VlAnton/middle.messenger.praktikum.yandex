enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type Options = {
  method?: METHODS;
  headers?: Record<string, string>;
  timeout?: number;
  data?: unknown;
};

type HTTPMethod = (url: string, options?: Options) => Promise<unknown>;

function queryStringify(data: Record<string, unknown>) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  return Object.entries(data)
    .map(([k, v]) => `${k}=${v}`)
    .join('&');
}

export default class HTTPTransport {
  get: HTTPMethod = (url, options = { method: METHODS.GET }) => {
    return this.request(
      url,
      { ...options, method: METHODS.GET },
      options.timeout,
    );
  };

  post: HTTPMethod = (url, options = { method: METHODS.GET }) => {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout,
    );
  };

  put: HTTPMethod = (url, options = { method: METHODS.GET }) => {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout,
    );
  };

  delete: HTTPMethod = (url, options = { method: METHODS.GET }) => {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options.timeout,
    );
  };

  request = (
    url: string,
    options: Options = { method: METHODS.GET },
    timeout = 5000,
  ) => {
    const { headers = {}, method, data } = options;

    return new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;
      const newUrl = isGet
      ? `${url}?${queryStringify(data as Record<string, unknown> || {})}`
      : url;

      xhr.open(method!, newUrl);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;
      xhr.withCredentials = true

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
