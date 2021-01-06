<template>
  <div id="navigation" class="flex flex-col justify-center items-end text-gray-400">
    <NuxtLink class="menu-item px-2 py-2 font-menu text-5xl" to="/about">About</NuxtLink>
    <NuxtLink class="menu-item px-2 py-2 font-menu text-5xl" to="/work">Work</NuxtLink>
    <NuxtLink class="menu-item px-2 py-2 font-menu text-5xl" to="/experiments">Experiments</NuxtLink>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  mounted(){
     anime({
        targets:'#navigation',
        opacity: ['0', '1'],
        translateY: ['50%', '0'],
        duration: 1000,
        delay: 200,
        easing: 'easeOutCubic'
      })
  }
}
</script>

<style>
.menu-item{
  transition-duration: 500ms;
}
.menu-item::before {
  content: '';
  top: 55%;
  width: 3.5rem;
  height: 4px;
  background: #d8ff00;
  position: absolute;
  right: calc(100% + 2rem);
  opacity: 0;
  pointer-events: none;
  transition: opacity 300ms;
}
.menu-item:hover{
  color: #d8ff00;
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
