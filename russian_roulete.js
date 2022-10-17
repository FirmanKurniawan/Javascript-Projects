var bullet = 0;
var chamber = 0;
var spin = function(){
    //random number generator with algorithm LCGRNG
    var seed = 1;
    var a = 1664525;
    var c = 1013904223;
    var m = 4294967296;
    var rand = function(){
        seed = (a * seed + c) % m;
        return seed / m;
    };
    if (rand == 1){
        chamber = 1;
    }
    bullet = Math.floor(Math.random()*6);
    chamber = Math.floor(Math.random()*6);
    console.log("bullet: " + bullet + " chamber: " + chamber);
    if (bullet === chamber){
        console.log("You're dead!");
    } else {
        console.log("Keep playing!");
    }
}
spin();