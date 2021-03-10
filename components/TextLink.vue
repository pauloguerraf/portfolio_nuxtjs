<template>
  <div>
    <nuxt-link v-if="internal" :to="url" class="py-4 text-center stroke-current">
        <svg v-if="back && !download" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline" viewBox="0 0 24 25.243">
          <g transform="translate(-6 -5.379)">
            <path d="M28.5,18H7.5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
            <path d="M18,28.5,7.5,18,18,7.5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
          </g>
        </svg>
        {{text}}
        <svg v-if="download && !back" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline" viewBox="0 0 19.243 19.243">
          <g transform="translate(-8.379 -8.379)">
            <path d="M10.5,25.5l15-15" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
            <path d="M10.5,10.5h15v15" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
          </g>
        </svg>
        <svg v-else-if="!download && !back" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline" viewBox="0 0 19.243 19.243">
          <g transform="translate(-8.379 -8.379)">
            <path d="M10.5,25.5l15-15" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
            <path d="M10.5,10.5h15v15" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
          </g>
        </svg>
    </nuxt-link>
    <a v-else :href="url" class="bg-transparent py-4 text-center stroke-current">
        {{text}}
         <svg v-if="download" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline" viewBox="0 0 19.243 19.243">
          <g transform="translate(-8.379 -8.379)">
            <path d="M10.5,10.5l15,15" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
            <path d="M25.5,10.5v15h-15" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
          </g>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 inline" viewBox="0 0 19.243 19.243">
          <g transform="translate(-8.379 -8.379)">
            <path d="M10.5,25.5l15-15" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
            <path d="M10.5,10.5h15v15" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
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
        default: true,
      },
      download:{
        type: Boolean,
        default: false,
      },
      back:{
        type: Boolean,
        default: false,
      }
    }
  }
</script>

<style>

</style>
