<template>
  <div class="stage flex flex-col justify-end items-center">
    <svg class="svg" viewBox="0 0 716 1008" xmlns="http://www.w3.org/2000/svg">
        <rect class="dark-patch" width="100" height="150" x="616" fill="#010005" />
        <g class="square-frame">
            <g class="square">
                <rect class="square__large" width="868" height="868" fill="#010005" />
                <rect class="square__small" x="303" y="303" width="262" height="262" fill="#F68513" />
                <circle class="ball" cx="405" cy="463" r="103" fill="#010005" />
            </g>
        </g>
    </svg>
    <h1 class="band">firehose</h1>
    <div class="details">
        <p class="date"><span>friday</span><span>december 13 1991</span><span>7 pm start</span></p>
        <p class="location"><span>at the seahawk center</span><span>harbor college / 1111 figueroa place</span><span>wilmington, california</span></p>
        <p class="support"><span>with babyland</span><span>sense field</span><span>spinning ceilings</span></p>
    </div>
</div>
</template>

<script>
  export default {
    layout: 'experiment',
    mounted(){
      const a = new SplitText();
    },
  }
</script>

<style lang="scss" scoped>
$orange: #F68513;

*, *:before, *:after {
	box-sizing: border-box;
}

.stage {
   background-color: $orange;
	//visibility: hidden;
   overflow: hidden;
   cursor: pointer;
   // background-image: url("https://assets.codepen.io/61488/firehose.jpg");
}

svg {
    //visibility: hidden;
    width: 716px;
    height: 1008px;
}

.dark-patch {
   // visibility: hidden;
}

.ball {
    //visibility: hidden;
    // opacity: 0;
}



h1.band {
	font-size: 115px;
	margin: 0;
	letter-spacing: -0.5px;
	overflow: hidden;
	white-space: nowrap;
  font-weight: 600;
	font-style: normal;
  line-height: 0.8;
	> div {
		overflow: hidden;
	}
}

.details {
	display: flex;
	p {
		margin: 0;
		line-height: 1.5;
		> div {
			overflow: hidden;
		}
	}

	span {
		display: block;
	}
}

.date {
	padding-right: 49px;
}

.location {
	padding-right: 106px;
}

</style>
