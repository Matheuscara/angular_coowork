import { signalStore, withState } from '@ngrx/signals';
import { UserSelectors } from './user.selectors';
import { UserMethods } from './user.methods';
import { UserHooks } from './user.hooks';
import { UserState as User } from './states/user.state';
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
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    birthDate: new Date(),
    role: '',
    password: null,
    passwordConfirmation: null,
    cpf: '',
    image: '',
    phoneNumber: '',
    enabled: false,
    accountNonExpired: false,
    accountNonLocked: false,
    credentialsNonExpired: false,
    authorities: [],
    username: '',
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
