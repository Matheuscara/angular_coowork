export interface getByIdDtoResponse {
    id: number;
    name: string;
    imageCoowork: string;
    administrator: string;
    email: string;
    admImage: string;
    phoneNumber: string;
    detail: {
      id: number;
      description: string;
      cnpj: number;
      phone_number: number;
      opening_hours: number;
      closer_hours: number;
      coffee_shop: boolean;
      safe_box: boolean;
      meeting_room: boolean;
    };
    places: {
      id: number;
      type: string;
      capacity: number;
      image: string | null;
      day_price: number;
    }[];
    address: {
      id: number;
      road: string;
      neighborhood: string;
      zip_code: number;
      city: string;
      state: string;
      country: string;
      number: string;
      complement: string;
      lat: number;
      lon: number;
    };
    coffee: boolean;
    safeBox: boolean;
    meetingRoom: boolean;
  }
  