<template>
  <div class="w-screen h-screen bg-white dark:bg-black py-6 flex flex-col justify-left sm:py-12">
    <button class="text-black dark:text-white" @click="toggle">Change Theme</button>
  </div>
</template>

<script>
  export default {
    methods: {
        toggle() {
          this.$colorMode.preference =
            this.$colorMode.value == "light" ? "dark" : "light";
        }
      }
  }
</script>

<style lang="scss" scoped>

</style>
