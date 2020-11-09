<template>
<v-card>
    <router-link :to="(url)?url:'#'">
        <header>
            {{header}}
            <!-- <p class="elms-header">{{header}}</p> -->
        </header>
        <div class="line"></div>
        <div class="content-slider-container">
            <ContentSlider>
                <slot></slot>
            </ContentSlider>
        </div>
    </router-link>
</v-card>
</template>


<script>
import ContentSlider from "@/components/content-slider"
export default {
    props:{
        header:String,
        url:String,
    },
    components:
    {
        ContentSlider,
    }

}
</script>

<style scoped>
.v-card
{
    border-radius: 1em !important;
    width: 400px !important;

}
.content-slider-container
{
    min-height: 300px !important;
}
.line
{
    border: 2px solid black;
    width: 100%;
}
header
{
    margin: 10px;
    font-size: 1.3em;
}
</style>>
