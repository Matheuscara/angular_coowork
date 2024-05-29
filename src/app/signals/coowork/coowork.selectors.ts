import { signalStoreFeature, type, withComputed } from '@ngrx/signals';
import { computed } from '@angular/core';
import { CooworkState } from './coowork.state';

export function CooworkSelectors() {
  return signalStoreFeature(
    { state: type<CooworkState>() },
    withComputed(({ ...state }) => ({
      getAllCategories: computed(() => {
        let categories: { categorie: string; icon: string }[] = [];
        state.cooworkList.cooworks().map((coowork) => {
          if (coowork.coffee)
            categories.push({ categorie: 'coffee', icon: 'coffee.svg' });
          if (coowork.meetingRoom)
            categories.push({ categorie: 'Meeting Room', icon: 'meeting-room.svg' });
          if (coowork.safeBox)
            categories.push({ categorie: 'Safe Box', icon: 'safe-box.svg' });
        });
        categories = categories.filter(
          (v, i) =>
            categories.findIndex((t) => t.categorie === v.categorie) === i
        );
        return categories;
      }),
      cooworkDetails: computed(() => state.cooworkList.cooworkDetails()),
      cooworkDetailsLocation: computed(() => state.cooworkList.cooworkDetails().address),
    }))
  );
}
