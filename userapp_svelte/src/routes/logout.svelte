<script>
    import {goto} from "$app/navigation"
    // let email ='', password =''

    const logout = async () => {
        await fetch('http://10.10.6.73/logoutview', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            credentials: 'include',
            // body: JSON.stringify({
            //     email,
            //     password
            // })
            
        });

        await goto("/")
    }

    
</script>