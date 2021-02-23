<template>
    <div v-if="live">
      <Logo class="fixed top-0 left-0 z-50"/>
      <NavigationHome class="relative z-40"/>
      <figure class="border-t border-myblue w-10/12 mx-auto"></figure>
      <Nuxt />
    </div>
    <div v-else class="w-screen flex justify-center">
      <Logo :rotation="0"/>
    </div>
</template>
<script>
export default {
  props: {
      live:{
        type: Boolean,
        default: false,
      }
   }
}
</script>
<style>
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body{
  background-color: white;
  margin: 0;
  padding: 0;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.quote{
  overflow: hidden;
}
.split-parent{
  overflow: hidden;
}
</style>
