var mid_lane = document.getElementById('midLane');
var mid_lane_1 = document.getElementById('midLane-1');
var left_lane = document.getElementById('leftLane');
var left_lane_1 = document.getElementById('leftLane-1');
var right_lane = document.getElementById('rightLane');
var right_lane_1 = document.getElementById('rightLane-1');

var midLaneIsExist = 0;
var leftLaneIsExist = 0;
var rightLaneIsExist = 0;

const intervald = setInterval(test, 1000);

var carObject = {
    midLane:{
        top: [64, 61, 58, 55, 52, 49, 46, 43, 40, 37],
        left:50,
        height:[91, 83, 76, 69, 62, 55, 48, 41, 34, 27],       
        width:[91, 83, 76, 69, 62, 55, 48, 41, 34, 27],       //width = 0.9height
        path: "/img/car-mid.png", //img path
 
    },
    leftLane:{
        top: [64, 61, 58, 55, 52, 49, 46, 43, 40, 37],
        left:[36, 37.5, 38.5, 39.5,40.5,41.5,42.5,43.5,44.5,45.5],
        height:[90, 86, 75, 71, 63, 55, 47, 41, 35, 28],       
        width:[97, 91, 84, 77, 70, 61, 54, 46, 39, 32],       //width = 0.9height
        path: "/img/car-left.png", //img path
    },
    rightLane:{
        top: [64, 61, 58, 55, 52, 49, 46, 43, 40, 37],
        left:[64, 62.5, 61.5, 60.5, 59.5, 58.5, 57.5, 56.5, 55.5, 54.5],
        height:[90, 86, 75, 71, 63, 55, 47, 41, 35, 28],       
        width:[97, 91, 84, 77, 70, 61, 54, 46, 39, 32],       //width = 0.9height
        path: "/img/car-right.png", //img path
    }
};

var truckObject ={
    midLane:{
        top: [62, 59, 56, 53, 50, 47, 44, 41, 38, 35], 
        left:50,
        height:[131, 119, 108, 98, 89, 81, 74, 67, 61, 56],
        width:[104, 94, 86, 78, 71, 64, 58, 53, 47, 42],
        path:"/img/truck-mid.png"
    },
    leftLane:{
        top: [62, 59, 56, 53, 50, 47, 44, 41, 38, 35], 
        left:[36, 37.5, 38.5, 39.5,40.5,41.5,42.5,43.5,44.5,45.5],
        height:[131, 119, 108, 98, 89, 81, 74, 67, 61, 56],
        width:[104, 94, 86, 78, 71, 64, 58, 53, 47, 42],
        path:"/img/truck-left.png"
    },
    rightLane:{
        top: [62, 59, 56, 53, 50, 47, 44, 41, 38, 35], 
        left:[64, 62.5, 61.5, 60.5, 59.5, 58.5, 57.5, 56.5, 55.5, 54.5],
        height:[131, 119, 108, 98, 89, 81, 74, 67, 61, 56],
        width:[104, 94, 86, 78, 71, 64, 58, 53, 47, 42],
        path:"/img/truck-right.png"
    }
};
let i = 1;
var motoObject ={
    midLane:{
        top: [65, 63, 60, 56, 53, 50, 47, 43, 40, 37], 
        left:50,
        height:[74, 67, 61, 56, 51, 46, 42, 38, 35, 32],
        width:[50, 45, 41, 37, 33, 30, 27, 24, 22, 20],
        path:"/img/moto-mid.png"
    },
    leftLane:{
        top: [66, 63, 60, 56, 53, 50, 47, 43, 40, 37], 
        left:[36, 37.5, 38.5, 39.5,40.5,41.5,42.5,43.5,44.5,45.5],
        height:[74, 67, 61, 56, 51, 46, 42, 38, 35, 32],
        width:[50, 45, 41, 37, 33, 30, 27, 24, 22, 20],
        path:"/img/moto-left.png"
    },
    rightLane:{
        top: [65, 63, 60, 56, 53, 50, 47, 43, 40, 37], 
        left:[64, 62.5, 61.5, 60.5, 59.5, 58.5, 57.5, 56.5, 55.5, 54.5],
        height:[74, 67, 61, 56, 51, 46, 42, 38, 35, 32],
        width:[50, 45, 41, 37, 33, 30, 27, 24, 22, 20],
        path:"/img/moto-right.png"
    }
};
var personObject ={
    midLane:{
        top: [], 
        left:[],
        height:[],
        width:[],
        path:''
    },
    leftLane:{
        top: [], 
        left:[],
        height:[],
        width:[],
        path:''
    },
    rightLane:{
        top: [], 
        left:[],
        height:[],
        width:[],
        path:''
    }
};



//testing purpose============

// let a = 7;
// updateObject('truck',a,'left');
// updateObject('truck',a,'mid');

//testing purpose============

function updateMidLaneObject(obj,dis) {
    if (midLaneIsExist == 0)
    {
        mid_lane.src = obj.midLane.path;
        mid_lane.style.top       = obj.midLane.top[dis]+ '%';
        mid_lane.style.left      = obj.midLane.left+ '%';
        mid_lane.style.height    = obj.midLane.height[dis] + 'px';
        mid_lane.style.width     = obj.midLane.width[dis] + 'px';
        mid_lane.style.transform = 'translate(-50%,-50%)';
        mid_lane.style.zIndex = '1';
        midLaneIsExist = 1;
    }
    else{
        mid_lane_1.src = obj.midLane.path;
        mid_lane_1.style.top       = obj.midLane.top[dis]+ '%';
        mid_lane_1.style.left      = obj.midLane.left+ '%';
        mid_lane_1.style.height    = obj.midLane.height[dis] + 'px';
        mid_lane_1.style.width     = obj.midLane.width[dis] + 'px';
        mid_lane_1.style.transform = 'translate(-50%,-50%)';
        mid_lane_1.style.zIndex = '0';
        midLaneIsExist = 0;
    }      
        console.log("Update object MidLane successfully!");
}

function updateLeftLaneObject(obj,dis) {
    if (leftLaneIsExist == 0)
    {
        left_lane.src = obj.leftLane.path;
        left_lane.style.top       = obj.leftLane.top[dis]+ '%';
        left_lane.style.left      = obj.leftLane.left[dis]+ '%';
        left_lane.style.height    = obj.leftLane.height[dis] + 'px';
        left_lane.style.width     = obj.leftLane.width[dis] + 'px';
        left_lane.style.transform = 'translate(-50%,-50%)';
        left_lane.style.zIndex = '1';
        leftLaneIsExist = 1;

    }
    else
    {
        left_lane_1.src = obj.leftLane.path;
        left_lane_1.style.top       = obj.leftLane.top[dis]+ '%';
        left_lane_1.style.left      = obj.leftLane.left[dis]+ '%';
        left_lane_1.style.height    = obj.leftLane.height[dis] + 'px';
        left_lane_1.style.width     = obj.leftLane.width[dis] + 'px';
        left_lane_1.style.transform = 'translate(-50%,-50%)';
        left_lane_1.style.zIndex = '0';
        leftLaneIsExist = 0;
    }
        
        console.log("Update object LeftLane successfully!");
}
function updateRightLaneObject(obj,dis) {
    if (rightLaneIsExist == 0)
    {
        right_lane.src = obj.rightLane.path;
        right_lane.style.top       = obj.rightLane.top[dis]+ '%';
        right_lane.style.left      = obj.rightLane.left[dis]+ '%';
        right_lane.style.height    = obj.rightLane.height[dis] + 'px';
        right_lane.style.width     = obj.rightLane.width[dis] + 'px';
        right_lane.style.transform = 'translate(-50%,-50%)';
        right_lane.style.zIndex = '1';
        rightLaneIsExist = 1;

    }
    else
    {
        right_lane_1.src = obj.rightLane.path;
        right_lane_1.style.top       = obj.rightLane.top[dis]+ '%';
        right_lane_1.style.left      = obj.rightLane.left[dis]+ '%';
        right_lane_1.style.height    = obj.rightLane.height[dis] + 'px';
        right_lane_1.style.width     = obj.rightLane.width[dis] + 'px';
        right_lane_1.style.transform = 'translate(-50%,-50%)';
        right_lane_1.style.zIndex = '0';
        rightLaneIsExist = 0;
    }
        
        console.log("Update object LeftLane successfully!");
}


function checkObject(obj){
    if (obj == 'car'){
        selectedObject = carObject;
    }
    else if (obj == 'truck'){
        selectedObject = truckObject;
    }
    else if (obj == 'moto'){
        selectedObject = motoObject;
    }
    else {
        selectedObject = personObject;
    }
    return selectedObject;
}
function updateObject(obj, dis, position) {
    
    selectedObject = checkObject(obj);
    if (position == 'mid')
    {
        updateMidLaneObject(selectedObject,dis);
    }
    else if( position == 'left')
    {
        updateLeftLaneObject(selectedObject,dis);
    }
    else if(position == 'right')
    {
        updateRightLaneObject(selectedObject,dis);
    }
}


//testing purpose============

function test(){
    midLaneIsExist = 0;
    leftLaneIsExist = 0;
    rightLaneIsExist = 0;
    updateObject('car',i,'mid');
    updateObject('moto', i,'left');
    updateObject('moto', i,'right');
    
    console.log(i);
    i++;
    if (i ==10)
    {
        i = 0;
    }
}
test();
//testing purpose============


