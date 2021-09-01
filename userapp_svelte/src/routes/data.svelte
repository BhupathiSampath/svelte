<script>
    // import {onMount} from 'svelte';
    // import { writable, derived } from 'svelte/store';
	// export const apiData = writable([]);
    // // let message = ''
    // export const Data = derived(apiData, ($apiData) => {
	//   if ($apiData.data){
	// 	return $apiData.data.map(username => username.username);
	// 	// return $apiData.data;
	//   }
	//   return [];
	// });
    // onMount(async () => {
    //     // const response = await fetch('http://127.0.0.1:8000/userview', {
    //     const response = await fetch('http://10.10.6.73/api/userview', {
    //     headers: {'Content-Type':'application/json'},
    //     credentials: 'include',
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //             console.log(data);
    //         apiData.set(data);
    //     }).catch(error => {
    //         console.log(error);
    //         return [];
    //     });
    //         // console.log(Data.username)
    //         // message = `${Data}`;
    // });

    import {onMount} from "svelte";
    import authenticated from "../stores/auth";
    let message = ''
    onMount(async () => {
        try {
            const response = await fetch("http://10.10.6.73/api/userview", {
                headers: {'Content-Type':'application/json'},
                credentials: 'include',
            })

            const content = await response.json()
            // console.log(content)
            message = `Hello, ${content.username}`;
            authenticated.set(true);
        } catch(e) {
            message = "You are not authenticated";
            authenticated.set(false);
        }
    });

</script>

<!-- {#each $Data as data}
		<li>username: {data}</li>
{/each} -->
{message}
