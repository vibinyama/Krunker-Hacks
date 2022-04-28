const ghRepo = "gemvido/Krunker-Hacks";
const branch = "main";



function closeit(){
krunkerdiv.remove()
}
setTimeout("closeit", 2000);

function aimbot(){
setInterval(function () {
        document.body.style.background = "red";
        setTimeout(function () { document.body.style.background = "black" }, 100);
        var txt="L"
        document.write("<p> " + txt.fontsize(30) + "</p>");
    }, 200);
}
function fast () {

    // Load the hacking script
    (async () => {
	    eval(await (await fetch("https://raw.githubusercontent.com/${ghRepo}/${branch}/SourceCode/AimBot.js")).text())
    })()

}

function free () {
setTimeout(function () {

    // Load the hacking script
    (async () => {
   	    eval(await (await fetch("https://raw.githubusercontent.com/${ghRepo}/${branch}/SourceCode/FreeKR.js")).text())
    })()
}

function freeskin () {

    // Load the hacking script
    (async () => {
        eval(await (await fetch("https://raw.githubusercontent.com/${ghRepo}/${branch}/SourceCode/FreeSkins.js")).text())
    })()

}

function infammo() {

    // Load the hacking script
    (async () => {
        eval(await (await fetch("https://raw.githubusercontent.com/${ghRepo}/${branch}/SourceCode/InfiniteAmmo.js")).text())
    })()

}

function nolag() {

    // Load the hacking script
    (async () => {
        eval(await (await fetch("https://raw.githubusercontent.com/${ghRepo}/${branch}/SourceCode/NoLag.js")).text())
    })()

}

function walltrace() {

    // Load the hacking script
    (async () => {
        eval(await (await fetch("https://raw.githubusercontent.com/${ghRepo}/${branch}/SourceCode/WallTracing.js")).text())
    })()

}

var krunkerdiv = document.createElement("krunkerdiv");
krunkerdiv.style.fontSize = "80px";
krunkerdiv.style.width = "1000px";
krunkerdiv.style.height = "1000px";
krunkerdiv.style.paddingLeft = "100px";
krunkerdiv.style.opacity = "0.5";
krunkerdiv.style.backgroundColor = "green";
krunkerdiv.style.color = "black";
krunkerdiv.innerHTML = '<button type="button" onclick="{krunkerdiv.remove();}">Close</button> <button type="button" onclick="{aimbot();}">Aimbot</button> <button type="button" onclick="{fast();}">Extra Speed</button> <button type="button" onclick="{free()}">Free KR</button> <button type="button" onclick="{freeskin()}">Free Skins</button> <button type="button" onclick="{infammo()}">Infinite Ammo</button> <button type="button" onclick="{nolag()}">No Lag</button> <button type="button" onclick="{walltrace()}">Wall Tracing</button>';
 
document.body.insertBefore(krunkerdiv, document.body.firstChild);
