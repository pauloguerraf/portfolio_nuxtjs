<template>
<div>
  <div id="about" class="fixed font-bold h-10">
  ABOUT</div>
  <LogoPages class="fixed top-0 transform scale-50"/>
  <div class="md:text-4xl text-3xl lg:px-40 md:px-36 px-20">
    <div class="flex justify-center py-2 text-xl">
      <div>
        <nuxt-link class="md:p-2 p-1 font-menu" to="/about">About</nuxt-link>
        <nuxt-link class="md:p-2 p-1 font-menu" to="/work">Work</nuxt-link>
        <nuxt-link class="md:p-2 p-1 font-menu" to="/experiments">Experiments</nuxt-link>
      </div>
    </div>

    <div id="intro" class="w-full py-12 lg:flex md:px-6 items-center">
       <div class="lg:2/6 w-full lg:p-10 sm:order-2 flex justify-center">
          <img class="rounded-full w-3/4 lg:flex" src="profile.jpg"/>
      </div>
      <div class="lg:w-4/6 w-full md:py-16 py-8">
      Hello, my name is Paulo. I am a <strong>creative technologist</strong> passionate about exploring <strong>cutting edge</strong> technology-enabled <strong>interactions</strong> and connecting people through <strong>meaningful</strong> and innovative <strong>experiences</strong>.
      </div>

    </div>
    <div id="history" class="grid md:grid-cols-3 grid-cols-1">
      <div class="md:py-16 py-8 text-2xl md:px-8 px-4 border-b-2 md:border-b-0">
        <div>I have been teaching introductory and advanced Physical Computing and Interactive Media classes at <strong><a href="https://www.udla.edu.ec">Universidad de las Américas</a></strong> for almost 7 years. As a professor, I have led academic projects and contributed to the growth of the creative programming and interactive media development community in Ecuador.</div>
      </div>
      <div class="md:py-16 py-8 text-2xl md:px-8 px-4 border-b-2 md:border-b-0 md:border-l-2 md:border-r-2">
        <div>In 2018, I co-founded <strong><a href="https://nidointeractive.com">NIDO Interactive</a></strong>, a company focused on providing quality digital services to clients in Ecuador, Brazil and USA. Since its beginning, NIDO has built websites and developed mobile, AR and VR experiencies for more than 50 clients. I was lucky enough to supervise technology selection and development for most of NIDO's projects.</div>
      </div>
      <div>
        <div class="md:py-16 py-8 text-2xl md:px-8 px-4"><div>NuxtJS, WordPress, ThreeJS, Processing, Unity, Unreal Engine, openFrameworks, Arduino, Raspberry Pi, are some of the <strong>tools</strong> I've had the opportunity to become familiar with and use on client projects. Find out more about some of my projects on the <strong><nuxt-link to="/work">work</nuxt-link></strong> section.</div></div>
      </div>
    </div>
    <Social class="flex md:py-20 py-10 md:justify-end justify-center"/>
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
#intro, #history{
  color: blue;
  border-top: 2px solid #0000ff;
}
#history{
    border-bottom: 2px solid #0000ff;
}
#about{
  color:  #d2f700;
  opacity:0.15;
  font-size:8rem;
  z-index:-1;
}
@media (min-width: 768px) {
#about{
  color:  #d2f700;
  opacity:0.15;
  font-size:20rem;
  z-index:-1;
}
}
#history div{
  border-color: #0000ff;
}
</style>
