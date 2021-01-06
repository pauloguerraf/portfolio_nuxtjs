<template>
 <nuxt-link to="/"><div class="logo font-bold text-5xl"><span class="logo-txt">pauloguerraf.com</span></div></nuxt-link>
</template>
<script>
import anime from 'animejs'
//import charming from 'charming'

export default {
  data(){
    return{
      // element:"",
      // RESULTS:"",
      // GLITCH_CHARS:""
    }
  },
  mounted(){
    //this.element = document.querySelector('.logo');
    // charming(this.element);
    // this.RESULTS = this.element.children;
    // this.GLITCH_CHARS = '`¡™£¢∞§¶•ªº–≠åß∂ƒ©˙∆˚¬…æ≈ç√∫˜µ≤≥÷/?░▒▓<>/'.split('')
    // for (let r = 0; r < this.RESULTS.length; r++) {
    //   // const CHARS = this.RESULTS[r].chars
    //   // for (let c = 0; c < CHARS.length; c++) {
    //     const char = this.RESULTS[r].innerHTML;
    //     this.RESULTS[r].setAttribute("data-char", char);
    //     for (let g = 0; g < 10; g++) {
    //       this.RESULTS[r].style.setProperty(
    //         `--char-${g}`,
    //         `"${this.GLITCH_CHARS[Math.floor(Math.random() * this.GLITCH_CHARS.length)]}"`
    //       )
    //     }
    //   // }
    // }
    anime({
        targets:'.logo',
        opacity: ['0', '1'],
        translateY: ['-50%', '0'],
        duration: 1000,
        delay: 200,
        easing: 'easeOutCubic'
      })
    }
}
</script>
<style>
[data-char] {
  color: transparent;
  position: relative;
}
[data-char]:after {
  --txt: attr(data-char);
  animation-name: glitch-switch;
  animation-duration: 0.2s;
  animation-delay: 2s;
  animation-timing-function: steps(1);
  animation-fill-mode: backwards;
  content: var(--txt);
  position: absolute;
  color: #fff;
  left: 0;
  top: 0;
}
@keyframes glitch-switch {
  0% { content: var(--char-0); }
  10% { content: var(--char-1); }
  20% { content: var(--char-2); }
  30% { content: var(--char-3); }
  40% { content: var(--char-4); }
  50% { content: var(--char-5); }
  60% { content: var(--char-6); }
  70% { content: var(--char-7); }
  80% { content: var(--char-8); }
  90% { content: var(--char-9); }
  100% { content: var(--char-0); }
}
.logo-txt{
  -webkit-text-stroke:1px white;
  -webkit-text-fill-color:transparent;
}
.logo-txt:hover{
  -webkit-text-stroke:0px white;
  -webkit-text-fill-color:white;
}
</style>
