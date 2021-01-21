<template>
  <div class="flex justify-end">
    <label class="switch">
      <input type="checkbox" v-model="frostedGlass" @click='changeGlassState()'>
      <div class="circle"></div>
    </label>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        frostedGlass:true
      }
    },
    methods: {
      changeGlassState() {
        this.$emit('changeGlassState')
      }
    }
  }
</script>

<style  scoped>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.switch {
  --thumb: rgb(150, 150, 150);
  --bg-1:#00CEA7;
  --bg-2: rgb(12, 30, 78);
  --circle: #FAB152;
  display: flex;
  align-items: center;
  background: var(--bg-1);
  border-radius: 1000px;
  position: relative;
  width: 75px;
  height: 35px;
  cursor: pointer;
}

input[type=checkbox] {
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -1;
  position: absolute;
  opacity: 0;
}

.circle {
  --bs-1: 180 50% 50%;
  --bs-2: 180 50% 60%;
  --bs-3: 180 50% 70%;
  --bs: none;

  width: 30px;
  height: 30px;
  background: var(--thumb);
  border-radius: 1000px;
  box-shadow: var(--bs);
  transform-origin: 0 50%;
  transform: translateX(4px);
  transition: .2s ease-out;
  z-index: 2;
}

input:checked+.circle {
  --thumb: var(--circle);
  --bs:0 0 10px px var(--circle);
  transform: translateX(calc(45px - 4px));
}
</style>
