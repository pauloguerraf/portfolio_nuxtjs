<template>
  <div class="w-full bg-white z-10">
    <section class="relative flex justify-center items-center z-0">
      <LazyVideoComponent
        id="video-1"
        source="videos/interactive.mp4"
        class="md:w-2/3 object-cover my-10 border-gray border shadow-md"
      />
    </section>
    <section class="w-10/12 mx-auto py-10">
      <figure class="border-myblue border-t"></figure>
      <div class="md:px-36 px-10">
        <!-- <div class="text-myblue font-bold text-3xl pt-10">HAVING FUN WITH TECHNOLOGY<br>SINCE THE '80s</div> -->
        <div class="pb-10 pt-20 relative w-full flex flex-wrap-reverse justify-between items-stretch">
          <div class="md:w-1/2 w-full flex flex-col h-full justify-center items-center">
            <p class="md:text-2xl text-xl font-logo text-myblue">I
              <strong>help</strong> people and organizations overcome the <strong>challenges</strong> of using new technologies and enjoy the <strong>process</strong> of creating <strong>valuable </strong> interactive <strong>experiences</strong> with them.
            </p>
            <p class="ml-auto py-10">
              <TextLink url="/about" :internal=true text="read more about my experience" class="font-bold hover:text-myyellow text-orange-500 text-2xl"/>
            </p>
            <div >

            </div>
          </div>
          <div class="md:w-1/2 w-full flex flex-col">
            <LazyVideoComponent
            id="video-1"
            source="videos/steerbywire.mp4"
            class="mx-auto md:w-3/4 transform -rotate-6 object-cover mb-10 border-gray border shadow-md"
          />
          </div>
        </div>
      </div>
    </section>
    <section class="w-10/12 mx-auto">
      <figure class="border-myblue border-t"></figure>
      <div class="text-myblue font-bold text-3xl pt-10 md:px-36 px-10">FEATURED<br>COLLABORATIONS</div>
      <div class="w-full flex flex-wrap h-full">
        <div class="lg:w-1/4 sm:w-1/2 w-full p-8">
          <a href="https://www.motomichi.com/"><img class="w-full py-8 mx-auto" src="/svgs/motomichi.svg"></a>
          <p class="text-myblue"></p>
        </div>
        <div class="lg:w-1/4 sm:w-1/2 w-full p-8">
          <a href="https://www.telefonica.com.ec"><img class="w-full py-8 mx-auto" src="/svgs/telefonica.svg"></a>
          <p class="text-myblue"></p>
        </div>
        <div class="lg:w-1/4 sm:w-1/2 w-full p-8">
          <a href="https://www.ec.undp.org/"><img class="w-full py-8 mx-auto" src="/svgs/pnud.svg"></a>
          <p class="text-myblue"></p>
        </div>
        <div class="lg:w-1/4 sm:w-1/2 w-full p-8">
          <a href="https://www.presidencia.gob.ec"><img class="w-full py-8 mx-auto" src="/svgs/presidencia.svg"></a>
          <p class="text-myblue"></p>
        </div>
      </div>
    </section>
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
