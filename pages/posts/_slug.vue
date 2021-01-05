<template>
  <article class="px-10 py-8">
    <div class="text-4xl font-bold">{{ post.title }}</div>
    <p class="my-2 py-2 text-2xl">{{ post.description }}</p>
    <img class="border-solid rounded-lg w-full" :src="'/projects_images/'+post.img" :alt="post.alt" />
  </article>
</template>
<script>
  export default {
    async asyncData({ $content, params }) {
      const post = await $content('posts', params.slug).fetch()

      return { post }
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
