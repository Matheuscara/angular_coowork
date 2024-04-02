import { signalStore, withState } from '@ngrx/signals';
import { UserSelectors } from './user.selectors';
import { UserMethods } from './user.methods';
import { UserHooks } from './user.hooks';
import { User } from './states/user.state';
import { Endereco } from './states/endereco.state';

export interface UserState {
  connected: boolean;
  login: {
    loading: boolean;
    error: string;
    success: boolean;
  };
  createUser: {
    loading: boolean;
    error: string;
    success: boolean;
  };
  user: User;
  endereco: Endereco;
}

export const initialState: UserState = {
  connected: false,
  login: {
    loading: false,
    error: '',
    success: false,
  },
  createUser: {
    loading: false,
    error: '',
    success: false,
  },
  user: {
    loading: false,
    error: '',
    success: false,
    id: null,
    primeiro_nome: '',
    ultimo_nome: '',
    email: '',
    data_nascimento: null,
    tipo_usuario: '',
    empresa: '',
    cpf: '',
    imagem: '',
    telefone: '',
  },
  endereco: {
    rua: '',
    bairro: '',
    cep: '',
    cidade: '',
    pais: '',
    numero: '',
    complemento: '',
  },
};

export const UserStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  UserSelectors(),
  UserMethods(),
  UserHooks()
);
