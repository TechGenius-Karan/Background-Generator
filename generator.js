var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var color = document.getElementById("color");
var color3 = document.getElementById("color3");

console.log()

color1.addEventListener("input", function(){
	body.style.background = "linear-gradient(to right , " + color1.value +" ," + color2.value +")";
})

color2.addEventListener("input", function(){
	body.style.background = "linear-gradient(to right , " + color1.value +" ," + color2.value +")";
})

    function generateColor() {
      let color = '#';
      let digits = '0123456789ABCDEF';
      for (let i = 0; i < 6; i++) {
        // generate a random number between 0 and 15
        let randomDigit = Math.floor(Math.random() * 16);
        // append the random number to the color string
        color += digits[randomDigit];
      }
      // set the text value and background color to the random color
      document.getElementById('color').innerHTML = color;
      document.body.style.background = "linear-gradient(to right , " + color + " , red )";
    }

    // call the function when the page loads
    randomColor();

    function generateColor2() {
      let color3 = '#';
      let digits = '0123456789ABCDEF';
      for (let i = 0; i < 6; i++) {
        // generate a random number between 0 and 15
        let randomDigit = Math.floor(Math.random() * 16);
        // append the random number to the color string
        color3 += digits[randomDigit];
      }
      // set the text value and background color to the random color
      document.getElementById('color3').innerHTML = color3;
      document.body.style.background = "linear-gradient(to right , " + color3 + ", blue)";
    }

    // call the function when the page loads
    randomColor2();
    
