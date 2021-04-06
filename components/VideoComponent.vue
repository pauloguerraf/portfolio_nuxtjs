<template>
  <video  ref="video" :src="source" crossorigin="anonymous" autoplay loop playsinline></video>
</template>
<script>
export default {
  props: {
    source: {
      type: String,
      default: 'videos/morabeza.mp4'
    },
    showcontrols: {
      type: String,
      default: 'false'
    },
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {
    this.$refs.video.volume = 0;
    this.$refs.video.mute = true;

    if(this.showcontrols === 'true')this.$refs.video.setAttribute('controls', '1');
  },
  computed: {
    videoElement () {
      return this.$refs.video;
    },
  }
}
</script>

