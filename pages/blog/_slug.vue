<template>
  <div class="w-full min-h-screen bg-white">
    <!--background-->
    <div id="title" class="mx-auto fixed font-bold text-center w-full h-screen text-myblue text-opacity-25">{{ article.title }}</div>

    <!--info-->
    <div class="md:text-4xl text-3xl lg:px-40 md:px-36 px-20 text-myblue">
      <div class="w-full h-full">
        <div class="mt-16 -mb-3 flex uppercase text-sm">
          <p class="mr-3">
            {{ formatDate(article.updatedAt) }}
          </p>
          <span class="mr-3">•</span>
          <p>{{ article.description }}</p>
        </div>
        <div class="text-6xl font-bold">{{ article.title }}</div>
      </div>

      <!--text-->
      <div id="intro" class="w-full py-8 lg:flex items-center z-10">
        <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa eum optio incidunt sunt molestias consequatur iusto minima velit quasi quae libero beatae, possimus veritatis animi pariatur vel maiores eligendi.
        </div>
      </div>
      <!--social-->
      <Footer/>
    </div>
  </div>





</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: article.tags } })
      .fetch()
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      tags,
      prev,
      next
    }
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
#title{
  opacity: 0.2;
  z-index: 0;
  top: 20%;
  left: 0%;
  transform-origin: 50% 50%;
  font-size: 15vw !important;
}
</style>
