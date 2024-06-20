<script setup>
import illu01 from '../assets/pics/illu01.png';
import dc from '../assets/pics/dance.png';
import choreographer from '../assets/pics/choreographer.png';
</script>

<template>
  <div class="absolute w-full h-full grid grid-cols-4 grid-rows-10 gap-y-5 bg-gray-200 z-50">
    <div class="relative col-start-1 row-start-2 left-40 top-10">
      <h1 class="font-mainFont text-2xl">Hooman Sharifi</h1>
      <h1 class="font-mainFont text-sm">Meet the choreographer</h1>
    </div>


    <div class="relative col-start-1 row-start-3 col-span-3 font-mainFont left-40 leading-7 z-50 top-10">
      <p>Choreographer Hooman Sharifi (NO) was born in Tehran in 1973 and came alone to Norway at the <br>
        age of 15. He began his dance career as a teenager with hip-hop and later continued with classical and modern ballet,<br>
         earning a degree in choreography from the Oslo National Academy of the Arts. He is particularly interested in the  <br>
         intersection of dance, theater, and visual arts. In 2000, he founded his own company, Impure Company, which focuses on <br>
         social engagement and has since created over 30 choreographic works. Sharifi's movement language is physically <br>
         exhausting, intense, and powerful, exploring the structures behind hierarchies, power, political systems, and violence. <br>
        From 2014 to 2018, he was the artistic director of Norway's national contemporary dance company, Carte Blanche. <br>
        Sharifi collaborates with many major institutions, and his works have achieved great international success.</p>
    </div>

    <div class="relative col-start-1 row-start-7 left-40 top-16 z-50">
      <h1 class="font-mainFont text-2xl">Cullberg</h1>
      <h1 class="font-mainFont text-sm">The dance ensemble</h1>
    </div>

    
    <div class="relative col-start-1 row-start-8 col-span-3 font-mainFont left-40 leading-7 top-16 z-50">
      <p>
        is an internationally recognized dance company founded in 1967 and based in Stockholm—a historic institution in Swedish <br>
        and international performing arts, continually managing to speak to its contemporary audience across divides. <br>
        Their repertoire comments on and reflects our society, and they continuously work to ensure that as many people as possible, <br>
        both in Sweden and internationally, can enjoy contemporary dance.
      </p>
    </div>

    <div class="relative col-start-3 row-start-5 row-span-10 col-span-3 bottom-20 opacity-10">
      <img :src="illu01" alt="woops" class="w-[1200px] h-auto" />
    </div>

    <div class="relative col-start-1 row-start-8 row-span-10 col-span-3 bottom-16 opacity-5 left-5">
      <img :src="dc" alt="woops" class="w-[800px] h-auto" />
    </div>

    <div class="relative col-start-1 row-start-2 row-span-10 col-span-3 bottom-10 opacity-5 left-5">
      <img :src="choreographer" alt="woops" class="w-[800px] h-auto" />
    </div>


  </div>
</template>

<style>
</style>
