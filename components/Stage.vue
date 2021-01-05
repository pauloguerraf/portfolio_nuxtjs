<template>
  <div class="ytl_stage">
    <div>
      <h1 class="quote text-5xl my-10">
        A quick
        <br>nuxt + gsap
        <br>experiment
      </h1>
      <nuxt-link to="/" @click.native="reloadAnim">
      <div class="ytl_stage--more fade-in">
        RELOAD
      </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        tl : "",
        quotes: ""
      }
    },
    methods:{
      reloadAnim:function(){
        this.setupSplits()
        this.tl.restart()
      },
      setupSplits:function(){
        this.quotes.forEach(quote=>{
          if(quote.anim){
            quote.anim.progress(1).kill();
            quote.childSplit.revert();
            quote.parentSplit.revert();
          }
          quote.parentSplit = new SplitText(quote, {type: "lines", linesClass: "split-parent"});
          quote.childSplit = new SplitText(quote, { type: "chars"});

          quote.anim = gsap.from(quote.childSplit.chars,{
            scrollTrigger:{
              trigger:quote,
              once: true,
              scrub: false,
              toggleActions: "restart pause resume reverse",
              start: "top 80%",
            },
            duration: 0.8,
            delay: 1,
            ease: "circ.out",
            y: 200,
            stagger: 0.03,
          })
        })
      }
    },
    mounted(){
      this.tl = gsap.timeline();
      this.tl.from(".fade-in", {duration: 1.5, opacity: 0, ease: "circ.out", stagger: 0.02, }, "+=1.5")
      this.quotes = document.querySelectorAll(".quote")
      ScrollTrigger.addEventListener("refresh", this.setupSplits);
      this.setupSplits();
    }
  }
</script>
<style lang="scss" scoped>
.ytl_stage{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &--more{
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    border-radius: 50%;
    margin: 0 auto;
    transition: background-color .3s;
    &:hover{
      background-color: #444;
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>
