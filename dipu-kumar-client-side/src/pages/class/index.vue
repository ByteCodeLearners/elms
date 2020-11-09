<template>
 <div>
     <container header="class">
             <div class="content" v-for="(subject, key) in Subjects" :key="key">
                 <router-link :to="`/school/${$route.params.schoolId}/dept/${$route.params.deptId}/class/${$route.params.classId}/subject/${subject.code}`">
                 {{subject.name}}
                 </router-link>
             </div>
     </container>
 </div>
</template>

<script>
import container from "@/components/container"
export default {
    data()
    {
        return{
            Subjects:[
                {name:"subject 1",notice:[1,2,3,4,5,6,7,8,9,10,11,12,13],code:"dd"},
                {name:"subject 2",notice:[1,2,3,4,5,6,7,8,9,10,11,12,13],code:"dd"},
                {name:"subject 3",notice:[1,2,3,4,5,6,7,8,9,10,11,12,13],code:"dd"},
                {name:"subject 4",notice:[1,2,3,4,5,6,7,8,9,10,11,12,13],code:"dd"},
                {name:"subject 5",notice:[1,2,3,4,5,6,7,8,9,10,11,12,13],code:"dd"},
                {name:"subject 6",notice:[1,2,3,4,5,6,7,8,9,10,11,12,13],code:"dd"},
                {name:"subject 7",notice:[1,2,3,4,5,6,7,8,9,10,11,12,13],code:"dd"},
                {name:"subject 8",notice:[1,2,3,4,5,6,7,8,9,10,11,12,13],code:"dd"},
                {name:"subject 9",notice:[1,2,3,4,5,6,7,8,9,10,11,12,13],code:"dd"},
                {name:"subject 10",notice:[1,2,3,4,5,6,7,8,9,10,11,12,13],code:"dd"},
            ],
        }
    },
    components:
    {
        container,
    },
}
</script>
<style scoped>
</style>