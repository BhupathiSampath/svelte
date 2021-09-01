import {writable} from "svelte/store";
export const authenticated = writable(value: false);

// export const User = function () {
// 	const { subscribe, set } = writable(false);
//   return {
//     subscribe
//     signout: () => { set(null) },
// 		// signin:  () => { set('') }
// 	}
// }()
