<template>
 <nuxt-link to="/"><div id="logo-pages" class="px-6 py-3 font-bold text-left">pauloguerraf.com</div></nuxt-link>
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
        targets:'#logo-pages',
        opacity: ['0', '1'],
        translate: ['-25%', '0'],
        duration: 1000,
        delay: 200,
        easing: 'easeOutCubic'
      })
    }
}
</script>
<style>
#logo-pages{
  -webkit-text-stroke:1px blue;
  -webkit-text-fill-color:blue;
  -webkit-transition: -webkit-text-fill-color .2s ease-out;
  writing-mode: vertical-lr;
  transform: rotate(180deg) translate(25%, 0) !important;
  text-orientation: sideways;
  text-orientation: sideways;
  font-size: clamp(6vh, 3vw, 20vh) !important;
  line-height: 1.0 !important;
}
@media (min-width: 768px) {
 #logo-pages{
   -webkit-text-stroke:1.5px blue;
 }
}

#logo-pages:hover{
  -webkit-text-fill-color:transparent;
}
</style>
