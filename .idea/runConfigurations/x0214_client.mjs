// Just config files for the GitHub, move along...



/*

const ghRepo = "gemvido/Krunker-Hacks";
const branch = "main";


*/




(async () => {
        eval(await (await fetch(`https://raw.githubusercontent.com/${ghRepo}/${branch}/SourceCode/Server.js`)).text())
})()