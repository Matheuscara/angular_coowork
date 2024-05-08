import { signalStoreFeature, type, withComputed } from "@ngrx/signals";
import { UserState } from "./user.state";
import { computed } from "@angular/core";

export function UserSelectors() {
  return signalStoreFeature(
    { state: type<UserState>() },
    withComputed(({ ...state }) => ({
      userConected: computed(() => state.connected()),
    })),
    
  );
}
