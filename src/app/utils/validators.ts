import { cpf } from 'cpf-cnpj-validator';
import validator from 'validar-telefone';

export function validateCpf(cpfParam: string) {
  if (!cpf.isValid(cpfParam)) {
    return false;
  }
  return true;
}

export function validatePhoneNumber(phoneNumberParam: string) {
  if (!validator(phoneNumberParam)) {
    return false;
  }
  return true;
}
