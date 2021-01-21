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
        translate: ['50%', '0'],
        duration: 1000,
        delay: 200,
        easing: 'easeOutCubic'
      })
    }
}
</script>
<style>
#logo-txt{
  -webkit-text-stroke: 1px  #2852DC;
  -webkit-text-fill-color: #2852DC;
  -webkit-transition: -webkit-text-fill-color .2s ease-out;
  writing-mode: vertical-lr;
  transform: rotate(180deg) !important;
  text-orientation: sideways;
  text-orientation: sideways;
  font-size: clamp(8vh, 4vw, 80vh) !important;
  line-height: 1.0 !important;
}
@media (min-width: 768px) {
 #logo-txt{
   -webkit-text-stroke:1px #F4E1D2;
 }
}

#logo-txt:hover{
  -webkit-text-fill-color: #F4E1D2;
  -webkit-text-stroke: 1px #00CEA7;
}
</style>
