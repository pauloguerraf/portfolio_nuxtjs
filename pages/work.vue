<template>
  <div class="w-full  min-h-screen bg-white">
    <!--about-->
    <div id="work" class="fixed font-bold text-center w-full h-screen text-myblue text-opacity-25"><div class="relative margin-auto">WORK</div></div>

    <!--group-->
  <div class="md:text-3xl text-2xl lg:px-40 md:px-36 px-20">
    <!--nav-->
    <!--intro-->
    <div id="intro" class="w-full py-12 lg:flex md:px-6 items-center z-10">
      <!-- <div class="lg:w-2/6 w-full sm:order-2 flex justify-center lg:pl-10">
           <img class="rounded-full sm:w-3/4 lg:w-full lg:flex" src="profile.jpg"/>
      </div> -->
      <div class="w-full md:py-16 py-8 z-10 text-myblue">
      Throughout my carreer, I have been part of several projects that have allowed me to explore and build experiences around the boundaries of both <strong>physical and digital</strong> worlds. From websites to multimedia installations, AR, VR, robotics, traditional and experimental interfaces, I have had the opportunity to learn from many technologies and from some <strong>amazing human beings</strong> using them around the <strong>world</strong>.
      <br>
      <br>
      <strong>Curiosity</strong> helps me keep up to date with new tools and I am always happy to keep learning in order to overcome the challenges presented by new projects.
      </div>
    </div>

    <!--history-->
    <ul class="flex flex-wrap py-10 z-50 relative">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="md:w-1/3 sm:px-6 py-6 sm:w-1/2 text-myblue"
      >
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class=" flex flex-col transition-shadow duration-150 ease-in-out shadow-md hover:shadow-xl "
          >

            <img
              v-if="article.img"
              class="w-full object-cover"
              :src="article.img"
            />

            <div
              class="lg:p-6 p-4 flex flex-col justify-between w-full"
            >
              <div class="font-bold md:text-xl text-2xl">{{ article.title }}</div>
              <p class="sm:text-xl text-md">by {{ article.description }}</p>
              <p class="font-bold text-gray-600 text-sm">
                {{ article.description }}
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
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()
    const tags = await $content('tags', params.slug)
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
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
#work{
  opacity:0.2;
  z-index:0;
  font-size: 25vw !important;
}
#work div{
  top: 20%;
}

</style>
