<template>
 <nuxt-link to="/"><div id="logo-txt" class="leading-none font-bold text-left lg:text-6xl md:text-4xl sm:text-3xl text-2xl w-8 transform -rotate-180 -translate-x-1/2 translate-y-0">pauloguerraf.com</div></nuxt-link>
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
  -webkit-text-stroke: 1px #2852DC22;
  -webkit-text-fill-color: #2852DC22;
  -webkit-transition: -webkit-text-fill-color .2s ease-out;
  writing-mode: vertical-lr;
  text-orientation: sideways;
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
