<template>
  <div id="navigation" class="w-full flex justify-center items-end py-4">
    <nuxt-link class="menu-item uppercase md:px-10 sm:w-1/4 w-1/3 text-center font-menu text-myblue hover:text-teal-500 text-xl" to="/about">About</nuxt-link>
    <nuxt-link class="menu-item uppercase md:px-10 sm:w-1/4 w-1/3 text-center font-menu text-myblue hover:text-teal-500 text-xl" to="/work">Work</nuxt-link>
    <nuxt-link class="menu-item uppercase md:px-10 sm:w-1/4 w-1/3 text-center font-menu text-myblue hover:text-teal-500 text-xl" to="/experiments">Experiments</nuxt-link>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  mounted(){
    //  anime({
    //     targets:'#navigation',
    //     opacity: ['0', '1'],
    //     translateY: ['-50%', '0'],
    //     duration: 1000,
    //     delay: 200,
    //     easing: 'easeOutCubic'
    //   })
  }
}
</script>

<style>
</style>
