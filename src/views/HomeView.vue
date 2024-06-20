<template>
  <main>
    <!-- whole window div -->
    <div class="relative w-full h-full grid grid-cols-4 grid-rows-24 gap-y-5 bg-gray-200">
      <!-- Adjusted the grid rows to accommodate extra gap row -->

  


      <!-- image nr. 1 welcome page -->
      <div class="relative col-start-3 row-start-1 col-span-2  pt-24 left-16 opacity-80 size-4/5">
        <img :src="faces" alt="woopss" class="w-full h-auto">
      </div>

      <!-- Image nr. 2 for welcome page-->
      <!-- <div class="relative col-start-3 row-start-1 col-span-2 top-80 right-10 opacity-70 size-7/12">
        <img :src="faces10" alt="woopss" class="w-full h-auto">
      </div> -->

      <!-- PNG of "while in battle" title-->
      <div class="col-start-1 row-start-1  pl-5 row-span-2 col-span-2 opacity-100 size-5/12 pt-24 "> 
        <img :src="titel" alt="woopss" class="title-image"> 
      </div>

      <!-- Name tingeling -->
      <div class="leading-normal content-center col-start-1 col-span-4 row-start-1 pl-36 pt-96 z-0 flex items-end font-mainFont text-1xl text-black">
        <p>A contemporary dance performance <br> by Hooman Sharifi</p>
      </div>

      <!-- empty rows - so i can separate my things  SPACE -->
      <div class="col-start-1 col-span-4 row-start-2 h-52"></div> <!-- space between big pic and the info text-->
      <div class="col-start-1 col-span-4 row-start-6 h-96"></div> <!-- space between info text and behind bla bla text-->
      <div class="col-start-1 col-span-4 row-start-10 h-72"></div> <!-- space in the bottom of my page -->

      <!-- informative stuff -->
      <div class="col-start-4 col-span-2 row-start-3 z-10 font-mainFont text-black ">
        <h1 class="text-5xl">When</h1>
        <p class="text-1xl">25 - 29 th. of June</p>
      </div>
      <div class="col-start-4 col-span-2 row-start-4 z-10 font-mainFont text-black ">
        <h1 class="text-5xl">Where</h1>
        <p class="text-1xl">Blågårds plads, Copenhagen N</p>
      </div>
      <div class="col-start-4 col-span-2 row-start-5 z-10 font-mainFont text-black ">
        <h1 class="text-5xl">What time</h1>
        <p class="text-1xl">20:00 until 21:30</p>
      </div>
      <div class="col-start-4 col-span-2 row-start-6 z-10 font-mainFont text-black ">
        <h1 class="text-5xl">Tickets</h1>
        <p class="text-1xl">This event is free - <br> if you wish to be seated during the act <br> please <a href="https://www.eventim-light.com/dk/a/6268ebc70e2f6b59c13b0fac/s/6655dc75e820523242408abe?lang=da" class="underline">click here</a></p>
      </div>

      





      <!-- faces images - the united peeps-->
      <div class="col-start-2 row-start-3 1 pl-18 opacity-100 size-2/5 z-0">
        <img :src="faces02" alt="woopss" class="w-full h-auto">
      </div>
      <div class="col-start-3 row-start-4 pl-18 opacity-100 size-2/5 place-self-center z-0">
        <img :src="faces03" alt="woopss" class="w-full h-auto">
      </div>
      <div class="col-start-2 row-start-5 pl-18 opacity-100 size-2/5 place-self-center z-0">
        <img :src="faces04" alt="woopss" class="w-full h-auto">
      </div>
      <div class="col-start-1 row-start-5 size-2/5 place-self-center z-0">
        <img :src="faces05" alt="woopss" class="w-full h-auto">
      </div>
      <div class="col-start-3 row-start-3 size-2/5 place-self-top z-0">
        <img :src="faces06" alt="woopss" class="w-full h-auto">
      </div>
      <div class="col-start-2 row-start-4 size-2/5 place-self-center z-0">
        <img :src="faces07" alt="woopss" class="w-full h-auto">
      </div>
      <div class="col-start-1 row-start-3 size-2/5 place-self-center z-0">
        <img :src="faces08" alt="woopss" class="w-full h-auto">
      </div>



      <!-- The "what's the performance about" tamtam -->
 <div class="relative top-5 font-mainFont col-start-1 row-start-7 col-span-4 row-span-3 pl-64 pt-10 z-50 text-black ">
        <h1 class="text-5xl">Behind the performance</h1> <br>
        <p class="text-1xl leading-8">
          The title of the performance is a quote from civil rights activist James Baldwin: "While in battle I’m free, never free to rest." <br>
          Is life a fight to the death? Or a powerful dance party if only we set our bodies free? For the uncompromising choreographer Sharifi, <br>
           art is always political. In a time of conflict, where groups clash, fight, and go to war, he presents a masterpiece about <br>
           the collective's power to unify and transform. It's about how new possibilities arise from our differences if we make space for them. <br>
           It's about how we all struggle to be free in the world. Together, but with our own voices.
          <br>
          The dancers swirl around each other in intense, sweat-drenched choreographies, drawing us as the audience into their universe. <br>
          We surround the dancers, while the captivating soundtrack envelops us. Neda Sanai has created her own unique music by sampling <br>
          a distinct soundscape of Iranian folk music. Twenty bodies in constant motion create a nomadic and human ritual that insists we are part <br>
          of the same infinite body and that we release its pulse.
        </p>

        <nav class="underline">
        <!-- <RouterLink to="/" class="z-10">Home</RouterLink>  -->
        <RouterLink to="/about" >Do you want to know more?</RouterLink>
       </nav> 
 </div>
      
         <!-- NAMESSS!!!!!!!!!!!!!!!!!!!!!!!!!!  -->
      <div class="absolute row-start-4 col-start-1 size-6/12 opacity-30">
              <img :src="afra" alt="woopss" >
            </div>

      <div class="relative row-start-8 col-start-3 size-12/12 left-44 top-72 opacity-40">
        <img :src="ama" alt="woopss" >
       </div>

       <div class="absolute row-start-5 col-start-2 size-6/12 opacity-70">
        <img :src="anand" alt="woopss" >
       </div>

       <div class="absolute row-start-2 col-start-1 top-36 left-10 col-span-3 size-6/12 opacity-10">
        <img :src="anastacia" alt="woopss" >
       </div>

       <div class="absolute row-start-7 col-start-3 size-6/12 left-52 opacity-70">
        <img :src="andreas" alt="woopss" >
       </div>

       <div class="absolute row-start-6 col-start-1 size-6/12 left-36 top-72 opacity-50">
        <img :src="anna" alt="woopss" >
       </div>

       <div class="absolute row-start-8 col-start-3 col-span-3 top-5 size-8/12 left-32 opacity-10">
        <img :src="camille" alt="woopss" >
       </div>

       <div class="absolute row-start-8 col-start-1 size-6/12 left-10 opacity-0">
        <img :src="chiara" alt="woopss" >
       </div>

       <div class="absolute row-start-7 col-start-2 size-12/12 col-span-4 left-56 top-56 opacity-5">
        <img :src="vincent" alt="woopss" >
       </div>

       <div class="absolute row-start-9 col-start-1 size-6/12 left-24 top-44 opacity-20">
        <img :src="elin" alt="woopss" >
       </div>

       <div class="absolute row-start-3 col-start-2 size-8/12 col-span-4 top-20 left-20 opacity-10">
        <img :src="eliott" alt="woopss" >
       </div>
       

       <div class="absolute row-start-2 col-start-1 size-6/12 left-96 top-36 opacity-70">
        <img :src="eszter" alt="woopss" >
       </div>

       <div class="relative row-start-9 col-start-2 col-span-3 top-72 left-36 size-12/12 opacity-60">
        <img :src="freddy" alt="woopss" >
       </div>

       <div class="absolute row-start-6 col-start-3 col-span-3 size-8/12 left-20 top-20 opacity-10">
        <img :src="gloria" alt="woopss" >
       </div>

       <div class="absolute row-start-6 col-start-3 col-span-2 size-6/12 left-80 top-56 opacity-10">
        <img :src="ida" alt="woopss" >
       </div>

       <div class="absolute row-start-4 col-start-3 size-6/12 left-10 top-36 opacity-10">
        <img :src="johanna" alt="woopss" >
       </div>

       <div class="absolute row-start-6 col-start-1 size-6/12 left-64 top-36 opacity-55">
        <img :src="judith" alt="woopss" >
       </div>

       <div class="absolute row-start-5 col-start-1 size-6/12 left-5 top-20 opacity-10">
        <img :src="lilian" alt="woopss" >
       </div>

       <div class="absolute row-start-6 col-start-1 size-6/12 left-5 top-10 opacity-30">
        <img :src="mohammed" alt="woopss" >
       </div>

       <div class="absolute row-start-5 col-start-3 col-span-2 size-6/12 left-20 top-20 opacity-10">
        <img :src="noam" alt="woopss" >
       </div>

       <div class="absolute row-start-3 col-start-1 size-3/12 left-5 top-24 opacity-20">
        <img :src="omar" alt="woopss" >
       </div>

       <div class="absolute row-start-7 col-start-1 size-6/12 top-10 left-5 opacity-5">
        <img :src="rebecca" alt="woopss" >
       </div>

       <div class="relative row-start-7 col-start-3 size-10/12 top-36 left-5 opacity-0">
        <img :src="Robin" alt="woopss" >
       </div>

       <div class="relative row-start-6 col-start-3 size-10/12 col-span-4 top-80 left-5 opacity-30">
        <img :src="elenor" alt="woopss" >
       </div>

 </div>

   
    
      <!-- my canvas <33 -->
      <div class="absolute inset-0 w-screen h-screen z-10">
        <canvas ref="canvas"></canvas>
      </div>

  </main>
</template>








<script>
import faceoutline01 from '@/assets/pics/faceoutline01.png'; 

import faces from '@/assets/pics/faces.png';
import faces02 from '@/assets/pics/faces02.png';
import faces03 from '@/assets/pics/faces03.png';
import faces04 from '@/assets/pics/faces04.png';
import faces05 from '@/assets/pics/faces05.png';
import faces06 from '@/assets/pics/faces06.png';
import faces07 from '@/assets/pics/faces07.png';
import faces08 from '@/assets/pics/faces08.png';
import bgPic from '@/assets/pics/bgPic.png';
import bgPic02 from '@/assets/pics/bgPic02.png';
import graffitiBrush from '@/assets/pics/graffitiBrush.png'; // Add your graffiti brush image
import paintbrush from '@/assets/pics/paintbrush.png';
import titel from '@/assets/pics/titel.png';
import faces10 from '@/assets/pics/faces10.png'


// namesss!!!!!!!!!!!!!!!!!!
import afra from '@/assets/pics/afra.png';
import ama from '@/assets/pics/ama.png';
import anand from '@/assets/pics/anand.png';
import anastacia from '@/assets/pics/anastacia.png';
import andreas from '@/assets/pics/andreas.png';
import anna from '@/assets/pics/anna.png';
import camille from '@/assets/pics/camille.png';
import chiara from '@/assets/pics/chiara.png';
import elenor from '@/assets/pics/elenor.png';
import elin from '@/assets/pics/elin.png';
import eliott from '@/assets/pics/Eliott.png';
import eszter from '@/assets/pics/eszter.png';
import freddy from '@/assets/pics/freddy.png';
import gloria from '@/assets/pics/gloria.png';
import ida from '@/assets/pics/ida.png';
import johanna from '@/assets/pics/johanna.png';
import judith from '@/assets/pics/judith.png';
import lilian from '@/assets/pics/lilian.png';
import mohammed from '@/assets/pics/mohammed.png';
import noam from '@/assets/pics/noam.png';
import omar from '@/assets/pics/omar.png';
import rebecca from '@/assets/pics/rebecca.png';
import Robin from '@/assets/pics/Robin.png';
import vincent from '@/assets/pics/vincent.png';



export default {
  data() {
    return {
      faces,
      faces02,
      faces03,
      faces04,
      faces05,
      faces06,
      faces07,
      faces08,
      bgPic,
      bgPic02,
      titel,
      faces10,

      afra,
      ama,
      anand,
      anastacia,
      andreas,
      anna,
      camille,
      chiara,
      elenor,
      elin,
      eliott,
      eszter,
      freddy,
      gloria,
      ida,
      johanna,
      judith,
      lilian,
      mohammed,
      noam,
      omar,
      rebecca,
      Robin,
      vincent,




      faceoutline01,
      graffitiBrush, // Add the graffiti brush image to data
      drawing: false,
      brush: null // Add a property to store the brush image
    };
  },

  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext('2d');

    // Set canvas size
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    // Load the brush image
    this.brush = new Image();
    this.brush.src = this.graffitiBrush;
    this.brush.onload = () => {
      // Setup drawing events
      this.canvas.addEventListener('mousedown', this.startDrawing);
      this.canvas.addEventListener('mousemove', this.draw);
      this.canvas.addEventListener('mouseup', this.stopDrawing);
      this.canvas.addEventListener('mouseout', this.stopDrawing);
      this.canvas.addEventListener('contextmenu', this.preventContextMenu);
    };
  },

  methods: {
    startDrawing(event) {
      this.drawing = true;
      this.draw(event); // Draw a dot on mouse click position
    },

    draw(event) {
      if (!this.drawing) return;

      const rect = this.canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Draw the brush image at the current mouse position
      this.ctx.drawImage(this.brush, x - this.brush.width / 2, y - this.brush.height / 2);
    },

    stopDrawing() {
      this.drawing = false;
    },

    preventContextMenu(event) {
      event.preventDefault();
    }
  }
};
</script>




<style scoped>
/* Add your CSS styles here */
.bg-moved-down {
  margin-top: 880px; /* Adjust this value as needed */
  margin-left: 40px;
}

.bg-moved-down02 {
  margin-top: 1630px; /* Adjust this value as needed */
  margin-left: 40px;
}

.title-image {
  transform: scale(3); /* Scale the image to 3 times its original size */
  transform-origin: top left; /* Adjust the origin to control where the scaling is applied from */
  margin-left: 70px;
  margin-top: 50px;
}


</style> 


