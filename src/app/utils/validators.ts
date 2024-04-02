import { cpf } from 'cpf-cnpj-validator';
import validator from 'validar-telefone';

export function validateCpf(cpfParam: string) {
  if (!cpf.isValid(cpfParam)) {
    return false;
  }
  return true;
}

export function validateTelefone(telefoneParam: string) {
  if (!validator(telefoneParam)) {
    return false;
  }
  return true;
}
