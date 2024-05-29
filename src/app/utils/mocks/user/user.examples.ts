import { CreateUserDtoRequest } from "../../../services/user/dtos/createUser.dto.request";
import { UserDtoRepsonse } from "../../../services/user/dtos/getUser.dto.response";
import { LoginDtoResponse } from "../../../services/user/dtos/login.dto.response";

export const getUserMock: UserDtoRepsonse = {
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  role: '',
  cpf: '',
  image: '',
  phoneNumber: '',
}

export const postLoginMock: LoginDtoResponse = {
  accessToken: 'token',
  refreshToken: 'token2',
  user: {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    cpf: '',
    image: '',
    phoneNumber: '',
  }
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
  password: '',
  passwordConfirmation: '',
};