<template>
  <v-container>
      <div class="login-form-container">
          <div class="banner"></div>
          <div class="form">
            <LoginForm></LoginForm>
            <div class="social-media-logins">
                <button class="login-with-google">
                    <div class="icon">
                        <img src="../../assets/google.png" alt="" style="height:100%;width:70%">
                    </div>
                    <div>
                    Login with google

                    </div>
                </button>
                <button class="login-with-facebook">
                  <div><span class="material-icons icon">facebook</span></div>
                  <div>Login with Facebook</div>
                </button>
            </div>
          </div>
        </div>      
  </v-container>
</template>

<script>
import LoginForm from "../../components/Login-Form";
export default {
    data(){
        return{

        }
    },
    components:
    {
        LoginForm,
    }

}
</script>

<style scoped>
.login-form-container
{
    display: flex;
    flex-direction: row;
    padding: 5%;
    border: 1px solid black;

}
.login-form-container > .banner
{
    border: 1px solid black;
    width: 50%;
    background:url("../../assets/logo.png");
    background-size: 100% 100%;
    min-height: 350px;
    margin-right: 50px;
    box-shadow: 0.005em 0.05em 0.7em black;
}
.form
{
    flex-grow: 2;
}
.social-media-logins > button 
{
    border: 2px solid black;
    height: 2.5em;
    border-radius: 1em;
    margin-bottom: 0.5em;
    font-size: 1.5em !important;
    display: flex;
    flex-direction: row;
    outline: none;
}
.social-media-logins > button div:nth-child(2)
{
    flex-grow: 1;
    line-height: 2.5;
}
.icon
{
    font-size: 2em;
    width: 1.8em; 
    color: blue;
}
.social-media-logins
{
    display: flex;
    flex-direction: column;
}
@media screen and (max-width:850px) {
    .banner{
        display: none;
    }
}
</style>