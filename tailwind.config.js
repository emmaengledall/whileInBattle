// tailwind.config.js

module.exports = {
  content: [
    './index.html',    // Path to your HTML file
    './src/**/*.vue',  // Path to your Vue component files
    './src/**/*.js',   // Path to your JavaScript files
    // Add more paths as needed for your project
  ],
  theme: {
    extend: {
      fontFamily: {
        'mainFont': ['AndaleMo', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontFamily: {
        'mainFont': ['apparat-light', 'sans-serif'],
      },
        // You can define multiple font families here as per your requirements
    },
  },
  plugins: [],
}


