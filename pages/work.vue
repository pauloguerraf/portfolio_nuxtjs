<template>
  <div class="w-full  min-h-screen bg-white">
    <!--about-->
    <div id="work" class="fixed font-bold text-center w-full h-screen text-myblue text-opacity-25"><div class="relative margin-auto">WORK</div></div>

    <!--group-->
  <div class="md:text-2xl text-xl lg:px-40 md:px-36 px-20">
    <!--nav-->
    <!--intro-->
    <div id="intro" class="w-full py-12 lg:flex md:px-6 z-10">
      <!-- <div class="lg:w-2/6 w-full sm:order-2 flex justify-center lg:pl-10">
           <img class="rounded-full sm:w-3/4 lg:w-full lg:flex" src="profile.jpg"/>
      </div> -->
      <div class="w-full md:py-10 py-8 z-50 relative text-myblue">
      Throughout my career, I have been part of several projects that have allowed me to <strong>explore</strong> and build experiences around the boundaries of both <strong>physical and digital</strong> worlds. From <strong>websites</strong> to multimedia installations, AR, VR, robotics, traditional and <strong>experimental interfaces</strong>, I have had the opportunity to learn from many technologies and from <strong>amazing</strong> professionals using them around the <strong>world</strong>.
      <br>
      <br>
      <strong>Curiosity</strong> helps me keep <strong>up to date</strong> with new tools and I am always <strong>happy</strong> to keep learning in order to <strong>successfully</strong> deliver new projects.
      </div>
    </div>
    <figure class="border-myblue border-t"></figure>
    <!--history-->
    <ul class="w-full flex flex-wrap py-10 z-50 relative justify-center">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="md:w-1/3 lg:w-1/3 my-6 sm:w-1/2 text-myblue md:px-4 lg:px-8 px-0 sm:px-2"
      >
          <NuxtLink
            :to="{ name: 'projects-slug', params: { slug: article.slug } }"
            class=" flex flex-col h-full card transition-shadow duration-150 ease-in-out shadow-md hover:shadow-xl bg-gray-300"
          >

            <img
              v-if="article.img"
              class="object-cover"
              :src="article.img"
            />

            <div
              class="lg:p-4 p-2 flex flex-col justify-between h-full w-full"
            >
              <div>
                <div class="font-bold md:text-xl text-2xl">{{ article.title }}</div>
                <p class="sm:text-md text-base">{{ article.description }}</p>
              </div>
              <p class="text-gray-800 font-medium text-base mt-4 py-2 border-t-2 border-gray-500">
          <span class="mr-3">//</span>{{ article.role }}
              </p>
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
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'role'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      articles
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
#work{
  opacity:0.2;
  z-index:0;
  font-size: 25vw !important;
}
#work div{
  top: 20%;
}

</style>
