import { MessageService } from "primeng/api";

 export function showAlert(
    severity: 'warn' | 'error' | 'info',
    title: 'Warn' | 'Error' | 'Wnfo',
    detail: string,
    messageService: MessageService
  ) {
    messageService.add({
      severity: severity,
      summary: title,
      detail: detail,
    });
  }

  export function setAccessToken(token: string) {
    localStorage.setItem('token', token)
  }

  export function getAccessToken() {
    return localStorage.getItem('token') || ""
  }