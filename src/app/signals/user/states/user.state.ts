export interface User {
  id: number | null;
  primeiro_nome: string;
  ultimo_nome: string;
  email: string;
  data_nascimento: Date | null;
  tipo_usuario: string;
  empresa: string;
  cpf: string;
  imagem: string;
  telefone: string;
  password: string;
  password_confirmation: string;
}