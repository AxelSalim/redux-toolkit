import store from "./app/store.js"; 
import { cakeActions } from "./features/cake/cakeSlice.js";

console.log("Initial state ", store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("Updated state ", store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked());

unsubscribe();