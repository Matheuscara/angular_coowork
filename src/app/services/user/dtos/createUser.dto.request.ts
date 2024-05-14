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


export const exampleBody: CreateUserDtoRequest = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@example.com',
  birthDate: '1990-01-01',
  tipo_usuario: 'regular',
  empresa: 'ACME Inc.',
  cpf: '12345678900',
  imagem: 'https://example.com/profile.jpg',
  phoneNumber: '+1 123-456-7890',
  password: 'password123',
  passwordConfirmation: 'password123',
};