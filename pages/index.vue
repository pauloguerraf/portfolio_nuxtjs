<template>
  <div class="w-full bg-background">
    <Logo class="fixed top-0 left-0 z-50"/>
    <NavigationHome class="relative z-50"/>
    <figure class="border-primary border-t bg-white w-10/12 mx-auto"></figure>
    <section class="relative flex justify-center items-center z-0">
      <VideoComponent
        id="video-1"
        source="videos/interactive.mp4"
        class="w-2/3 object-cover py-10"
      ></VideoComponent>
    </section>
    <section class="w-10/12 mx-auto py-10">
      <figure class="border-primary border-t bg-black "></figure>
      <div class="text-white font-bold text-4xl py-10">PLAYING WITH TECH<br>SINCE THE '80s</div>
      <div class="py-10 relative w-full flex flex-wrap-reverse justify-between sm:justify-center items-stretch">
        <div class="sm:w-2/3 w-full flex flex-col h-full justify-center items-center md:pr-20">
          <p class="lg:text-4xl md:text-2xl text-2xl font-logo text-white">I
            <strong>help</strong> brands overcome <strong>challenges</strong> of using new technologies, and enjoythe <strong>process</strong> of creating valuable <strong>interactive</strong> experiences together.
          </p>
          <div class="ml-auto py-10">
            <ButtonLink url="/about"/>
          </div>
        </div>
        <div class="md:w-1/3 w-9/12 flex flex-col justify-start self-start">
          <VideoComponent
          id="video-1"
          source="videos/steerbywire.mp4"
          class="w-full transform -rotate-6 object-cover md:py-0 py-10"
        ></VideoComponent>
        </div>
      </div>
    </section>
    <section class="w-10/12 mx-auto">
      <figure class="border-primary border-t bg-black "></figure>
      <div class="text-white font-bold text-4xl py-20">FEATURED<br>COLLABORATIONS</div>
      <div class="relative w-full flex flex-wrap-reverse justify-around sm:justify-center items-center h-full">
      </div>
    </section>
    <div class="relative w-10/12 mx-auto z-50">
      <figure class="border-primary border-t bg-white"></figure>
      <div class="flex md:py-20 py-10 justify-between w-full flex-col sm:flex-row items-center">
        <div class="flex text-white font-bold text-xl no-underline hover:text-myorange hover:underline"><a class="" href="/docs/paulo_guerra_f_cv2021.pdf">DOWNLOAD RESUME</a></div>
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
