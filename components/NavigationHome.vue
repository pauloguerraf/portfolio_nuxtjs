<template>
  <div id="navigation" class="lg:text-4xl text-2xl flex justify-center items-end py-4">
    <nuxt-link class="menu-item px-10 w-1/4 text-center font-menu text-white hover:text-myyellow hover:font-bold" to="/about">About</nuxt-link>
    <nuxt-link class="menu-item px-10 w-1/4 text-center font-menu text-white hover:text-myyellow hover:font-bold" to="/work">Work</nuxt-link>
    <nuxt-link class="menu-item px-10 w-1/4 text-center font-menu text-white hover:text-myyellow hover:font-bold" to="/experiments">Experiments</nuxt-link>
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
