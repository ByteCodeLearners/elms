<template>
  <v-app>
     <v-app-bar class="header"  min-height="5em" max-height="6em">
      <v-app-bar-nav-icon @click="navDrawer=!navDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Welcome</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="avatar">
         <button> <i id="avatar" class="material-icons">account_circle</i></button>
      </div>
      <span class="space"></span>
    </v-app-bar>
    <v-navigation-drawer v-model="navDrawer" absolute temporary>
        <ul>
          <li><button><span class="material-icons">home</span> Home</button></li>
          <v-divider></v-divider>
          <li> <button><span class="material-icons">work_outline</span> Resources</button></li>
          <v-divider></v-divider>
          <li><button><span class="material-icons">assignment</span> Assignments</button></li>
          <v-divider></v-divider>
          <li><button><span class="material-icons">announcement</span> Announcents</button></li>
          <v-divider></v-divider>
          <li><button><span class="material-icons">class</span> This class</button></li>
          <v-divider></v-divider>
        </ul>
    </v-navigation-drawer>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',

     data()
    {
        return{
            navDrawer:false,
        }
    },
};
</script>
<style scoped>
.header
{
  background-color: #A9B890 !important;
}
#avatar
{
  font-size: 5em !important;
  margin-top:0.8em ;
  line-height: 0 !important;
  margin-right: 0.5em;
}
.mdi-menu
{
  font-size: 2.5em !important;
}
.v-toolbar__title
{
  font-size: 1.5em !important;
  text-transform: capitalize;
}
ul
{
  font-size: 1.5em !important;
  list-style: none;
  line-height: 3em;
}
ul li
{
  margin: 2%;
  font-weight: bolder;
}
</style>
