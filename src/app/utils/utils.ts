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