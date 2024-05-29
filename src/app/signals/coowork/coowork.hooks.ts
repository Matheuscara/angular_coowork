import { withHooks } from "@ngrx/signals";

export function CooworkHooks() {
  return withHooks({
    onInit({ validToken, cooworkDetails }) {
      // console.log(cooworkDetails)
    },
    onDestroy() {
      // console.log('on destroy');
    },
  });
}
