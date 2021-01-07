<template>
  <div id="navigation" class="flex flex-col justify-center items-end">
    <NuxtLink class="menu-item md:p-2 p-1 font-menu" to="/about">About</NuxtLink>
    <NuxtLink class="menu-item md:p-2 p-1 font-menu" to="/work">Work</NuxtLink>
    <NuxtLink class="menu-item md:p-2 p-1 font-menu" to="/experiments">Experiments</NuxtLink>
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
  transition: transform;
  transition-duration: 500ms;
  font-size: clamp(100%, 1rem + 2vw, 80vh) !important;
}
.menu-item::before {
  content: '';
  top: 55%;
  width: 2.5rem;
  height: 4px;
  background: #d2f700;
  position: absolute;
  right: calc(100% + 2rem);
  opacity: 0;
  pointer-events: none;
  transition: opacity 300ms;
}
.menu-item:hover{
  color: #d2f700;
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
#navigation{
  color: #0000ff;
}
</style>
