<template>
  <main>


    <!-- whole window div -->
    <div class="bg-zinc-100 w-full h-full grid grid-cols-4 grid-rows-24 gap-x-10 gap-y-20">
      <!-- Adjusted the grid rows to accommodate extra gap row -->




      <!-- image welcome page -->
      <div class="col-start-3 row-start-1 col-span-2 pt-24 pl-18 opacity-100 size-4/5 gap-x-10">
        <img :src="faces" alt="woopss" class="w-full h-auto">
      </div>

      <!-- title for welcome page-->
      <div class="text-6xl pl-24 pt-24 leading-normal font-serif col-start-1 col-span-4 row-start-1 z-10">
        <h1 class="">" WHILE IN BATTLE I'M FREE</h1>
        <h1 class="pl-96">NEVER FREE TO REST ,,</h1>
      </div>

      <!-- Name tingeling -->
      <div class="leading-normal content-center font-serif col-start-1 col-span-2 row-start-1 pl-36 pt-96 flex items-end z-10">
        <p>A contemporary dance performance <br> by Hooman Sharifi</p>
      </div>




      <!-- empty rows - so i can seperate my things  -->
      <div class="col-start-1 col-span-4 row-start-2 h-20"></div>

      <div class="col-start-1 col-span-4 row-start-7 h-10"></div>






      <!-- informative stuff -->
      <div class="col-start-4 col-span-2 row-start-3 z-10">
        <h1 class="text-2xl">When</h1>
        <p class="text-sm">25, 26, 27, 28 and 29 th. of June</p>
      </div>

      <div class="col-start-4 col-span-2 row-start-4 z-10">
        <h1 class="text-2xl">Where</h1>
        <p class="text-sm">Blågårds plads, Copenhagen N</p>
      </div>

      <div class="col-start-4 col-span-2 row-start-5 z-10">
        <h1 class="text-2xl">What time</h1>
        <p class="text-sm">20:00 until 21:30</p>
      </div>

      <div class="col-start-4 col-span-2 row-start-6 z-10">
        <h1 class="text-2xl">Tickets</h1>
        <p class="text-sm">This event is free - <br> if you wish to be seated during the event <br> please click here</p>
      </div>




      <!-- faces images - the united peeps-->
      <div class="col-start-2 row-start-3 col-span-1 pt-24 pl-18 opacity-100 size-2/5">
        <img :src="faces02" alt="woopss" class="w-full h-auto">
      </div>

      <div class="col-start-3 row-start-4 col-span-1 pt-24 pl-18 opacity-100 size-2/5">
        <img :src="faces03" alt="woopss" class="w-full h-auto">
      </div>

      <div class="col-start-2 row-start-5 col-span-1 pt-24 pl-18 opacity-100 size-2/5">
        <img :src="faces04" alt="woopss" class="w-full h-auto">
      </div>



      <!-- The "whats the preformance about" tamtam-->
      <div class="col-start-1 col-span-3 row-span-9 pl-36">
        <h1 class="text-2xl">Behind the preformance</h1> <br>
        <p class="text-sm leading-5"> Forestillingens titel er et citat af medborgerrettighedsaktivisten James Baldwin. While in battle I’m free, never free to rest. Er livet en kamp på liv og død? <br>
           Eller en kraftfuld dansefest, hvis bare vi sætter kroppene fri? <br>
          For den kompromisløse koreograf Sharifi er kunst altid politisk. I en konfliktfyldt tid, hvor grupperinger brydes, slås og går i krig, sætter han ind med et mesterværk om kollektivets sammenhængs- og forandringskraft. <br>
          Om, hvordan der ud af vores forskelle opstår nye muligheder, hvis vi giver plads. Om, hvordan vi alle kæmper for at være frie i verden. I fællesskab, men med hver vores stemme. <br>
          Danserne hvirvler rundt mellem hinanden i intense, sveddryppende koreografier, mens vi som publikum bliver trukket ind i deres univers. <br>
          Vi omringer danserne, mens det dragende soundtrack omslutter os. Neda Sanai har skabt sin egen, særlige musik ved at sample et unikt lydtæppe af iransk folkemusik. <br>
          20 kroppe i konstant bevægelse skaber et nomadisk og menneskeligt ritual, der insisterer på, at vi er en del af den samme uendelige krop, og at vi sætter dens puls fri.</p>
      </div>







      <!-- my canvas <33 -->
      <div class="absolute inset-10 w-screen h-screen z-50">
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

export default {
  data() {
    return {
      faces, // bind the image
      faces02, // bind the image
      faces03,
      faces04,
      drawing: false,
      maxLineWidth: 10, // Maximum line width for the brush effect
      minLineWidth: 1, // Minimum line width for the brush effect
      lineWidthStep: 0.2, // Step for increasing/decreasing line width
      currentLineWidth: 1 // Current line width
    };
  },

  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext('2d');

    // Set canvas size
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    // Set initial line properties
    this.ctx.strokeStyle = 'red'; // Change this to any color you want

    // Setup drawing events
    this.canvas.addEventListener('mousedown', this.startDrawing);
    this.canvas.addEventListener('mousemove', this.draw);
    this.canvas.addEventListener('mouseup', this.stopDrawing);
    this.canvas.addEventListener('mouseout', this.stopDrawing);
    this.canvas.addEventListener('contextmenu', this.preventContextMenu);
  },

  methods: {
    startDrawing(event) {
      // Start drawing
      this.drawing = true;
      const rect = this.canvas.getBoundingClientRect();
      this.lastX = event.clientX - rect.left;
      this.lastY = event.clientY - rect.top;
      this.ctx.lineWidth = this.minLineWidth; // Start with thin line
      this.currentLineWidth = this.minLineWidth;
      this.draw(event); // Draw a dot on mouse click position
    },

    draw(event) {
      if (this.drawing) {
        const rect = this.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Adjust line width
        if (this.currentLineWidth < this.maxLineWidth) {
          this.currentLineWidth += this.lineWidthStep;
        }
        this.ctx.lineWidth = this.currentLineWidth;

        // Draw on canvas
        this.ctx.beginPath();
        this.ctx.moveTo(this.lastX, this.lastY);
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
        this.lastX = x;
        this.lastY = y;
      }
    },

    stopDrawing(event) {
      // Gradually decrease the line width to the minimum
      const decreaseLineWidth = () => {
        if (this.currentLineWidth > this.minLineWidth) {
          this.currentLineWidth -= this.lineWidthStep;
          this.ctx.lineWidth = this.currentLineWidth;
          requestAnimationFrame(decreaseLineWidth);
        } else {
          this.drawing = false;
        }
      };

      decreaseLineWidth();
    },

    preventContextMenu(event) {
      event.preventDefault();
    }
  }
};
</script>



<style scoped>
/* Prevent text selection for the entire page */
* {
  user-select: none;
}
</style>

