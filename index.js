var mid_lane = document.getElementById('midLane');
var mid_lane_1 = document.getElementById('midLane-1');
var left_lane = document.getElementById('leftLane');
var left_lane_1 = document.getElementById('leftLane-1');
var right_lane = document.getElementById('rightLane');
var right_lane_1 = document.getElementById('rightLane-1');
var left_line = document.getElementById('leftLine');
var right_line = document.getElementById('rightLine');

var midLaneIsExist = 0;
var leftLaneIsExist = 0;
var rightLaneIsExist = 0;

//enum for object
const car = 0;
const truck = 1;
const moto = 2;
const human = 3;
//add new for oject


//enum for Dy
const mid = 0;
const left = 1;
const right = 2;

//enum for Lane Detection
const none = 0;
const blue = 1;
const yellow = 2;
const red = 3;
const leftLine = 0;
const rightLine = 1;
//init size of object // the size at minmum distance
const carHeight = 90; //car's height at minimum distance
const carWidth = 94;  //car's width at minimum distance
const truckHeight = 131;
const truckWidth = 104;
const motoHeight = 74;
const motoWidth = 50;
const humanHeight = 59;
const humanWidth = 59;
//add new for object size




var CAMObject ={
    midLane:{
        top: [74, 70, 66, 62, 58, 54, 50, 46, 42, 38], 
        left:[50,50,50,50,50,50,50,50,50,50],
        path:{
            car: "/img/car-mid.png",
            truck:"/img/truck-mid.png",
            moto: "/img/moto-mid.png",
            human: "img/human.png"
            //add new object path
        }
    },
    leftLane:{
        top: [74, 70, 66, 62, 58, 54, 50, 46, 42, 38], 
        left:[36.5, 37.5, 38.5,39.5,40.5,41.5,42.5,43.5,44.5,45.5],
        path:{
            car: "/img/car-left.png",
            truck:"/img/truck-left.png",
            moto: "/img/moto-left.png",
            human: "img/human.png"
            //add new object path
        }
    },
    rightLane:{
        top: [74, 70, 66, 62, 58, 54, 50, 46, 42, 38], 
        left:[63.5, 62.5, 61.5, 60.5, 59.5, 58.5, 57.5, 56.5, 55.5, 54.5],  
        path:{
            car: "/img/car-right.png",
            truck:"/img/truck-right.png",
            moto: "/img/moto-right.png",
            human: "img/human.png"
            //add new object path
        }
    },
    class:{
        car:{
            height:resizeObjectHeight(carHeight),       
            width:resizeObjectWidth(carWidth)
            
        },
        truck:{
            height:resizeObjectHeight(truckHeight),       
            width:resizeObjectWidth(truckWidth)
            
        },
        moto:{
            height:resizeObjectHeight(motoHeight),       
            width:resizeObjectWidth(motoWidth)       
        },
        human:{
            height: resizeObjectHeight(humanHeight),
            width: resizeObjectWidth(humanWidth)
        }

        //add new object height and width
    }
};

function resizeObjectHeight(height) {
    var result = [height];
  
    for (var i = 1; i < 10; i++) {
      var previousElement = result[i - 1];
      var nextElement = previousElement * 0.9;
      result.push(nextElement);
    }
  
    return result;
}
function resizeObjectWidth(width) {
    var result = [width];
  
    for (var i = 1; i < 10; i++) {
      var previousElement = result[i - 1];
      var nextElement = previousElement * 0.9;
      result.push(nextElement);
    }
  
    return result;
}
  

function updateMidLaneObject(obj,dis) {
    if (midLaneIsExist == 0)
    {
        mid_lane.style.display = 'block';
        mid_lane.src = CAMObject.midLane.path[obj];
        mid_lane.style.top       = CAMObject.midLane.top[dis]+ '%';
        mid_lane.style.left      = CAMObject.midLane.left[dis]+ '%';
        mid_lane.style.height    = CAMObject.class[obj].height[dis] + 'px';
        mid_lane.style.width     = CAMObject.class[obj].width[dis] + 'px';
        mid_lane.style.transform = 'translate(-50%,-100%)';
        mid_lane.style.zIndex = '0';
        midLaneIsExist = 1;
    }
    else{
        mid_lane_1.style.display = 'block';
        mid_lane_1.src = CAMObject.midLane.path[obj];
        mid_lane_1.style.top       = CAMObject.midLane.top[dis]+ '%';
        mid_lane_1.style.left      = CAMObject.midLane.left[dis]+ '%';
        mid_lane_1.style.height    = CAMObject.class[obj].height[dis] + 'px';
        mid_lane_1.style.width     = CAMObject.class[obj].width[dis] + 'px';
        mid_lane_1.style.transform = 'translate(-50%,-100%)';      
        mid_lane_1.style.zIndex = '1';
        midLaneIsExist = 0;
    }      
        console.log("Update object MidLane successfully!");
}

function updateLeftLaneObject(obj,dis) {
    if (leftLaneIsExist == 0)
    {
        left_lane.style.display = 'block';
        left_lane.src = CAMObject.leftLane.path[obj];
        left_lane.style.top       = CAMObject.leftLane.top[dis]+ '%';
        left_lane.style.left      = CAMObject.leftLane.left[dis]+ '%';
        left_lane.style.height    = CAMObject.class[obj].height[dis] + 'px';
        left_lane.style.width     = CAMObject.class[obj].width[dis] + 'px';
        left_lane.style.transform = 'translate(-50%,-100%)';

        left_lane.style.zIndex = '0';
        leftLaneIsExist = 1;

    }
    else
    {
        left_lane_1.style.display = 'block';
        left_lane_1.src = CAMObject.leftLane.path[obj];
        left_lane_1.style.top       = CAMObject.leftLane.top[dis]+ '%';
        left_lane_1.style.left      = CAMObject.leftLane.left[dis]+ '%';
        left_lane_1.style.height    = CAMObject.class[obj].height[dis] + 'px';
        left_lane_1.style.width     = CAMObject.class[obj].width[dis] + 'px';
        left_lane_1.style.transform = 'translate(-50%,-100%)';
        left_lane_1.style.zIndex = '1';
        leftLaneIsExist = 0;
    }
        
        console.log("Update object LeftLane successfully!");
}
function updateRightLaneObject(obj,dis) {
    if (rightLaneIsExist == 0)
    {
        right_lane.style.display = 'block';
        right_lane.src = CAMObject.rightLane.path[obj];
        right_lane.style.top       = CAMObject.rightLane.top[dis]+ '%';
        right_lane.style.left      = CAMObject.rightLane.left[dis]+ '%';
        right_lane.style.height    = CAMObject.class[obj].height[dis] + 'px';
        right_lane.style.width     = CAMObject.class[obj].width[dis] + 'px';
        right_lane.style.transform = 'translate(-50%,-100%)';
        right_lane.style.zIndex = '0';
        rightLaneIsExist = 1;

    }
    else
    {
        right_lane_1.style.display = 'block';
        right_lane_1.src = CAMObject.rightLane.path[obj];
        right_lane_1.style.top       = CAMObject.rightLane.top[dis]+ '%';
        right_lane_1.style.left      = CAMObject.rightLane.left[dis]+ '%';
        right_lane_1.style.height    = CAMObject.class[obj].height[dis] + 'px';
        right_lane_1.style.width     = CAMObject.class[obj].width[dis] + 'px';
        right_lane_1.style.transform = 'translate(-50%,-100%)';
        right_lane_1.style.zIndex = '1';
        rightLaneIsExist = 0;
    }
        
        console.log("Update object LeftLane successfully!");
}


function checkObject(obj){

switch (obj) {
  case car:
    selectedObject = 'car';
    break;
  case truck:
    selectedObject = 'truck';
    break;
  case moto:
    selectedObject = 'moto';
    break;
  case human:
    selectedObject = 'human';
    break;
  default:
    break;
}

    return selectedObject;
}


//The object must be sort (ascending) before display
function updateObject(obj, dis, position) {
    selectedObject = checkObject(obj);
    if (position == mid)
    {
        updateMidLaneObject(selectedObject,dis);
    }
    else if( position == left)
    {
        updateLeftLaneObject(selectedObject,dis);
    }
    else if(position == right)
    {
        updateRightLaneObject(selectedObject,dis);
    }
}
function clearAllObject(){
    mid_lane.style.display = 'none';
    mid_lane_1.style.display = 'none';
    left_lane.style.display = 'none';
    left_lane_1.style.display = 'none';
    right_lane.style.display = 'none';
    right_lane_1.style.display = 'none';
}
function updateLaneDetection(position, color){
    switch(color){
        case none:
            left_line.style.display = 'none';
            right_line.style.display = 'none';
            break;
            
        case blue:
            selectedColor =  'linear-gradient(to right, rgba(7, 219, 247, 0) 0%, rgba(7, 219, 247, 0.5) 50%, rgba(7, 219, 247, 0.5) 90%, rgba(7, 219, 247, 1) 100%)';
            if (position == leftLine){
                left_line.style.display = 'block';
                left_line.style.background = selectedColor;
            }
            else {
                right_line.style.display = 'block';
                right_line.style.background = selectedColor;
            }
            break;
        case yellow:
            selectedColor = 'linear-gradient(to right, rgba(247, 243, 7, 0) 0%, rgba(247, 243, 7, 0.5) 50%, rgba(247, 243, 7, 0.5) 90%, rgba(247, 243, 7, 1) 100%)'
            if (position == leftLine){
                left_line.style.display = 'block';
                left_line.style.background = selectedColor;
            }
            else {
                right_line.style.display = 'block';
                right_line.style.background = selectedColor;
            }
            break;
        case red:
            selectedColor = 'linear-gradient(to right, rgba(247, 7, 7, 0) 0%, rgba(247, 7, 7, 0.5) 50%, rgba(247, 7, 7, 0.5) 90%, rgba(247, 7, 7, 1) 100%)';
            if (position == leftLine){
                left_line.style.display = 'block';
                left_line.style.background = selectedColor;
            }
            else {
                right_line.style.display = 'block';
                right_line.style.background = selectedColor;
            }
            break;

            
    }
}
//testing purpose============
// let i =0;
// // function test(){
// //     midLaneIsExist = 0;
// //     leftLaneIsExist = 0;
// //     rightLaneIsExist = 0;
// //     updateObject(human,i,mid);
// //     updateObject(car,i,left);
// //     updateObject(moto,i,right);

// //     i++;
// //     if (i ==10)
// //     {
// //         i = 0;
// //     }
// // }


//The object must be sort (ascending) before display

function test(){
    clearAllObject();
    var i = Math.floor(Math.random() * 10); //random 1-9 for distance
    var j = Math.floor(Math.random() * 10); //random 1-9 for distance
    var k = Math.floor(Math.random() * 10); //random 1-9 for distance
    var l = Math.floor(Math.random() * 10); //random 1-9 for distance
    var m = Math.floor(Math.random() * 10); //random 1-9 for distance
    var n = Math.floor(Math.random() * 10); //random 1-9 for distance
    
    
    var e = Math.floor(Math.random() * 4); //random 0-3 for object
    var f = Math.floor(Math.random() * 4); //random 0-3 for object
    var g = Math.floor(Math.random() * 4); //random 0-3 for object
    var a = Math.floor(Math.random() * 4); //random 0-3 for Line
    var b = Math.floor(Math.random() * 4); //random 0-3 for Line

    updateObject(e,i,0);
    updateObject(f,j,1);
    updateObject(g,k,2); 
    updateObject(e,l,0);
    updateObject(f,m,1);
    updateObject(g,n,2);

    updateLaneDetection(rightLine, a);
    updateLaneDetection(leftLine, b);
}
const intervald = setInterval(test, 1000);




