var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d",{antialias:true,antialiasSamples:4});

var width = window.innerWidth; // dimensions of our screen
var height = window.innerHeight; // dimensions of our screen
var level = 1;
var levels = {
    "level-1": {
        "message": "Level 1",
        "gears": [
                  {
                  "position": { "x": 200, "y": 100 },
                  "arms": [
                           { "angle": 20, "length": 120, "speed": 4 },
                           { "angle": 190, "length": 120, "speed": 2 },
                           { "angle": 95, "length": 140, "speed": 2.2 }
                    ]
                  }
                  ]
    },
    "level-2": {
        "gears": [
                  {
                  "position": { "x": 70, "y": 100 },
                  "arms": [
                           { "angle": 220, "length": 50, "speed": 1.6 },
                           { "angle": 190, "length": 20, "speed": 2 },
                           { "angle": 95, "length": 40, "speed": 2.2 }
                           ]
                  },
                  {
                  "position": { "x": 100, "y": 100 },
                  "arms": [
                           { "angle": 220, "length": 50, "speed": 1.6 },
                           { "angle": 190, "length": 20, "speed": 2 },
                           { "angle": 95, "length": 40, "speed": 2.2 }
                           ]
                  }
        ]
    },
    "level-3": {
        "message": "Level 1",
        "gears": [
                  {
                  "position": { "x": 70, "y": 100 },
                  "arms": [
                           { "angle": 220, "length": 50, "speed": 1.6 },
                           { "angle": 190, "length": 20, "speed": 2 },
                           { "angle": 95, "length": 40, "speed": 2.2 }
                           ]
                  },
                  {
                  "position": { "x": 150, "y": 200 },
                  "arms": [
                           { "angle": 220, "length": 50, "speed": 1.6 },
                           { "angle": 190, "length": 20, "speed": 2 },
                           { "angle": 95, "length": 40, "speed": 2.2 }
                           ]
                  },
                  {
                  "position": { "x": 125, "y": 20 },
                  "arms": [
                           { "angle": 220, "length": 50, "speed": 1.6 },
                           { "angle": 190, "length": 20, "speed": 2 },
                           { "angle": 95, "length": 40, "speed": 2.2 }
                           ]
                  }
                  ]
    },
    "level-4": {
        "message": "Level 4",
        "gears": [
                  {
                  "position": { "x": 70, "y": 100 },
                  "arms": [
                           { "angle": 220, "length": 50, "speed": 1.6 },
                           { "angle": 190, "length": 20, "speed": 2 },
                           { "angle": 95, "length": 40, "speed": 2.2 }
                           ]
                  },
                  {
                  "position": { "x": 150, "y": 200 },
                  "arms": [
                           { "angle": 220, "length": 50, "speed": 1.6 },
                           { "angle": 190, "length": 20, "speed": 2 },
                           { "angle": 95, "length": 40, "speed": 2.2 }
                           ]
                  },
                  {
                  "position": { "x": 125, "y": 20 },
                  "arms": [
                           { "angle": 220, "length": 50, "speed": 1.6 },
                           { "angle": 190, "length": 20, "speed": 2 },
                           { "angle": 95, "length": 40, "speed": 2.2 }
                           ]
                  },
                  {
                  "position": { "x": 155, "y": 75 },
                  "arms": [
                           { "angle": 220, "length": 50, "speed": 1.6 },
                           { "angle": 190, "length": 20, "speed": 2 },
                           { "angle": 95, "length": 40, "speed": 2.2 }
                           ]
                  }
                  ]
    },
    "level-5": {
        "message": "Level 5",
        "gears": [
                  {
                  "position": { "x": 30, "y": 50 },
                  "arms": [
                           { "angle": 000, "length": 140, "speed": 2 },
                           { "angle": 090, "length": 140, "speed": 2 },
                           { "angle": 180, "length": 140, "speed": 2 },
                           { "angle": 270, "length": 140, "speed": 2 }
                         ]
                  },
                  {
                  "position": { "x": 70, "y": 100 },
                  "arms": [
                           { "angle": 000, "length": 40, "speed": 2 },
                           { "angle": 045, "length": 50, "speed": 2 },
                           { "angle": 090, "length": 40, "speed": 2 },
                           { "angle": 135, "length": 50, "speed": 2 },
                           { "angle": 180, "length": 40, "speed": 2 },
                           { "angle": 225, "length": 50, "speed": 2 },
                           { "angle": 270, "length": 40, "speed": 2 },
                           { "angle": 315, "length": 50, "speed": 2 },
                        ]

                  },
                  {
                  "position": { "x": 150, "y": 200 },
                  "arms": [
                           { "angle": 000, "length": 40, "speed": 2 },
                           { "angle": 045, "length": 50, "speed": 2 },
                           { "angle": 090, "length": 40, "speed": 2 },
                           { "angle": 135, "length": 50, "speed": 2 },
                           { "angle": 180, "length": 40, "speed": 2 },
                           { "angle": 225, "length": 50, "speed": 2 },
                           { "angle": 270, "length": 40, "speed": 2 },
                           { "angle": 315, "length": 50, "speed": 2 },
                        ]
                  },
                  {
                  "position": { "x": 125, "y": 20 },
                  "arms": [
                           { "angle": 000, "length": 40, "speed": 2 },
                           { "angle": 045, "length": 50, "speed": 2 },
                           { "angle": 090, "length": 40, "speed": 2 },
                           { "angle": 135, "length": 50, "speed": 2 },
                           { "angle": 180, "length": 40, "speed": 2 },
                           { "angle": 225, "length": 50, "speed": 2 },
                           { "angle": 270, "length": 40, "speed": 2 },
                           { "angle": 315, "length": 50, "speed": 2 },
                        ]
                  },
                  {
                  "position": { "x": 300, "y": 220 },
                  "arms": [
                           { "angle": 000, "length": 40, "speed": 2 },
                           { "angle": 045, "length": 50, "speed": 2 },
                           { "angle": 090, "length": 40, "speed": 2 },
                           { "angle": 135, "length": 50, "speed": 2 },
                           { "angle": 180, "length": 40, "speed": 2 },
                           { "angle": 225, "length": 50, "speed": 2 },
                           { "angle": 270, "length": 40, "speed": 2 },
                           { "angle": 315, "length": 50, "speed": 2 },
                        ]
                  }
                  ]
    }
};


canvas.width = width;
canvas.height = height;


 var myFirstCircle;
 // array for gears
 var gears = [];
 var gameOver = false;

 function getRandomInt(min, max) {
     return Math.floor(Math.random() * (max - min)) + min;
 }
//
//// manual audio set-up
//    var audio = document.createElement('audio');
//    audio.src = "data/name.mp3";
//    // we want to load every sound at beg.
//    audio.preload = true;
//    // good for ambient sound
//    audio.loop = false;
//    audio.load();
//    //
//    document.body.appendChild(audio);
//    // i.e. create variables for each element of sound - starting sound, death sound, etc. 
//    varaiable.play();
//


// source: http://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
function loadJSON(path, callback) {
//    console.log("\n\n\n\n Called load file.\n\n\n\n")
    
    var xobj = new XMLHttpRequest();
//    xobj.overrideMimeType("application/json");
    xobj.open('GET', path);
    xobj.send();
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
        
//        console.log("\n\n\n\n Failed to load file.\n\n\n\n", path, xobj.status, xobj.error)
    };
}

function setupLevelGears(levelGears){
    console.log("\n\n\n LEVEL: ", level);
    //clean gears
    gears = [];
    for (var i = 0; i < levelGears.length; i++){
        gears[i] = new Gear(ctx);
        gears[i].setPosition(levelGears[i].position.x, levelGears[i].position.y);
        for(var j = 0; j < levelGears[i].arms.length; j++){
            gears[i].addPoint(
                levelGears[i].arms[j].length,
                levelGears[i].arms[j].angle,
                levelGears[i].arms[j].speed
            );
        }
    }
    level++;
}

function resetCircle(c){
    c.x = width/2;
    c.y = height - 40;
    c.r = 20;
}

function setup(){
    myFirstCircle = new Circle(ctx);
    resetCircle(myFirstCircle)
    // create gears
    
    console.log("\n\n\n\n Ready to read file.\n\n\n\n")
    //loadJSON('levels.json', function(data){
//        levels = data && JSON.parse(data) || levels;
//        gears = [];
//            for (var i = 0; i < levels[]; i++){
//             gears[i] = new Gear(ctx);
//             gears[i].setPosition(getRandomInt(0,width),getRandomInt(0,height));
//             gears[i].addPoint(getRandomInt(1,200),getRandomInt(0,360),getRandomInt(0.5,2));
//             gears[i].addPoint(getRandomInt(1,100),getRandomInt(0,360),getRandomInt(0.6,2));
//             gears[i].addPoint(getRandomInt(1,200),getRandomInt(0,360),getRandomInt(0.5,2));
//             gears[i].addPoint(getRandomInt(1,200),getRandomInt(0,360),getRandomInt(0.5,2));
//             
//            }
             setupLevelGears(levels["level-" + level].gears);
             
             //interaction
             document.addEventListener('touchstart', onTouchStart);
             document.addEventListener('touchend', onTouchEnd);
             
             draw();
    //})
    
//something like this to load the new levels from json file
//    function loadLevel(){
//        var mylevel = allJSONS[0];
//        allJSONS.shift();
//        
//        
//    }
    
    
//    gears[0].setPosition(50,50);
//    
//    gears[1].setPosition(0,460);
//    gears[2].setPosition(50,300);
//    gears[3].setPosition(20,80);
    
//    gears[1].setPosition(50,50);
//    gears[1].addPoint(220,50,1.6);
//    gears[1].addPoint(190,20,2);
//    gears[1].addPoint(95,0,2.2);
//    gears[1].addPoint(50,90,1);
//
//    
//    gears[2].setPosition(0,460);
//    gears[2].addPoint(190,20,1);
//    gears[2].addPoint(95,0,0.5);
//    gears[2].addPoint(50,90,1);
//    
//    gears[3].setPosition(50,300);
//    gears[3].addPoint(100,290,1);
//    



}

function onTouchStart(e){
    myFirstCircle.isAllowToMove = false;
    myFirstCircle.color ="rgba(255,255,255,0.2)";
}
function onTouchEnd(e){
    myFirstCircle.isAllowToMove = true;
    myFirstCircle.color = "rgba(255,255,255,1)";
//    console.log(e);
    
    var mappedSpeedValue = e.changedTouches[0].pageY.map(0,window.innerHeight, 0,8);
        myFirstCircle.speed = mappedSpeedValue;
}

function newLevel(){
    return (myFirstCircle.y - myFirstCircle.r)  > height
}


function draw(){
    ctx.clearRect(0,0,width,height)
    if(!gameOver && newLevel() && levels["level-" + level]){
       resetCircle(myFirstCircle)
       setupLevelGears(levels["level-" + level].gears);
       
        gameOver = false;
    } else if (gameOver) {
        ctx.font = "40px Helevetica";
        ctx.fillText("Game Over",width/2 - 100, height/2);
        ctx.fillStyle = "white";
    } else if(newLevel()) {
        ctx.font = "40px Helevetica";
        ctx.fillText("No more levels: get a life",width/2 - 100, height/2);
        ctx.fillStyle = "white";
    } else {
        // drawing the first circle
        myFirstCircle.display();
        if(myFirstCircle.isAllowToMove){
            myFirstCircle.move();
        }
    
        //everything about the gears
        for(var i = 0; i < gears.length; i++){
            gears[i].display();
            gears[i].update();
            if(myFirstCircle.isAllowToMove && !gameOver){
                gameOver = gears[i].checkIntersection(myFirstCircle);
            }
        }
    }
    requestAnimationFrame(draw);
}



setup();

//utils this is the map function to remap size
Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}