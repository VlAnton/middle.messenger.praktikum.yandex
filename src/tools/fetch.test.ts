import sinon, {
  SinonFakeXMLHttpRequest,
  SinonFakeXMLHttpRequestStatic,
} from 'sinon';
import { expect } from 'chai';
import HTTPTransport from './fetch';

describe('HTTP Transport test', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let httpTransport: HTTPTransport;
  let request: SinonFakeXMLHttpRequest;

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();
    // eslint-disable-next-line
    (global as any).XMLHttpRequest = xhr;

    xhr.onCreate = (req) => {
      request = req;
    };

    httpTransport = new HTTPTransport();
  });

  it('GET method test', () => {
    httpTransport.get('/');
    expect(request.method).to.equal('GET');
  });

  it('POST method test', () => {
    httpTransport.post('/');
    expect(request.method).to.equal('POST');
  });

  it('PUT method test', () => {
    httpTransport.put('/');
    expect(request.method).to.equal('PUT');
  });

  it('DELETE method test', () => {
    httpTransport.delete('/');
    expect(request.method).to.equal('DELETE');
  });
});
