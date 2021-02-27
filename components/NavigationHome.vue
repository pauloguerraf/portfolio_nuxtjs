<template>
  <div id="navigation" class="w-full flex justify-center items-end py-4">
    <MenuItem text="About" url="/about"/>
    <MenuItem text="Work" url="/work"/>
    <MenuItem text="Experiments" url="/experiments"/>

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
