<template>
  <article class="px-10 py-8">
    <div class="text-4xl font-bold">{{ experiment.title }}</div>
    <p class="my-2 py-2 text-2xl">{{ experiment.description }}</p>
    <img class="border-solid rounded-lg w-full" :src="'/projects_images/'+experiment.img" :alt="experiment.alt" />
  </article>
</template>
<script>
  export default {
    async asyncData({ $content, params }) {
      const experiment = await $content('experiments', params.slug).fetch()

      return { experiment }
    },
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
      }
    }
  }
</script>
<style>
</style>
