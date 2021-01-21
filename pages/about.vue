<template>
<div class="bg-background">
   <!--about-->
  <div id="about" class="fixed font-bold h-10 text-center w-full text-secondary">ABOUT</div>
   <!--logo-->
  <LogoPages class="fixed"/>
  <!--group-->
  <div class="md:text-4xl text-3xl lg:px-40 md:px-36 px-20">
    <!--nav-->
    <div class="flex justify-center py-2">
      <div class="z-10 ">
        <nuxt-link class="md:p-2 p-1 font-logo text-2xl text-primary hover:text-terciary font-bold" to="/work">About</nuxt-link>
        <nuxt-link class="md:p-2 p-1 font-logo text-2xl text-primary hover:text-terciary font-bold" to="/about">Work</nuxt-link>
        <nuxt-link class="md:p-2 p-1 font-logo text-2xl text-primary hover:text-terciary font-bold" to="/experiments">Experiments</nuxt-link>
      </div>
    </div>
    <!--intro-->
    <div id="intro" class="w-full py-12 lg:flex md:px-6 items-center z-10 border-t-2 border-primary">
       <div class="lg:w-2/6 w-full sm:order-2 flex justify-center lg:pl-10">
          <img class="rounded-full sm:w-3/4 lg:w-full lg:flex" src="profile.jpg"/>
      </div>
      <div class="lg:w-4/6 w-full md:py-16 py-8 z-10 text-primary">
      Hi, my name is Paulo. I am a <strong>creative technologist</strong> passionate about exploring <strong>cutting edge</strong> technology-enabled <strong>interactions</strong> and connecting people through <strong>meaningful</strong> and innovative <strong>experiences</strong>.
      </div>
    </div>

    <!--history-->
    <div id="history" class="grid md:grid-cols-3 grid-cols-1 text-primary">
      <div class="md:py-16 py-8 text-2xl md:px-8 px-4 border-b-2 md:border-b-0 z-10">
        <div>I have taught introductory and advanced Physical Computing and Interactive Media classes at <strong><a href="https://www.udla.edu.ec">Universidad de las Américas</a></strong> for almost 7 years. As a professor, I have led academic projects and contributed to the development of the creative programming and interactive media <strong>community</strong> in Ecuador.</div>
      </div>
      <div class="md:py-16 py-8 text-2xl md:px-8 px-4 border-b-2 md:border-b-0 md:border-l-2 md:border-r-2 z-10">
        <div>In 2018, I co-founded <strong><a href="https://nidointeractive.com">NIDO Interactive</a></strong>, a company focused on providing quality digital services to clients in Ecuador, Brazil and USA. Since its beginning, NIDO has built websites and developed mobile, AR and VR experiencies, for more than 50 clients. I have been <strong>responsible</strong> for selecting the technologies for and supervising the development of such projects.</div>
      </div>
      <div class="md:py-16 py-8 text-2xl md:px-8 px-4 z-10">
        <div>NuxtJS, WordPress, ThreeJS, Processing, Unity, Unreal Engine, openFrameworks, Arduino, Raspberry Pi, Resolume Arena, are some of the <strong>tools</strong> I've had the opportunity to become familiar with and use on client projects. Find out more about some of my projects on the <strong><nuxt-link to="/work">work</nuxt-link></strong> section.</div>
      </div>
    </div>

     <!--social-->
     <div class="flex md:py-20 py-10 justify-between w-full flex-col sm:flex-row items-center">
      <div class="flex text-primary font-bold text-xl"><a href="/docs/paulo_guerra_f_cv2021.pdf">DOWNLOAD RESUME</a></div>
      <Social class="flex sm:py-0 py-10"/>
     </div>
  </div>
</div>
</template>

<script>
import Social from '~/components/Social.vue'
  export default {
  components: { Social },

  }
</script>

<style lang="scss" scoped>

#history{
    border-bottom: 2px solid #0000ff;
}
#about{
  opacity:0.2;
  z-index:0;
  font-size: 25vw !important;
 }
#history div{
  border-color: #0000ff;
}
#intro img{
  transition: all 0.3s;
  filter: grayscale(1);
}
#intro img:hover{
  filter: grayscale(0.4);
}
</style>
