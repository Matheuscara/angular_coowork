export interface CreateUserDtoRequest {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  tipo_usuario: string;
  empresa: string;
  cpf: string;
  imagem: string;
  phoneNumber: string;
  password: string;
  passwordConfirmation: string;
}