import { signalStore, withState } from '@ngrx/signals';
import { Coowork } from '../../models/coowork';
import { CooworkMethods } from './coowork.methods';
import { CooworkSelectors } from './coowork.selectors';
import { cooworkDetails } from '../../models/coowork-details';

export interface CooworkState {
  cooworkList: {
    loading: boolean;
    error: string;
    success: boolean;
    cooworks: Coowork[];
    cooworkDetails: cooworkDetails;
  };
}

export const initialState: CooworkState = {
  cooworkList: {
    loading: false,
    error: '',
    success: false,
    cooworks: [{
      id: 0,
      name: '',
      imageCoowork: '',
      administrator: '',
      email: '',
      admImage: '',
      phoneNumber: '',
      coffe: false,
      meetingRoom: false,
      safeBox: false,
      dayPrices: [],
      address: {
        id: 0,
        road: '',
        neighborhood: '',
        zip_code: 0,
        city: '',
        state: '',
        country: '',
        number: '',
        complement: '',
      },
    }],
    cooworkDetails: {
      id: 0,
      name: "",
      imageCoowork: "",
      administrator: "",
      email: "",
      admImage: "",
      phoneNumber: "",
      detail: {
        id: 0,
        description: "",
        cnpj: 0,
        phone_number: 0,
        opening_hours: 0,
        closer_hours: 0,
        coffe_shop: false,
        safe_box: false,
        meeting_room: false
      },
      places: [],
      address: {
        id: 0,
        road: "",
        neighborhood: "",
        zip_code: 0,
        city: "",
        state: "",
        country: "",
        number: "",
        complement: ""
      },
      coffe: false,
      safeBox: false,
      meetingRoom: false
    }
  },
};

export const CooworkStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  CooworkSelectors(),
  CooworkMethods(),
  // UserHooks()
);