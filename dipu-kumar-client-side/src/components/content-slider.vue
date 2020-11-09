<template>
  <div class="content-slider-container">
    <slot> Nothing here </slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.content-slider-container
{
    height:1000;
    /* overflow-y: hidden; */
}

.content-slider-container>.content{
    /* animation: slideUp 10s linear infinite; */
    
    margin-left:5px ;
    height: 40px;
    font-size: 1.2em;
    /* height:30%; */
}

.content-slider-container>.content:hover{
    animation-play-state: paused;
}


@keyframes slideUp
{
    from{
        transform: translateY(0);
    }
    to{
        transform: translateY(-800%);
    }
}

</style>