<template>
  <div class="h-screen">
    <div class="absolute h-full lg:p-20 p-6 z-10 w-full">
      <div class="glass-frosted flex h-full justify-between md:px-6 px-3 md:py-6 py-3 ">
        <div class="flex flex-col justify-end"><Logo/></div>
        <div class="flex flex-col justify-between">
          <div class="flex justify-end md:pb-6 md:px-4 sm:pb-5 pb-6 font-bold text-primary">
            <SwitchGlass/>
            </div>
          <div>
            <NavigationHome class="md:pb-6 md:px-4 sm:pb-5 pb-6"/>
            <Social class="flex flex-row justify-end md:px-4"/>
          </div>
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
.glass-transparent{
  background: rgba(255, 255, 255, 0.1);
  /*box-shadow: 10px 10px 10px 0 rgba(221, 255, 0, 0.1);*/
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.3);
  backdrop-filter: blur( 1px );
  -webkit-backdrop-filter: blur( 1px );
  border-radius: 3px;
}
.glass-frosted{
  background: rgba(255, 255, 255, 0.4);
  /*box-shadow: 10px 10px 10px 0 rgba(221, 255, 0, 0.1);*/
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.3);
  backdrop-filter: blur( 15px );
  -webkit-backdrop-filter: blur( 15px );
  border-radius: 3px;
}
</style>
