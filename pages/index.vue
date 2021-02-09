<template>
  <div class="w-full bg-white">
    <section class="relative flex justify-center items-center z-0">
      <LazyVideoComponent
        id="video-1"
        source="videos/interactive.mp4"
        class="w-2/3 object-cover py-10"
      />
    </section>
    <section class="w-10/12 mx-auto py-10">
      <figure class="border-myblue border-t"></figure>
      <div class="text-white font-bold text-4xl py-10">PLAYING WITH TECH<br>SINCE THE '80s</div>
      <div class="py-10 relative w-full flex flex-wrap-reverse justify-between sm:justify-center items-stretch">
        <div class="sm:w-2/3 w-full flex flex-col h-full justify-center items-center md:pr-20">
          <p class="lg:text-4xl md:text-2xl text-2xl font-logo text-myblue">I
            <strong>help</strong> brands overcome the <strong>challenges</strong> of using new technologies, and enjoy the <strong>process</strong> of creating valuable <strong>interactive</strong> experiences together.
          </p>
          <p class="ml-auto py-10">
            <TextLink url="/about" :internal=true text="read more" class="font-bold hover:text-myyellow text-orange-500 text-3xl"/>
          </p>
          <div >

          </div>
        </div>
        <div class="md:w-1/3 w-9/12 flex flex-col justify-start self-start">
          <LazyVideoComponent
          id="video-1"
          source="videos/steerbywire.mp4"
          class="w-full transform -rotate-6 object-cover md:py-0 py-10"
        />
        </div>
      </div>
    </section>
    <section class="w-10/12 mx-auto">
      <figure class="border-myblue border-t"></figure>
      <div class="text-myblue font-bold text-4xl py-20">FEATURED<br>COLLABORATIONS</div>
      <div class="relative w-full flex flex-wrap-reverse justify-start h-full py-10 gap-8">
        <div class="w-1/4 shadow-md p-8">
          <img class="w-full py-8 mx-auto" src="/svgs/motomichi.svg">
          <p class="text-myblue">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste quasi, quisquam sunt aliquam nam sapiente laborum cumque totam recusandae facere ad impedit exercitationem a voluptatibus libero culpa facilis, veniam eum?</p>
        </div>
        <div class="w-1/4 shadow-md p-8">
          <img class="w-full py-8 mx-auto" src="/svgs/pnud.svg">
          <p class="text-myblue">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste quasi, quisquam sunt aliquam nam sapiente laborum cumque totam recusandae facere ad impedit exercitationem a voluptatibus libero culpa facilis, veniam eum?</p>
        </div>
        <div class="w-1/4 shadow-md p-8">
          <img class="w-full py-8 mx-auto" src="/svgs/telefonica.svg">
          <p class="text-myblue">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste quasi, quisquam sunt aliquam nam sapiente laborum cumque totam recusandae facere ad impedit exercitationem a voluptatibus libero culpa facilis, veniam eum?</p>
        </div>

      </div>
    </section>
    <div class="relative w-10/12 mx-auto z-50">
      <Footer/>
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
