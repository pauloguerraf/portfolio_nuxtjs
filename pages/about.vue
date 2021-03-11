<template>
<div class="w-full min-h-screen bg-white">
   <!--about-->
  <div id="about" class="fixed font-bold text-center w-full h-screen text-myblue text-opacity-25"><div class="relative margin-auto">ABOUT</div></div>

  <!--group-->
  <div class="md:text-4xl text-3xl lg:px-40 md:px-36 px-20">
    <!--nav-->
    <!--intro-->
    <div id="intro" class="w-full py-12 lg:flex md:px-6 items-center z-10">
       <div class="md:w-2/6 lg:w-4/6 w-full mx-auto flex justify-center">
          <img class="rounded-full sm:w-3/4" src="profile.jpg"/>
      </div>
      <div class="lg:w-4/6 w-full md:py-16 py-8 z-10 text-myblue">
      Hola! my name is Paulo. I am a <strong>creative developer</strong> passionate about exploring <strong>cutting edge</strong> technology-enabled <strong>interactions</strong> and connecting people through <strong>meaningful</strong> and innovative <strong>experiences</strong>.
      </div>
    </div>

    <!--history-->
    <div id="history" class="grid md:grid-cols-3 grid-cols-1 text-myblue">
      <div class="md:py-16 py-8 text-2xl md:px-8 px-4 border-b md:border-b-0 z-10">
        <div>I have taught introductory and advanced Physical Computing and Interactive Media courses at <TextLink url="https://www.udla.edu.ec" :internal=false text="Universidad de las Américas" class="font-bold hover:text-myyellow text-orange-500 text-2xl inline"/> for the last 6 years. As a professor, I have led academic projects and contributed to the development of the creative programming and interactive media <strong>community</strong> in Ecuador.</div>
      </div>
      <div class="md:py-16 py-8 text-2xl md:px-8 px-4 border-b md:border-b-0 md:border-l md:border-r z-10">
        <div>In 2018, I co-founded <TextLink url="https://nidointeractive.com" :internal=false text="NIDO Interactive" class="font-bold hover:text-myyellow text-orange-500 text-2xl inline"/>, a company focused on providing quality digital services to clients in Ecuador, Brazil and USA. Since its beginnings, NIDO has built <strong>websites</strong> and developed mobile, AR and VR experiencies, for more than 50 clients. I have been <strong>responsible</strong> for selecting the technologies for and supervising the development of 100% of those projects.</div>
      </div>
      <div class="md:py-16 py-8 text-2xl md:px-8 px-4 z-10">
        <div>NuxtJS, WordPress, ThreeJS, A-Frame, Processing, Unity, Unreal Engine, Qt, openFrameworks, Arduino, Raspberry Pi, Resolume Arena, among others, are some of the <strong>tools</strong> I've had the opportunity to become familiar with and use on client projects. Find out more about some of my projects on the <TextLink url="/work" :internal=true text="work" class="font-bold hover:text-myyellow text-orange-500 text-2xl inline"/> section.</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
</script>

<style lang="scss" scoped>

#about{
  opacity:0.2;
  z-index:0;
  font-size: 25vw !important;
}
#about div{
  top: 20%;
}
#intro img{
  transition: all 0.3s;
  filter: grayscale(1);
}
#intro img:hover{
  filter: grayscale(0.4);
}

</style>
