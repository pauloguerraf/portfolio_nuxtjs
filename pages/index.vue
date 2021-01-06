<template>
  <div class="h-screen">
    <div  class="absolute h-full xl:p-10 p-6 z-10 xl:w-1/3 w-full">
      <div id="left" class="h-full p-10 flex flex-col justify-around">
        <Logo class="text-4xl text-right" />
        <Navigation/>
        <div class="flex justify-end">
          <a href="https:github.com/pauloguerraf"><img src="/icons/github.svg" alt="https:github.com/pauloguerraf"></a>
        </div>
      </div>
    </div>
    <div class="">
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
#left{
  background: rgba( 0, 0, 255, 0.45 );
  box-shadow: 10px 10px 10px 0 rgba(221, 255, 0, 0.07);
  backdrop-filter: blur( 20px );
  -webkit-backdrop-filter: blur( 20px );
  border-radius: 10px;
}
</style>
