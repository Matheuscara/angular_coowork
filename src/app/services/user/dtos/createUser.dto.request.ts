export interface CreateUserDtoRequest {
  primeiro_nome: string;
  ultimo_nome: string;
  email: string;
  data_nascimento: string;
  tipo_usuario: string;
  empresa: string;
  cpf: string;
  imagem: string;
  telefone: string;
  password: string;
  password_confirmation: string;
  endereco: {
    rua: string;
    bairro: string;
    cep: string;
    cidade: string;
    pais: string;
    numero: string;
    complemento: string;
  };
}


export const exampleBody: CreateUserDtoRequest = {
  primeiro_nome: 'John',
  ultimo_nome: 'Doe',
  email: 'johndoe@example.com',
  data_nascimento: '1990-01-01',
  tipo_usuario: 'regular',
  empresa: 'ACME Inc.',
  cpf: '12345678900',
  imagem: 'https://example.com/profile.jpg',
  telefone: '+1 123-456-7890',
  password: 'password123',
  password_confirmation: 'password123',
  endereco: {
    rua: '123 Main St',
    bairro: 'Downtown',
    cep: '12345',
    cidade: 'Cityville',
    pais: 'Countryland',
    numero: '1',
    complemento: 'Apt 2B',
  },
};