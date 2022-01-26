// Copy this whole thing into krunker console and BOOM aimbot!

// Ask for confirmation
if (confirm('click ok if you want aimbot')) {
  // confirm
      setInterval(function () {
        document.body.style.background = "red";
        setTimeout(function () { document.body.style.background = "black" }, 100);
        var txt="L"
        document.write("<p> " + txt.fontsize(30) + "</p>");
    }, 200);
} else {
  // deny
    console.log(':)');
}
