<template>
  <div class="border-2 rounded-full text-center stroke-current">
    <nuxt-link :to="url">
      <div class="px-6 py-4">
        {{text}}
      </div>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    props: {
      url: {
        type: String,
        default: '/'
      },
      text: {
        type: String,
        default: 'button text'
      }
    }
  }
</script>

<style>

</style>
