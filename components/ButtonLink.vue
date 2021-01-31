<template>
  <nuxt-link :to="url">
    <div class="text-white bg-transparent hover:bg-myyellow hover:border-myyellow hover:text-myblue py-4 font-bold text-md border-white border-2 px-6 rounded-full text-center stroke-current">
      {{text}}
    </div>
  </nuxt-link>
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
