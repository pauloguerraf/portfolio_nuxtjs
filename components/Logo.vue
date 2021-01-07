<template>
 <nuxt-link to="/"><div id="logo-txt" class="logo font-bold text-left">pauloguerraf.com</div></nuxt-link>
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
#logo-txt{
  -webkit-text-stroke:1px blue;
  -webkit-text-fill-color:transparent;
  -webkit-transition: all .2s ease-out;
  writing-mode: vertical-lr;
  transform: rotate(180deg) !important;
  text-orientation: sideways;
  text-orientation: sideways;
  font-size: clamp(8vh, 4vw, 80vh) !important;
  line-height: 1.0 !important;
}
@media (min-width: 768px) {
 #logo-txt{
   -webkit-text-stroke:1.5px blue;
 }
}

#logo-txt:hover{
  -webkit-text-fill-color:blue;
}
</style>
