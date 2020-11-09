<template>
  <div class="lms-school-dept-container">
    <div class="lms-school-dept" v-for="(d,key) in getDept" :key="key" @click="$router.push('/school/'+schoolCode+'/dept/'+d.code)">
      <router-link :to="'/school/'+schoolCode+'/dept/'+d.code"><div>{{d.name}}</div></router-link>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  data()
  {
    return{
      schoolCode:this.$route.params.schoolId,
    }
  },
  computed:{
    getDept()
    {
      var temp=this.$store.getters.getSchool;
      for(var data in temp)
      {
        if(temp[data].code==this.schoolCode)
        {
          return temp[data].departments;
        }
      }
      return null
    }
  }

}
</script>

<style scoped>
.lms-school-dept-container
{
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 10%;
  margin-top: 10px;;
}
.lms-school-dept
{
  font-size: 1.4em;
  height: 70px;
}

.lms-school-dept:hover
{
  border: 1px solid red;
  text-decoration: underline #1976d2 1px;

}
.lms-school-dept:hover .line
{
  border: 0px;
}

.line
{
  width: 100%;
  border-bottom: 1px solid black;
}
a{
  text-decoration: none;
}
</style>