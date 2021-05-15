var ball;

function setup(){
    database=firebase.database()
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballref=database.ref('ball/position')
    ballref.on("value",readposition,errormessage)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        updateposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        updateposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        updateposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        updateposition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function readposition(data){
    position=data.val()
    ball.x=position.x
    ball.y=position.y
}
function errormessage(){
    console.log("error in database")
}
function updateposition(x,y){
database.ref('ball/position').update({
    x:position.x+x,
    y:position.y+y
})
}