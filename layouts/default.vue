<template>
    <div v-if="live">
      <Logo class="fixed top-0 left-0 z-50"/>
      <NavigationHome class="relative z-40"/>
      <figure class="border-t border-myblue w-10/12 mx-auto"></figure>
      <Nuxt />
      <div class="h-full"></div>
      <div class="relative w-10/12 mx-auto z-50">
        <Footer/>
      </div>
    </div>
    <div v-else class="flex w-screen h-screen justify-center items-center">
      <Logo id="intro-logo" :rotation="0"/>
    </div>
</template>
<script>
import anime from 'animejs'

export default {

  props: {
      live:{
        type: Boolean,
        default: true,
      }
   },
   mounted(){
     anime({
        targets:'#intro-logo',
        opacity: [{value:['0', '1'], duration: 500}],
        translateY: [{value:[100, 0], duration: 750}],
        rotate: [{value:[90, 0], duration: 750, delay: 750}],
        easing: 'easeInCubic',
        delay: 1000
      })
  },
}
</script>
<style>
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body{
  background-color: white;
  margin: 0;
  padding: 0;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.quote{
  overflow: hidden;
}
.split-parent{
  overflow: hidden;
}
</style>
