// make your game beatiful 

function r() { return Math.floor(Math.random() * 255); }
function fakk(){ this.style.color = ['rgb(',[r(),r(),r()].join(','),')'].join(''),
this.style.backgroundColor = ['rgb(',[r(),r(),r()].join(','),')'].join(''); }
[].forEach.call(document.all, function(item) {
    setTimeout(function() {fakk.call(item)}, (Math.random()*500)+100)
});

// stolen ngl
