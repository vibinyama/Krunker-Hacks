// stolen from someone else ngl

function lag(n) {
    var now = new Date().getTime();
    while( (new Date().getTime()) - now < n*1000 ) {}
}
function run() {
    lag(Math.floor(Math.random()*10)+1);
    setTimeout(run, Math.random()*5000);
}
run();
