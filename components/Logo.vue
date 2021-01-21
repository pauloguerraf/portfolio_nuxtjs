<template>
 <nuxt-link to="/"><div id="logo-txt" class="font-bold text-left">pauloguerraf.com</div></nuxt-link>
</template>
<script>
import anime from 'animejs'

export default {
  data(){
    return{

    }
  },
  mounted(){
    anime({
        targets:'#logo-txt',
        opacity: ['0', '1'],
        translate: ['50%', '0%'],
        duration: 1000,
        delay: 200,
        easing: 'easeOutCubic'
      })
    }
}
</script>
<style>
#logo-txt{
  -webkit-text-stroke: 1px #2852DC22;
  -webkit-text-fill-color: #2852DC22;
  -webkit-transition: -webkit-text-fill-color .2s ease-out;
  writing-mode: vertical-lr;
  transform: rotate(180deg) !important;
  text-orientation: sideways;
  text-orientation: sideways;
  font-size: clamp(9vh, 5vw, 90vh) !important;
  line-height: 0.5 !important;
}
@media (min-width: 768px) {
 #logo-txt{
   -webkit-text-stroke:1px #F4E1D2;
 }
}

#logo-txt:hover{
  -webkit-text-fill-color: #F4E1D2;
  -webkit-text-stroke: 2px #00CEA7;
}
</style>
