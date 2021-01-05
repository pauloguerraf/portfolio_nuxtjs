<template>
  <div class="grid md:grid-cols-5 h-screen">
    <div class="bg-black md:col-span-2 flex p-16 flex-col items-stretch justify-around">
        <Logo class="text-4xl text-right" />
        <Navigation/>
    </div>
    <div class="bg-white md:col-span-3">
      <VideoComponent
        id="video-1"
        source="videos/interactive.mp4"
        class="aboslute h-screen object-cover"
      ></VideoComponent>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>

</style>
