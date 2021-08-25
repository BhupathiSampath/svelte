<script>
// import * as api from 'shared/apis';

let username,email,password;
let errors=[], submitting, success;

async function handleSubmit() {
    submitting = true;
    errors = [];
    const { response, json} = await post(
        'http://127.0.0.1:8080/registerview',
        {user: {username, email, password}}
    );
    if (response.status === 200) {
        success = json.message;
        username = undefined;
        email = undefined;
        password = undefined;
    }
    else if (response.status === 401) {
        success = undefined;
        if (json.email) {
            errors = [...errors, `Email ${json.email[0]}`];
        }
        if (json.username) {
            errors = [...errors, `Email ${json.user[0]}`];
        }
        if (json.password) {
            errors = [...errors, `Email ${json.password[0]}`];
        }
    }
    else if ( response.status===404){
        errors = ['failed'];
    }
    else if ( response.status===500){
        errors = ['failed'];
    }
    submitting = false;
}

</script>

<div class="container">
    <form on:submit|preventDefault={handleSubmit} class="box" action="" method="POST">
        <!-- {% csrf_token %} -->
        <h1>Register here</h1><br>
        <div class="field">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">Username</label>
            <div class="control">
                <input bind:value={username} class="input" type="text" name="username" placeholder="username" required="required">
            </div>
        </div>
        <div class="field">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">Email</label>
            <div class="control">
                <input bind:value={email} class="input" type="email" name="email" placeholder="Email" required="required">
            </div>
        </div>
        <div class="field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">Password</label>
        <div class="control">
            <input bind:value={password} class="input" id="id_password" type="password" name="password1" placeholder="Password"  required="required">
            <i class="far fa-eye-slash" id="togglePassword" ></i>
        </div>
        </div>
        <div class="field">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">Confirm Password</label>
            <div class="control">
                <input class="input" id="is_password" type="password" name="password2" placeholder="Confirm Password" required="required">
                <i class="far fa-eye-slash" id="togglePassword1" ></i>
            </div>
        </div>
        <div class="column is-fullwidth"><button class="button is-primary is-fullwidth">SIGNUP</button></div>
        <div>Already have an account? <a href="/Login">Login here</a></div>
    </form>
</div>

<style>
    .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* top: 200px; */
    /* bottom: 200px; */
    /* border-style:hidden; */
    /* border-style: double; */
    /* position: absolute; */
}
i{
    position: absolute;
    right: 15px;
    transform: translate(0,50%);
    top: 15%;
    cursor: pointer;
}

</style>
<!-- 
<script>
    let togglePassword = document.querySelector('#togglePassword');
    let password = document.querySelector('#id_password');
    
    togglePassword.addEventListener('click', function (e) {
        // toggle the type attribute
        let type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        const icon = type == 'password' ? 'far fa-eye-slash' : 'far fa-eye'
        password.setAttribute('type', type);
        // toggle the eye slash icon
        togglePassword.className = icon
    });
    
    const togglePassword1 = document.querySelector('#togglePassword1');
      const password1 = document.querySelector('#is_password');
    
    togglePassword1.addEventListener('click', function (e) {
        // toggle the type attribute
        const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
        const icon = type == 'password' ? 'far fa-eye-slash' : 'far fa-eye'
        password1.setAttribute('type', type);
        // toggle the eye slash icon
        togglePassword1.className = icon
    });
</script> -->