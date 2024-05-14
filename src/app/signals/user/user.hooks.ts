import { withHooks } from "@ngrx/signals";

export function UserHooks() {
  return withHooks({
    onInit({ validToken }) {
      // console.log('on init');
    },
    onDestroy() {
      // console.log('on destroy');
    },
  });
}
