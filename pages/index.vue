<template>
  <div class="h-screen">
    <div  class="absolute h-full p-6 z-10 lg:w-3/6 xl:w-2/5 w-full">
      <div id="left" class="flex h-full justify-between md:px-6 px-3 md:py-5 py-2 ">
        <div class="flex flex-col justify-end"><Logo/></div>
        <div class="flex flex-col justify-end">
          <Navigation class="md:pb-20 md:px-4 sm:pb-10 pb-6"/>
          <Social class="flex flex-row justify-end md:px-4"/>
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
  background: rgba(138, 138, 138, 0.612);
  /*box-shadow: 10px 10px 10px 0 rgba(221, 255, 0, 0.1);*/
  box-shadow: 10px 10px 10px 0 rgba(255, 255, 255, 0.1);
  backdrop-filter: blur( 15px );
  -webkit-backdrop-filter: blur( 15px );
  border-radius: 10px;
}

</style>
