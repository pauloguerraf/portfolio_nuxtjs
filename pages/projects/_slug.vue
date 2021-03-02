<template>
  <div class="w-full min-h-screen bg-white">
    <!--background-->
    <div id="title" class="mx-auto fixed font-bold text-center w-full h-screen text-myblue text-opacity-25">{{ article.title }}</div>

    <!--info-->
    <div class="md:text-4xl text-3xl lg:px-40 md:px-36 px-20 text-myblue">
      <div class="w-full h-full">
        <div class="mt-16 -mb-3 flex uppercase text-sm">
          <span class="mr-3">•</span>
          <p>{{ article.description }}</p>
        </div>
        <div class="text-6xl font-bold">{{ article.title }}</div>
      </div>
      <div class="pt-6 text-xl">
       <!-- <nuxt-content :document="article" /> -->
       <p class="font-bold uppercase">This page is still under construcion. More about this project soon.</p>
      </div>
    </div>
  </div>





</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return {
      article,
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
.nuxt-content p {
  margin-bottom: 20px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 20px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
</style>
