// Load the hack in
Load_KR = false;
if (Load_KR == true) {
    // Load KR Inactive
} else { 
    // Start loading process
    setTimeout(() => {  console.log("Hacking.. 25% complete!"); }, 1000);
}
Loading = false;
if (Loading == true) {
    // Stop Loading
} else {
    setTimeout(() => {  console.log("Hacking.. 50% complete!"); }, 2000);
}

// Make button appear
button = false;
if (button == true) {
  // KR hack false
} else {
    setTimeout(() => {  console.log("Hack Complete!"); }, 3000);
    setTimeout(function () {
        const txt="Flop Like A Fish"
        document.write("" + txt.fontcolor ("green") + "</p>");
   }, 3000);
}

// Make it stylish
    setInterval(function () {
        document.body.style.background = "white";
        setTimeout(function () { document.body.style.background = "black" }, 100);
    }, 200);
