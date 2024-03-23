import { signalStore, withState } from '@ngrx/signals';
import { UserSelectors } from './user.selectors';
import { UserMethods } from './user.methods';
import { UserHooks } from './user.hooks';
import { User } from './states/user.state';
import { Endereco } from './states/endereco.state';

export interface UserState {
  connected: boolean;
  loading: boolean;
  created: boolean;
  user: User;
  endereco: Endereco;
}

export const initialState: UserState = {
  connected: false,
  loading: false,
  created: false,
  user: {
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
    password: '',
    password_confirmation: '',
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
