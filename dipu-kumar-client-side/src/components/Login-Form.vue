<template>
  <form @submit.prevent="Login()">
      <div class="username-container">
        <v-text-field label="username/email" type="text" outlined v-model="username"></v-text-field>
      </div>
      <div class="password-container">
        <v-text-field label="password" :type="(showPassword)?'text':'password'" outlined v-model="password" :append-icon="(showPassword)?'mdi-eye':'mdi-eye-off'" @click:append="showPassword = !showPassword"></v-text-field>
      </div>
      <div class="submit">
          <input type="submit" value="login" class="success">
          <span> <router-link to="/">forgot password</router-link> </span>
      </div>
  </form>
</template>

<script>
export default {
    data()
    {
        return{
            username:'',
            password:'',
            showPassword:false,
        }
    },
    methods:
    {
        Login()
        {
            // console.log("Login");
        }
    }
}
</script>

<style scoped>
.submit
{
    height: 3em;
    width: 100%;
}
.submit > input
{
    border: 2px solid black;
    width: 5em;
    height: 2.5em;
    margin-right: 2%;
}
</style>