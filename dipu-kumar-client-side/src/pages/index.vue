<template>
    <v-container>
        <div class="intro">
            <p>welcome to your own Learning Management System</p>
        </div>
        <div class="btn-container">
            <div class="create-class">
                <button @click="createClass=!createClass ;joinClass=false">create class</button>
            </div>
            <div class="join-class">
                <button @click="createClass=false ;joinClass=!joinClass">join class</button>
            </div>
        </div>
        <div class="create-class-form" v-show="createClass">
            <form @submit.prevent="">
                <input type="text" name="class-name" class="stroke" placeholder="Class name">
                <input type="submit" value="Create" class="success submit">
            </form>
        </div>        
        <div class="join-class-form" v-show="joinClass">
            <form @submit.prevent="">
                <input type="text" name="join-name" class="stroke" placeholder="Join name">
                <input type="submit" value="Join" class="success submit">
            </form>
        </div>
        <h2>Schools:</h2>
        <div class="school-container">
            <div v-for="(school,key) in getSchools" :key="key">
                <packed :header="school.name" :url="'/school/'+school.code">
                    <div v-for="(department,key) in school.departments " :key="key" class="content">
                        <router-link :to="'/school/'+school.code+'/dept/'+department.code">{{department.name}}</router-link>
                    </div>
                </packed>
            </div>
        </div>
    </v-container>
</template>
<script>
    import  packed from "@/components/container"
export default {
    data()
    {
        return{
            createClass:false,
            joinClass:false,
            getSchools:this.$store.getters.getSchool,
        }
    },
    components:
    {
        packed,
    },
}
</script>

<style scoped>
.intro > p
{
    width: 70%;
    font-size:5em ;
}
.btn-container
{
    display: flex;
    flex-direction: row;
    margin-bottom: 5%;
}
.btn-container > div > button
{
    border-radius: 20px;
    width: 250px;
    background: black;
    color: white;
    height: 3em;
    margin-right:50px ;
    font-size: 1.2em;
    text-transform: capitalize;
}
.stroke
{
    border: 2px solid black;
    line-height: 2em;
}
.submit
{
    height: 2.5em;
    margin-left: 10px;
    width: 5em;
    border-radius: 10px;
}
.school-container{
    box-shadow: 1em 0.2em 2em grey;
    display: flex;

}
.school-container>div{
    margin:20px;
}
</style>