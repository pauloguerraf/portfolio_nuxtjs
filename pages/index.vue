<template>
  <div class="h-screen">
    <div  class="absolute h-full p-6 z-10 lg:w-3/6 xl:w-2/5 w-full">
      <div id="left" class="flex h-full justify-between pr-10 py-5">
        <div class="flex flex-col justify-end"><Logo/></div>
        <div class="flex flex-col justify-end">
          <Navigation class="pb-20"/>
          <Social class="flex flex-row justify-end"/>
        </div>
      </div>
    </div>
    <div class="">
      <VideoComponent
        id="video-1"
        source="videos/interactive.mp4"
        class="aboslute h-screen object-cover"
      ></VideoComponent>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
   mounted(){
     anime({
        targets:'#left',
        opacity: ['0', '1'],
        duration: 1000,
        easing: 'easeOutCubic'
      })
  }

}
</script>

<style>
#left{
  background: rgba( 0, 0, 255, 0.45 );
  box-shadow: 10px 10px 10px 0 rgba(221, 255, 0, 0.1);
  backdrop-filter: blur( 20px );
  -webkit-backdrop-filter: blur( 20px );
  border-radius: 10px;
}

</style>
