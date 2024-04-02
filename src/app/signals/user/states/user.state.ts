export interface User {
  loading: boolean;
  error: string;
  success: boolean;
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
}