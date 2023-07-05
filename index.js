
var carObject = {
    midLane:{
        top: [61, 58, 55, 52, 49, 46, 43, 40, 37, 34],
        left:50,
        height:[90, 83, 76, 69, 62, 55, 48, 41, 34, 27],       
        width:[81, 74.7, 68.4, 62.1, 55.8, 49.5, 43.2, 36.9, 30.6, 24.3],       //width = 0.9height
        nearPath: "/img/car-nearview.png", //img path
        // avgPath:"/img/car-nearview.png",//img path
        // longPath:"/img/car-nearview.png" //img path
    },
    leftLane:{
        top: [61, 58, 54, 52, 49, 46, 43, 40, 37, 34],
        left:[37, 38, 40, 41],
        height:[88, 85, 76, 68, 62, 55, 48, 41, 34, 27],       
        width:[97, 94, 86, 80, 55.8, 49.5, 43.2, 36.9, 30.6, 24.3],       //width = 0.9height
        nearPath: "/img/car-left.png", //img path
    },
    rightLane:{

    }
};
var mid_lane = document.getElementById('midLane');
var left_lane = document.getElementById('leftLane');

//object position
// const intervald = setInterval(updateObject, 1000);
// const intervald = setInterval(test, 1000);
/* instance to update midlane object */




function updateMidLaneObject(index,activate) {
    if (activate == 1)
    {
        mid_lane.src = carObject.midLane.nearPath;
        mid_lane.style.top       = carObject.midLane.top[index]+ '%';
        mid_lane.style.left      = carObject.midLane.left+ '%';
        mid_lane.style.height    = carObject.midLane.height[index] + 'px';
        mid_lane.style.width     = carObject.midLane.width[index] + 'px';
        mid_lane.style.transform = 'translate(-50%,-50%)';
        mid_lane.style.zIndex = '1';
    
        console.log("Update object MidLane successfully!");
    }
}
function updateLeftLaneObject(index,activate) {

    
    if (activate == 1)
    {
        left_lane.src = carObject.leftLane.nearPath;
        left_lane.style.top       = carObject.leftLane.top[index]+ '%';
        left_lane.style.left      = carObject.leftLane.left[index]+ '%';
        left_lane.style.height    = carObject.leftLane.height[index] + 'px';
        left_lane.style.width     = carObject.leftLane.width[index] + 'px';
        left_lane.style.transform = 'translate(-50%,-50%)';
        left_lane.style.zIndex = '1';

        console.log("Update object LeftLane successfully!");
    }
}

function updateObject() {
    
    updateLeftLaneObject();
}
let i = 0



function test(){
    updateMidLaneObject(i,1,0   );
    i++;
    console.log(i);
    if (i ==9)
    {
        i = 0
    }
}

updateMidLaneObject(4,1)
updateLeftLaneObject(3,1)