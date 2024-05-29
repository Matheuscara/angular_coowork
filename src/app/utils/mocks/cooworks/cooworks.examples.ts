import { Coowork } from '../../../models/coowork';
import { getByIdDtoResponse } from '../../../services/cooworks/dtos/getById.dto.response';

export const getAllCooworksMock: Coowork[] = [
  {
    id: 1,
    name: 'Coowork',
    imageCoowork: 'logo-url',
    coffee: true,
    safeBox: true,
    meetingRoom: true,
    dayPrices: [500, 30],
  },
];

export const getByIdCooworkMock: getByIdDtoResponse = {
  id: 1,
  name: 'Coowork de coco',
  imageCoowork: 'logo-url',
  administrator: 'Matheus',
  email: 'matheus.dias.dev@gmail.com',
  admImage: 'http://localhost:1000/v1/user',
  phoneNumber: '64984313343',
  detail: {
    id: 1,
    description:
      'Coworking is an arrangement in which workers of different companies share an office space, allowing cost savings and convenience through the use o',
    cnpj: 12345678901234,
    phone_number: 123456789,
    opening_hours: 8,
    closer_hours: 18,
    coffee_shop: true,
    safe_box: true,
    meeting_room: true,
  },
  places: [
    {
      id: 2,
      type: 'MEETING_ROOM',
      capacity: 5,
      image: null,
      day_price: 30,
    },
    {
      id: 5,
      type: 'PRIVATE_OFFICE',
      capacity: 1,
      image: null,
      day_price: 50,
    },
    {
      id: 3,
      type: 'SHARED_WORKSTATION',
      capacity: 10,
      image: null,
      day_price: 100,
    },
    {
      id: 1,
      type: 'MEETING_ROOM',
      capacity: 5,
      image: null,
      day_price: 30,
    },
    {
      id: 4,
      type: 'EVENT_SPACE',
      capacity: 50,
      image: null,
      day_price: 500,
    },
  ],
  address: {
    id: 1,
    road: 'RuaABC',
    neighborhood: 'BairroXYZ',
    zip_code: "12345678",
    city: 'CidadeA',
    state: 'Estado X',
    country: 'País P',
    number: '123',
    complement: 'Apartamento 101',
    lat: 0,
    lon: 0,
  },
  coffee: true,
  safeBox: true,
  meetingRoom: true,
};
