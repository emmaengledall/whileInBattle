<template>
  <main>
    <!-- whole window div -->
    <div class="bg-zinc-100 w-full h-full grid grid-cols-4 grid-rows-24 gap-y-5">
      <!-- Adjusted the grid rows to accommodate extra gap row -->

      <!-- image welcome page -->
      <div class="col-start-3 row-start-1 col-span-2 pt-24 pl-18 opacity-100 size-4/5">
        <img :src="faces" alt="woopss" class="w-full h-auto">
      </div>

      <!-- title for welcome page-->
      <div class="text-6xl pl-24 pt-24 leading-normal col-start-1 col-span-4 row-start-1 z-100 font-mainFont">
        <h1 class="">" WHILE IN BATTLE I'M FREE</h1>
        <h1 class="pl-96">NEVER FREE TO REST ,,</h1>
      </div>

      <!-- Name tingeling -->
      <div class="leading-normal content-center col-start-1 col-span-2 row-start-1 pl-36 pt-96 z-100 flex items-end font-mainFont text-1xl">
        <p>A contemporary dance performance <br> by Hooman Sharifi</p>
      </div>

      <!-- empty rows - so i can separate my things  SPACE -->
      <div class="col-start-1 col-span-4 row-start-2 h-32"></div> <!-- space between big pic and the info text-->
      <div class="col-start-1 col-span-4 row-start-6 h-96"></div> <!-- space between info text and behind bla bla text-->
      <div class="col-start-1 col-span-4 row-start-10 h-72"></div> <!-- space in the bottom of my page -->

      <!-- informative stuff -->
      <div class="col-start-4 col-span-2 row-start-3 z-10 font-mainFont">
        <h1 class="text-4xl">When</h1>
        <p class="text-1xl">25, 26, 27, 28 and 29 th. of June</p>
      </div>
      <div class="col-start-4 col-span-2 row-start-4 z-10 font-mainFont">
        <h1 class="text-4xl">Where</h1>
        <p class="text-1xl">Blågårds plads, Copenhagen N</p>
      </div>
      <div class="col-start-4 col-span-2 row-start-5 z-10 font-mainFont">
        <h1 class="text-4xl">What time</h1>
        <p class="text-1xl">20:00 until 21:30</p>
      </div>
      <div class="col-start-4 col-span-2 row-start-6 z-10 font-mainFont">
        <h1 class="text-4xl">Tickets</h1>
        <p class="text-1xl">This event is free - <br> if you wish to be seated during the event <br> please <a href="https://www.eventim-light.com/dk/a/6268ebc70e2f6b59c13b0fac/s/6655dc75e820523242408abe?lang=da" class="underline">click here</a></p>
      </div>

      <div class="absolute row-start-5 row-span-full col-start-1 col-span-4 opacity-100 size-11/12 bg-moved-down">
  <img :src="bgPic" alt="woopss" class="w-screen h-auto">
</div>


      <!-- faces images - the united peeps-->
      <div class="col-start-2 row-start-3 1 pl-18 opacity-100 size-2/5">
        <img :src="faces02" alt="woopss" class="w-full h-auto">
      </div>
      <div class="col-start-3 row-start-4 pl-18 opacity-100 size-2/5 place-self-center">
        <img :src="faces03" alt="woopss" class="w-full h-auto">
      </div>
      <div class="col-start-2 row-start-5 pl-18 opacity-100 size-2/5 place-self-center">
        <img :src="faces04" alt="woopss" class="w-full h-auto">
      </div>
      <div class="col-start-1 row-start-5 size-2/5 place-self-center">
        <img :src="faces05" alt="woopss" class="w-full h-auto">
      </div>
      <div class="col-start-3 row-start-3 size-2/5 place-self-top">
        <img :src="faces06" alt="woopss" class="w-full h-auto">
      </div>
      <div class="col-start-2 row-start-4 size-2/5 place-self-center">
        <img :src="faces07" alt="woopss" class="w-full h-auto">
      </div>
      <div class="col-start-1 row-start-3 size-2/5 place-self-center">
        <img :src="faces08" alt="woopss" class="w-full h-auto">
      </div>

      <!-- The "what's the performance about" tamtam -->
      <div class="font-mainFont col-start-1 row-start-7 col-span-4 row-span-3 pl-36">
        <h1 class="text-2xl">Behind the performance</h1> <br>
        <p class="text-sm leading-8">
          Forestillingens titel er et citat af medborgerrettighedsaktivisten James Baldwin. While in battle I’m free, never free to rest. Er livet en kamp på liv og død? <br>
          Eller en kraftfuld dansefest, hvis bare vi sætter kroppene fri? <br>
          For den kompromisløse koreograf Sharifi er kunst altid politisk. I en konfliktfyldt tid, hvor grupperinger brydes, slås og går i krig - <br> sætter han ind med et mesterværk om kollektivets sammenhængs- og forandringskraft. <br>
          Om, hvordan der ud af vores forskelle opstår nye muligheder, hvis vi giver plads. Om, hvordan vi alle kæmper for at være frie i verden. I fællesskab, men med hver vores stemme. <br>
          Danserne hvirvler rundt mellem hinanden i intense, sveddryppende koreografier, mens vi som publikum bliver trukket ind i deres univers. <br>
          Vi omringer danserne, mens det dragende soundtrack omslutter os. Neda Sanai har skabt sin egen, særlige musik ved at sample et unikt lydtæppe af iransk folkemusik. <br>
          20 kroppe i konstant bevægelse skaber et nomadisk og menneskeligt ritual, der insisterer på, at vi er en del af den samme uendelige krop, og at vi sætter dens puls fri.
        </p>
      </div>

      <!-- my canvas <33 -->
      <div class="absolute inset-0 w-screen h-screen z-0">
        <canvas ref="canvas"></canvas>
      </div>
    </div>
  </main>
</template>

<script>
import faces from '@/assets/pics/faces.png';
import faces02 from '@/assets/pics/faces02.png';
import faces03 from '@/assets/pics/faces03.png';
import faces04 from '@/assets/pics/faces04.png';
import faces05 from '@/assets/pics/faces05.png';
import faces06 from '@/assets/pics/faces06.png';
import faces07 from '@/assets/pics/faces07.png';
import faces08 from '@/assets/pics/faces08.png';
import bgPic from '@/assets/pics/bgPic.png';
import graffitiBrush from '@/assets/pics/graffitiBrush.png'; // Add your graffiti brush image

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

</style>


