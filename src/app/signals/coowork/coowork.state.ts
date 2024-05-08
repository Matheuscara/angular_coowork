import { signalStore, withState } from '@ngrx/signals';
import { Coowork } from '../../models/coowork';
import { CooworkMethods } from './coowork.methods';

export interface CooworkState {
  cooworkList: {
    loading: boolean;
    error: string;
    success: boolean;
    cooworks: Coowork[];
  };
}

export const initialState: CooworkState = {
  cooworkList: {
    loading: false,
    error: '',
    success: false,
    cooworks: [],
  },
};

export const CooworkStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  // UserSelectors(),
  CooworkMethods(),
  // UserHooks()
);