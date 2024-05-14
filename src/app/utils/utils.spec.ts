import { MessageService } from 'primeng/api';
import { showAlert, setAccessToken, getAccessToken } from './utils';

describe('Utils', () => {
  let messageServiceSpy: jasmine.SpyObj<MessageService>;

  beforeEach(() => {
    messageServiceSpy = jasmine.createSpyObj('MessageService', ['add']);
  });

  it('showAlert should call MessageService.add with correct parameters', () => {
    showAlert('warn', 'Warn', 'This is a warning', messageServiceSpy);
    expect(messageServiceSpy.add).toHaveBeenCalledWith({
      severity: 'warn',
      summary: 'Warn',
      detail: 'This is a warning'
    });
  });

  it('setAccessToken should set token in localStorage', () => {
    setAccessToken('mockToken');
    expect(localStorage.getItem('token')).toEqual('mockToken');
  });

  it('getAccessToken should return token from localStorage', () => {
    localStorage.setItem('token', 'mockToken');
    const token = getAccessToken();
    expect(token).toEqual('mockToken');
  });

  it('getAccessToken should return empty string if token is not in localStorage', () => {
    localStorage.removeItem('token');
    const token = getAccessToken();
    expect(token).toEqual('');
  });
});
