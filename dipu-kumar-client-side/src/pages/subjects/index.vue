<template>
  <div class="lms-subject-container">
    <div class="lms-subject" v-for="(content,key) in contents" :key="key">
      <ResourceView :data="content.id=key" :content="content"></ResourceView>
    </div>
  </div>
</template>

<script>
import ResourceView from "@/components/resource-view"
export default {   
    data()
    {
        return{
          contents: [
            {type:"assignment",data:"this is an assignment"},
            {type:"resource",data:"this is a resource"},
            {type:"announcement",data:"this is announcement"},
          ],
        }
    },
    components:{
      ResourceView,
    }

}
</script>

<style scoped>

</style>