<template>
<v-card>
    <header>
        <p><router-link :to="ClassData.classCode">{{ClassData.name}}</router-link></p>
    </header>
    <div class="line"></div>
    <div class="subjects">
        <p v-for="(i,key) in (subjectsLength>5)?(6-3):subjectsLength" :key="key">{{ClassData.subjects[i-1]}}</p>
        <a :href="ClassData.classCode" v-if="((subjectsLength-5)>0)?(subjectsLength-5):0">+{{subjectsLength-3}} more subjects</a>
    </div>
</v-card>
</template>

<script>
export default {
    data()
    {
        return{
            
        }
    },
    props:{
        ClassData:Object,
    },
    computed:
    {
        subjectsLength()
        {
            return this.ClassData.subjects.length;
        }
    }

}
</script>

<style scoped>
.v-card
{
    border-radius: 1em !important;
    width: 400px !important;
    min-height: 250px;

}
header
{
    height: 90px;
    width: 100% !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end; 
    align-content: flex-end;
    background: #2F999F;

}
header>p
{
    font-size: 1.9em;
}
.line
{
    border: 2px solid black;
    width: 100%;
}
.subjects p
{
    margin: 2%;
} 
a
{
    text-decoration: none; 
    color:black !important;
}
.subjects>a
{
    color:skyblue !important;
    float: right;
    margin-right: 1em;
}
</style>>
