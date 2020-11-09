<template>
    <div class="lms-subject-container">
        <div class="lms-subject" @click="href($event,content.id)">
            <div class="lms-subject-contents">
                <span class="material-icons icons">{{icon[content.type]}}</span>
                <div class="lms-subject-data"><span>{{content.data}}</span></div>
                <div class="extra-content"><slot></slot></div>
            </div>
            <div class="line"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "subject-view",
        data()
        {
            return{
                icon:{assignment:"assignment",announcement:"announcement",resource:"work_outline"},
            }
        },
        methods:{
            href(e,url){
                this.$router.push({path:"content/"+url,append:true});
            }
        },
        props:{
            content:(Object),
        }
    }
</script>

<style scoped>
    .lms-subject-container
    {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin-left: 10%;
    }
    .lms-subject{
        cursor: pointer;
    }
    .lms-subject:hover .lms-subject-data>span{
        text-decoration: underline darkblue 1.5px;
        color: darkblue;
        outline: 0;
    }
    .lms-subject:hover {
        box-shadow: 0.3em 0.05em 0.7em grey;
    }
    .lms-subject-contents{
        font-size: 1.5em;
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        height: 70px;

    }
    .icons
    {
        font-size: 1.5em;
    }
    .lms-subject-data
    {
        flex-grow: 1;
        height: 50%;
        padding-top:15px;
        margin-left: 25px;
    }
    .line{
        height: 0px;
        border: 1px solid black;
        width: 100%;
    }
</style>