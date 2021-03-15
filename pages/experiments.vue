<template>
  <div class="w-full min-h-screen bg-white">
    <!--experiments-->
    <div id="experiments" class="fixed font-bold text-center w-full h-screen text-myblue text-opacity-25">
      <div class="relative margin-auto">EXPERIMENTS</div>
    </div>
    <!--group-->
  <div class="md:text-3xl text-2xl lg:px-40 md:px-36 px-20">
    <!--nav-->
    <!--intro-->
    <div id="intro" class="w-full py-12 lg:flex md:px-6 items-center justify-between z-10">
      <div class="lg:w-1/4 w-full sm:order-2 flex justify-center md:py-6 py-10 lg:pl-10">
          <LazyVideoComponent
          id="video-1"
          source="videos/experiments.mp4"
          class="w-full transform rotate-6 object-cover shadow-sm border-gray border"/>
      </div>
      <div class="lg:w-4/6 w-full md:py-10 py-8 z-10 text-myblue">
      A place to keep track of the different experiments I have made along my learning journey. Continuously <b>under construction</b>.
      </div>
    </div>
    <figure class="border-myblue border-t"></figure>
    <!--history-->
      <ul class="flex flex-wrap py-10 z-50 relative">
      <li
        v-for="experiment of experiments"
        :key="experiment.slug"
        class="lg:w-1/4 md:w-1/3 sm:mx-6 my-6 sm:w-1/2 text-myblue card transition-shadow duration-150 ease-in-out shadow-md hover:shadow-xl"
      >
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: experiment.slug } }"
            class=" flex flex-col h-full"
          >

            <img
              v-if="experiment.img"
              class="w-full object-cover"
              :src="experiment.img"
            />

            <div
              class="lg:p-4 p-2 flex flex-col justify-between h-full w-full"
            >
              <div>
                <div class="font-bold md:text-xl text-2xl">{{ experiment.title }}</div>
                <p class="sm:text-md text-base">{{ experiment.description }}</p>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const experiments = await $content('blog', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      experiments
    }
  }
}
</script>

<style>
.card{
  background-color: rgba(255, 255, 255, 0.2);
}
.card img div {
  border-radius: 8px 0 0 8px;
}
.card img{
  filter:grayscale(1.0);
}
.card:hover img{
  filter:grayscale(0.0);
}
#experiments{
  opacity:0.2;
  z-index:0;
  font-size: 15vw !important;
}
#experiments div{
  top: 20%;
}
</style>
