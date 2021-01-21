<template>
  <div class="h-screen">
    <div class="absolute h-full lg:p-20 p-4 z-10 w-full">
      <div :id="modeId" class="flex h-full w-full md:justify-end">
        <div class="overflow-hidden flex flex-col justify-center md:bg-background items-end md:px-10 px-10">
          <Logo/>
        </div>
        <div class="flex flex-col justify-between md:w-auto w-full md:bg-background px-8 md:py-6 py-3">
          <div class="flex justify-end md:pb-6 sm:pb-5 pb-6 font-bold text-primary">
            <SwitchGlass @changeGlassState="smartGlass=!smartGlass"/>
            </div>
          <div class="flex flex-col items-end">
            <NavigationHome class="lg:pb-8 md:pb-6 sm:pb-4 pb-2"/>
            <div class="border-t-4 border-secondary lg:pb-8 md:pb-6 sm:pb-4 pb-2 w-1/4 md:w-full"></div>
            <Social class="flex flex-row md:justify-center justify-end md:px-4"/>
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
   data(){
     return{
       smartGlass: true,
     }
   },
   mounted(){
     anime({
        targets:'#left',
        opacity: ['0', '1'],
        duration: 1000,
        easing: 'easeOutCubic'
      })
  },
  computed: {
    modeId(){
      return this.smartGlass ? 'glass-frosted' : 'glass-transparent';
    }
  }
}
</script>

<style>
#glass-transparent{
  background: rgba(255, 255, 255, 0.05);
  /*box-shadow: 10px 10px 10px 0 rgba(221, 255, 0, 0.1);*/
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur( 2px );
  -webkit-backdrop-filter: blur( 2px );
  border-radius: 3px;
  mix-blend-mode: difference;
  transition: all 0.5s;

}
#glass-frosted{
  background:#F4E1D266;
  /*box-shadow: 10px 10px 10px 0 rgba(221, 255, 0, 0.1);*/
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.3);
  backdrop-filter: blur( 15px );
  -webkit-backdrop-filter: blur( 15px );
  border-radius: 3px;
  transition: all 0.5s;
}
</style>
