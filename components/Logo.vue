<template>
 <nuxt-link to="/"><div id="logo-txt" class="leading-none font-bold text-left lg:text-7xl md:text-5xl sm:text-4xl text-3xl transform -rotate-180 translate-x-1/4 translate-y-0 py-4">pauloguerraf.com</div></nuxt-link>
</template>
<script>
export default {
  data(){
    return{

    }
  }
}
</script>
<style>
#logo-txt{
  -webkit-text-fill-color: #CCCCCC55;
  -webkit-transition: -webkit-text-fill-color .2s ease-out;
  transition: fill-color .2s ease-out;
  writing-mode: vertical-lr;
  text-orientation: sideways;
}
#logo-txt:hover{
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px #FFFFFF;
}
@media (min-width: 768px) {
  #logo-txt:hover{
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 2px #FFFFFF;
  }
}
</style>
