import { CreateUserDtoRequest } from "../../../services/user/dtos/createUser.dto.request";
import { UserDtoRepsonse } from "../../../services/user/dtos/getUser.dto.response";
import { LoginDtoResponse } from "../../../services/user/dtos/login.dto.response";

export const getUserMock: UserDtoRepsonse = {
  user: {
    id: 1,
    firstName: 'Matheus',
    lastName: 'Dias',
    email: 'matheus.dias.dev@gmail.com',
    birthDate: new Date(),
    role: 'USER',
    password: null,
    passwordConfirmation: null,
    cpf: '06383301144',
    image: 'http://localhost:1000/v1/user',
    phoneNumber: '64984313343',
    enabled: true,
    accountNonExpired: true,
    accountNonLocked: true,
    credentialsNonExpired: true,
    authorities: [
      {
        authority: 'USER',
      },
    ],
    username: 'matheus.dias.dev@gmail.com',
  },
};

export const postLoginMock: LoginDtoResponse = {
  accessToken: 'token',
  refreshToken: 'token2',
  user: {
    id: 1,
    firstName: 'Matheus',
    lastName: 'Dias',
    email: 'matheus.dias.dev@gmail.com',
    birthDate: new Date('2024-04-04T00:00:00.000+00:00'),
    role: 'USER',
    password: null,
    passwordConfirmation: null,
    cpf: '06383301144',
    image: 'http://localhost:1000/v1/user',
    phoneNumber: '64984313343',
    enabled: true,
    accountNonExpired: true,
    accountNonLocked: true,
    credentialsNonExpired: true,
    authorities: [
      {
        authority: 'USER',
      },
    ],
    username: 'matheus.dias.dev@gmail.com',
  },
};


export const postCreateUserMock: CreateUserDtoRequest = {
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