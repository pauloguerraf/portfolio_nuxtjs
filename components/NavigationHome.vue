<template>
  <div class="flex flex-col items-end relative z-50">
    <button class="block md:hidden w-8 h-8 text-myblue p-1" v-on:click="toggleNavbar()">
      <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div id="navigation" :class="{'hidden': !menuShow, 'flex': menuShow}" class="w-full flex-col md:flex-row md:flex md:flex-grow md:justify-center md:items-end items-center py-4">
      <MenuItem text="About" url="/about"/>
      <MenuItem text="Work" url="/work"/>
      <MenuItem text="Experiments" url="/experiments"/>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  data() {
    return {
      menuShow: false
    }
  },
  methods: {
    toggleNavbar(){
      console.log("hola")
      this.menuShow = !this.menuShow;
    }
  },
  mounted(){
  }
}
</script>

<style>
</style>
