<template>
  <div class="w-full min-h-screen bg-background">
     <!--logo-->
    <Logo class="fixed top-0 left-0 z-50"/>
    <!--experiments-->
    <div id="experiments" class="fixed font-bold text-center w-full h-screen text-white text-opacity-50"><div class="relative margin-auto">EXPERIMENTS</div></div>
    <NavigationHome class="relative z-50"/>
    <figure class="border-primary border-t bg-white w-10/12 mx-auto"></figure>

    <!--group-->
  <div class="md:text-3xl text-2xl lg:px-40 md:px-36 px-20">
    <!--nav-->
    <!--intro-->
    <div id="intro" class="w-full py-12 lg:flex md:px-6 items-center z-10">
      <div class="lg:w-2/6 w-full sm:order-2 flex justify-center lg:pl-10">
          <!-- <img class="rounded-full sm:w-3/4 lg:w-full lg:flex" src="profile.jpg"/> -->
      </div>
      <div class="lg:w-4/6 w-full md:py-16 py-8 z-10 text-white">
      A space to keep track of quick experimetns I make in order to grasp the new concepts I found on my learning journey.
      </div>
    </div>

    <!--history-->
    <ul class="flex flex-wrap py-10 z-50 relative">
      <li
        v-for="post of posts"
        :key="post.slug"
        class="sm:w-full md:w-1/3 px-10 xs:mb-6 md:mb-12 text-white"
      >
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: post.slug } }"
            class=" flex flex-col transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md "
          >

            <img
              v-if="post.img"
              class="w-full object-cover"
              :src="post.img"
            />

            <div
              class="py-6 flex flex-col justify-between w-full"
            >
              <h2 class="font-bold">{{ post.title }}</h2>
              <p>by {{ post.description }}</p>
              <p class="font-bold text-gray-600 text-sm">
                {{ post.description }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>

    <!--social-->
      <figure class="border-primary border-t bg-white mx-auto"></figure>
      <footer class="flex md:py-20 py-10 justify-between w-full flex-col sm:flex-row items-center">
        <div class="flex text-white font-bold text-xl no-underline hover:text-myorange hover:underline">
          <a class="" href="/docs/paulo_guerra_f_cv2021.pdf">DOWNLOAD RESUME</a>
        </div>
        <Social class="flex sm:py-0 py-10"/>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content('posts', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()
    const tags = await $content('tags', params.slug)
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      posts,
      tags
    }
  }
}
</script>

<style class="postcss">
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
