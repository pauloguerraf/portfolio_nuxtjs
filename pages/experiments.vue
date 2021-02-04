<template>
  <div class="w-full min-h-screen bg-white">
    <!--experiments-->
    <div id="experiments" class="fixed font-bold text-center w-full h-screen text-myblue text-opacity-25"><div class="relative margin-auto">EXPERIMENTS</div></div>
    <!--group-->
  <div class="md:text-3xl text-2xl lg:px-40 md:px-36 px-20">
    <!--nav-->
    <!--intro-->
    <div id="intro" class="w-full py-12 lg:flex md:px-6 items-center z-10">
      <div class="lg:w-2/6 w-full sm:order-2 flex justify-center lg:pl-10">
          <!-- <img class="rounded-full sm:w-3/4 lg:w-full lg:flex" src="profile.jpg"/> -->
      </div>
      <div class="lg:w-4/6 w-full md:py-16 py-8 z-10 text-myblue">
      A place to keep track of quick experiments I make in order to grasp new concepts and learn new things.
      </div>
    </div>

    <!--history-->
    <ul class="flex flex-wrap py-10 z-50 relative">
      <li
        v-for="experiment of experiments"
        :key="experiment.slug"
        class="sm:w-full md:w-1/3 px-10 xs:mb-6 md:mb-12 text-myblue"
      >
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: experiment.slug } }"
            class=" flex flex-col transition-shadow duration-150 ease-in-out shadow-md hover:shadow-xl "
          >

            <img
              v-if="experiment.img"
              class="w-full object-cover"
              :src="experiment.img"
            />

            <div
              class="p-6 flex flex-col justify-between w-full"
            >
              <h2 class="font-bold">{{ experiment.title }}</h2>
              <p>by {{ experiment.description }}</p>
              <p class="font-bold text-gray-600 text-sm">
                {{ experiment.description }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>

    <!--social-->
      <Footer/>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const experiments = await $content('experiments', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()
    const tags = await $content('tags', params.slug)
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      experiments,
      tags
    }
  }
}
</script>

<style>
.article-card {
  border-radius: 8px;
}
.article-card a {
  background-color: #fff;
  border-radius: 8px;
}
.article-card img div {
  border-radius: 8px 0 0 8px;
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
