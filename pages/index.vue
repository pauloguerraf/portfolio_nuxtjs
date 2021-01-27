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
      <div class="relative w-full flex flex-wrap-reverse justify-around sm:justify-center items-center h-full">
        <div class="sm:w-2/3 w-full flex flex-col h-full justify-center  md:pr-48 items-center">
          <p class="lg:text-4xl md:text-2xl text-2xl font-logo text-white">
            since the late <span class="font-bold text-myyellow">'90s</span>, I have been <strong>helping</strong> brands create beautiful & valuable interactive experiences, overcome the <strong>challenges</strong> of using new technologies, and have fun in the <strong>process.</strong>
          </p>
          <div class="ml-auto py-10">
            <ButtonLink url="/about"/>
          </div>
        </div>
        <VideoComponent
        id="video-1"
        source="videos/steerbywire.mp4"
        class="sm:w-1/2 w-10/12 md:w-1/3 transform -rotate-6 object-cover md:pr-20 md:py-0 py-20"
      ></VideoComponent>
      </div>
    </section>
    <section class="w-10/12 mx-auto">
      <figure class="border-primary border-t bg-black "></figure>
      <div class="text-white font-extrabold text-3xl py-20">FEATURED<br>COLLABORATIONS</div>
      <div class="relative w-full flex flex-wrap-reverse justify-around sm:justify-center items-center h-full">
      </div>
    </section>
    <div class="relative w-10/12 mx-auto z-50">
      <figure class="border-primary border-t bg-black "></figure>
      <div class="flex md:py-20 py-10 justify-between w-full flex-col sm:flex-row items-center">
        <div class="flex text-white font-bold text-xl no-underline hover:text-myred hover:underline"><a class="" href="/docs/paulo_guerra_f_cv2021.pdf">DOWNLOAD RESUME</a></div>
        <Social class="flex sm:py-0 py-10"/>
      </div>
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
section{
    min-height: 60vh;
}
@media (min-width: 768px) {
  section{
    min-height: 60vh;
    height: calc(100vh - 20vh);
  }
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
