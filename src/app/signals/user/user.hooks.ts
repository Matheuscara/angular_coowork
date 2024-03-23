import { withHooks } from "@ngrx/signals";

export function UserHooks() {
  return withHooks({
    onInit({ resetCreated }) {
      console.log('on init');
      resetCreated();
    },
    onDestroy() {
      console.log('on destroy');
    },
  });
}
