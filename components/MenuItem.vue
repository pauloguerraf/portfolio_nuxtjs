<template>
    <nuxt-link class="menu__item relative uppercase md:px-10 sm:w-1/4 w-1/3 text-center font-menu text-myblue hover:font-semibold text-xl focus:outline-none" :to="url">
      <span class="menu__item-name">{{text}}</span>
    </nuxt-link>
</template>

<script>
import anime from 'animejs'

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
  },
  mounted(){
    //  anime({
    //     targets:'#navigation',
    //     opacity: ['0', '1'],
    //     translateY: ['-50%', '0'],
    //     duration: 1000,
    //     delay: 200,
    //     easing: 'easeOutCubic'
    //   })
  }
}
</script>

<style>
.menu__item-name::before {
	content: '';
	position: absolute;
	z-index: -1;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 50%;
	opacity: 0.5;
	transform: scale3d(1,0,1);
	transform-origin: 0% 100%;
	transition: transform 0.5s;
	transition-timing-function: cubic-bezier(0.2,1,0.3,1);
  background: #33CA7F;
}
.menu__item:hover .menu__item-name::before,
.menu__item:focus .menu__item-name::before{
  transform: scale3d(1,1,1);
}
</style>
