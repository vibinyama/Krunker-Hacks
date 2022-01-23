// Copy and paste this whole thing into krunker console, then wait 3 seconds and BOOM you gots wall tracing!!!

// Load the hack in
Load_Walls = false;
if (Load_Walls == true) {
    // Load Walls Inactive
} else { 
    // Start loading process
    setTimeout(() => {  console.log("Hacking.. 25% complete!"); }, 1000);
}
Tracing = false;
if (Tracing == true) {
    // Stop Tracing
} else {
    setTimeout(() => {  console.log("Hacking.. 50% complete!"); }, 2000);
}

// Make button appear
button = false;
if (button == true) {
  // Skins hack false
} else {
    setTimeout(() => {  console.log("Hack Complete!"); }, 3000);
    setTimeout(function () {
        window.open(
        "https://e621.net/");
   }, 3000);
}
