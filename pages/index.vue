<template>
  <div class="w-full bg-background">
    <Logo class="fixed top-0 left-0 z-50"/>
    <NavigationHome class="relative z-50"/>
    <section class="relative flex justify-center items-center z-0">
      <VideoComponent
        id="video-1"
        source="videos/interactive.mp4"
        class="w-2/3 object-cover"
      ></VideoComponent>
    </section>
    <section class="w-10/12 mx-auto">
      <figure class="border-primary border-t bg-black "></figure>
      <div class="relative flex justify-center items-center h-full">
        <div class="w-1/2 flex flex-col">
          <p class="text-6xl  p-12 font-logo text-white">
            building tech projects and having fun in the process since the late <span class="font-bold text-myyellow">80's.</span>
          </p>
          <button>read more about me</button>
        </div>
        <VideoComponent
        id="video-1"
        source="videos/steerbywire.mp4"
        class="w-1/3 transform -rotate-6 object-cover"
      ></VideoComponent>
      </div>
    </section>
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
section{
  height: calc(100vh - 20vh);
}
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
