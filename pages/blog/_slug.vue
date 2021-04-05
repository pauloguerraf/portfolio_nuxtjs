<template>
  <div class="w-full min-h-screen bg-white md:px-6 px-4">
    <!--background-->
    <div id="title" class="mx-auto fixed font-bold text-center w-full h-screen text-myblue text-opacity-25">{{ experiment.title }}</div>
    <!--info-->
    <div class="md:text-4xl text-3xl lg:px-40 md:px-36 px-6 text-myblue z-10 relative lg:m-10 m-8">
      <TextLink url="/experiments" :back=true :internal=true text="back" class="font-bold hover:text-myyellow text-orange-500 text-2xl"/>
      <div class="w-full h-full border-myblue border-l-4 pl-4">
        <div class="mt-16 mb-3 flex uppercase text-sm">
          <span class="mr-3">•</span>
          <p>{{ experiment.description }}</p>
        </div>
        <div class="md:text-6xl text-3xl font-bold ">{{ experiment.title }}</div>
      </div>
      <div class="pt-6 text-xl">
       <nuxt-content :document="experiment" />
      </div>
      <TextLink url="/experiments" :back=true :internal=true text="back" class="font-bold hover:text-myyellow text-orange-500 text-2xl"/>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const experiment = await $content('blog', params.slug).fetch()
    return {
      experiment,
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
  margin-bottom: 40px;
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
.nuxt-content a {
  font-weight: bold;
  color: #FFA700;
}
.nuxt-content img {
  width: 50%;
  padding: 8px;
  border-radius: 15px;
}
.nuxt-content .imgs{
  width: 100%;
  display: flex;
  margin: 16px;
  flex-wrap: wrap;
}
.nuxt-content video {
  width: 50%;
}
.nuxt-content .instagram{
  width: 100%;
  display: flex;
  margin: 16px;
  flex-wrap: wrap;
  justify-content: space-around;
}
.nuxt-content iframe{
  width: 100%;
  display: flex;
  margin: 16px;
  flex-wrap: wrap;
}
@media screen and (max-width: 760px){
  .nuxt-content img {
    width: 100%;
    padding: 8px;
  }
}

</style>
