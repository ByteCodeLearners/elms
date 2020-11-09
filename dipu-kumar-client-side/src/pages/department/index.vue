<template>
  <div class="elms-department-container">
    <div class="elms-school-department">
        <container header="department name">
            <div v-for="(c,key) in classes" :key="key" class="content">
              <router-link :to="`/school/${schoolCode}/dept/${deptId}/class/${c.name}`" append>{{c.name}}</router-link>
            </div>
        </container>
    </div>
  </div>
</template>

<script>
import container from "@/components/container"
export default {
  data()
  {
    return{
      deptId:this.$route.params.deptId,
        classes:[
          {name:"a",dept:"class 1"},
          {name:"b",dept:"class 1"},
          {name:"c",dept:"class 1"},
          {name:"d",dept:"class 1"},
          {name:"e",dept:"class 1"},
          {name:"f",dept:"class 1"},
        ],
      schoolCode:this.$route.params.schoolId,
    }
  },
  components:{
    container,
  },
  methods:{
    getClasses()
    {
      var temp=this.$store.getters.getSchool;
      for(var i in temp)
      {
        var classes=temp[i].classes;
        for(var d in classes)
        {
          var c=classes[d];
          if(c.dept == this.getDept())
          {
            this.classes.push(c);
          }
        }
      }
      return null;
    },
     getDept()
    {
      var temp=this.$store.getters.getSchool;
      for(var data in temp)
      {
        if(temp[data].code==this.schoolCode)
        {
          var dept=temp[data].departments;
          for( var i in dept)
          {
            if(dept[i].code==this.deptId)
            {
              return dept[i].name;
            }
          }
        }
      }
      return null
    }
  }
}
</script>

<style>
a
{
  display: block;
  width: 100%;
}
</style>