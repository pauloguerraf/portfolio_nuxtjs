<template>
  <div>
    <nuxt-link v-if="internal==true" :to="url" class="text-myyellow bg-transparent hover:text-myred py-4 font-bold text-md text-center stroke-current">
        {{text}}
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline" viewBox="0 0 19.243 19.243">
          <g transform="translate(-8.379 -8.379)">
            <path id="Path_2" data-name="Path 2" d="M10.5,25.5l15-15" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
            <path id="Path_3" data-name="Path 3" d="M10.5,10.5h15v15" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
          </g>
        </svg>
    </nuxt-link>
    <a v-else :href="url" class="text-myyellow bg-transparent hover:text-myred py-4 font-bold text-md text-center stroke-current">
        {{text}}
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline" viewBox="0 0 19.243 19.243">
          <g transform="translate(-8.379 -8.379)">
            <path id="Path_2" data-name="Path 2" d="M10.5,25.5l15-15" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
            <path id="Path_3" data-name="Path 3" d="M10.5,10.5h15v15" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
          </g>
        </svg>
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      url: {
        type: String,
        default: '/'
      },
      text:{
        type: String,
        default: 'text'
      },
      internal:{
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style>

</style>
