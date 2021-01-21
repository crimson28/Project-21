//Namespacing


var bullet,ground,thickness;
var speed, weight;


function setup(){
    var canvas = createCanvas(1600,400);
    thickness= random(22,83);
    speed= random(22,200);
    weight= random(30,52);

    ground= createSprite(1200,200,50,800);
    ground.shapeColor= "blue";

    bullet= createSprite(50,200,50,5);
    bullet.shapeColor="white";
    bullet.velocityX= speed;
    
    
}

function draw(){
    background(0);

    

   

    if (hasCollided(bullet,ground)){
        bullet.velocityX= 0;
        var damage= 0.5 * weight * speed * speed/(thickness * thickness * thickness);

        if (damage>10){
            ground.shapeColor= "RED";
        }

        if (damage<10){
            ground.shapeColor="GREEN";

        }
    }
   

    drawSprites();
}

function hasCollided(bullet1,ground1){
    bulletRightEdge= bullet1.x+ bullet1.width;
    groundLeftEdge= ground1.x;

    if (bulletRightEdge>= groundLeftEdge){
        return true;
    } return false;
}

