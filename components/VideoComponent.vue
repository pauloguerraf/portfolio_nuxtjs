<template>
  <video :src="source" crossorigin="anonymous" :autoplay="play" loop="true" muted="muted"></video>
</template>
<script>
export default {
  props: {
    source: {
      type: String,
      default: 'videos/morabeza.mp4'
    },
    play: {
      type: String,
      default: 'false'
    }
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {}
}
</script>
<style>
video {
  filter: brightness(0.5) grayscale(0.7);
}
</style>
