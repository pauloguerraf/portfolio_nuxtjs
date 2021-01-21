<template>
  <div id="navigation" class="flex flex-col justify-center items-end ">
    <nuxt-link class="menu-item md:p-2 p-1 font-menu text-primary hover:text-secondary" to="/about">About</nuxt-link>
    <nuxt-link class="menu-item md:p-2 p-1 font-menu text-primary hover:text-secondary" to="/work">Work</nuxt-link>
    <nuxt-link class="menu-item md:p-2 p-1 font-menu text-primary hover:text-secondary" to="/experiments">Experiments</nuxt-link>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  mounted(){
     anime({
        targets:'#navigation',
        opacity: ['0', '1'],
        translateY: ['-50%', '0'],
        duration: 1000,
        delay: 200,
        easing: 'easeOutCubic'
      })
  }
}
</script>

<style>
.menu-item{
  transition: transform;
  transition-duration: 500ms;
  font-size: clamp(100%, 1rem + 1.85vh, 75vh) !important;
}
.menu-item::before {
  content: '';
  top: 55%;
  width: 2rem;
  height: 4px;
  background: #FAB152;
  position: absolute;
  right: calc(100% + 0.5rem);
  opacity: 0;
  pointer-events: none;
}
.menu-item:hover{
  font-style: italic;
  transform: translateX(1.5rem);
}
.menu-item:hover::before{
  opacity: 1;
}
.menu-item:hover::after {
  content: '';
  position: absolute;
  top: 0;
  left: -5.5rem;
  right: 0;
  height: 100%;
}

</style>
