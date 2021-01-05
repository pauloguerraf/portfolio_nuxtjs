<template>
  <div class="flex flex-col justify-center items-end text-white text-bold">
    <NuxtLink class="menu-item px-2 py-2 font-menu text-5xl" to="/about">About</NuxtLink>
    <NuxtLink class="menu-item px-2 py-2 font-menu text-5xl" to="/work">Work</NuxtLink>
    <NuxtLink class="menu-item px-2 py-2 font-menu text-5xl" to="/blog">Blog</NuxtLink>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.menu-item{
  transition-duration: 200ms;
}
.menu-item::before {
  content: '';
  top: 55%;
  width: 3.5rem;
  height: 1px;
  background: #fff;
  position: absolute;
  right: calc(100% + 2rem);
  opacity: 0;
  pointer-events: none;
}
.menu-item:hover{
  color: #fff;
  font-style: italic;
  font-weight: bold;
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
