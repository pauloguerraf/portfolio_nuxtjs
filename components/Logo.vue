<template>
 <nuxt-link to="/" class="logo-link focus:outline-none">
 <div id="logo-0" v-if="rotation==0" class="focus:outline-none leading-none font-bold text-center lg:text-5xl md:text-4xl text-3xl">pauloguerraf.dev</div>
 <div id="logo-txt" v-else class="focus:outline-none leading-none font-bold text-left lg:text-5xl md:text-4xl text-3xl transform -rotate-180 translate-x-1/4 translate-y-0 py-4 px-1">pauloguerraf.dev</div>
 </nuxt-link>
</template>
<script>
export default {
   props: {
      rotation:{
        type: Number,
        default: -90,
      }
   }
}
</script>
<style>
.logo-link{
  /*mix-blend-mode: difference;*/
}
#logo-0{
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px #1f00b7;
  -webkit-transition: -webkit-text-fill-color .2s ease-out;
}
#logo-txt{
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px #1f00b7;
  -webkit-transition: -webkit-text-fill-color .2s ease-out;
  transition: all .3s ease-out;
  writing-mode: vertical-lr;
  text-orientation: sideways;
}
#logo-txt:hover, #logo-0:hover{
  -webkit-text-fill-color: #1f00b7;
  -webkit-text-stroke: 1px #1f00b7;
}
@media (min-width: 768px) {
  #logo-txt:hover, #logo-0:hover{
  -webkit-text-fill-color: #1f00b7;
  -webkit-text-stroke: 1px #1f00b7;
}
  #logo-txt, #logo-0{
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px #1f00b7;
    transition: all .3s ease-out;
  }
}
</style>
