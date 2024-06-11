<template>
  <main >
  
    <!-- whole window div  -->
<div class="bg-slate-100 absolute w-full h-full"> 
 


    <div class="text-3xl pt-24 pl-36 leading-normal">
    <h1>" WHILE IN BATTLE</h1>
    <h1 class="pl-40">I'M FREE</h1> 
    <h1>NEVER</h1>
    <h1 class="pl-20">FREE TO REST ,,</h1>
    </div>

    <div>
    <p class="pl-80 pt-36"> A preformance by Hooman Sharifi
    </p>
   </div>

    <div>
      <canvas ref="canvas" class="absolute inset-10 w-screen h-screen"></canvas>
    </div>



  </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      drawing: false,
      maxLineWidth: 10, // Maximum line width for the brush effect
      minLineWidth: 1,  // Minimum line width for the brush effect
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
    this.ctx.strokeStyle = 'black'; // Change this to any color you want

    // Setup drawing events
    this.canvas.addEventListener('mousedown', this.startDrawing);
    this.canvas.addEventListener('mousemove', this.draw);
    this.canvas.addEventListener('mouseup', this.stopDrawing);
    this.canvas.addEventListener('mouseout', this.stopDrawing);
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
    }
  }
};
</script>

<style scoped>
/* Tailwind CSS styles */
.content {
  /* Your Tailwind styles for website content */
}
</style>
