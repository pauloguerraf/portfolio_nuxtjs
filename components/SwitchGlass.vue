<template>
  <div>
    <label class="switch">
      <input type="checkbox">
      <div class="circle"></div>
    </label>

  </div>
</template>

<script>
  export default {

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
  --bg-1: rgb(0, 0, 255);
  --bg-2: rgb(12, 30, 78);
  display: flex;
  align-items: center;
  background: #0000ff;
  border-radius: 1000px;
  position: relative;
  width: 100px;
  height: 50px;
  cursor: pointer;
  transform: scale(0.75, 0.75);
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

  width: 40px;
  height: 40px;
  background: var(--thumb);
  border-radius: 1000px;
  box-shadow: var(--bs);
  transform-origin: 0 50%;
  transform: translateX(4px);
  transition: .2s ease-out;
  z-index: 2;
}

input:checked+.circle {
  --thumb: #d9ff00cc;
  --bs:0 0 10px px #d9ff00;
  transform: translateX(calc(60px - 4px));
}
input:checked.switch {
    background: #0000ff55;
}
</style>
