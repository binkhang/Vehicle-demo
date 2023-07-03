
var carObject = {
    midLane:{
        top: [61, 58, 55, 52, 49, 46, 43, 40, 37, 34],
        left:50,
        height:[90, 83, 76, 69, 62, 55, 48, 41, 34, 27],       
        width:[81, 74.7, 68.4, 62.1, 55.8, 49.5, 43.2, 36.9, 30.6, 24.3],       //width = 0.9height
        nearPath: "/img/car.png", //img path
        avgPath:"/img/car.png",//img path
        longPath:"/img/car.png" //img path
    },
    leftLane:{
        // top: [10,500],
        // left:[10,120],
        // height:[10,60],
        // width:[200,40]
    },
    rightLane:{

    }
};
var mid_lane = document.getElementById('midLane');

//object position
// const intervald = setInterval(updateObject, 1000);
const intervald = setInterval(test, 1000);
/* instance to update midlane object */




function updateMidLaneObject(index,activate) {
    if (activate == 1)
    {
        if (index <3)
            {
                mid_lane.src = carObject.midLane.nearPath;
            }
        
        else if(index>=3 & index <6)
            {
                mid_lane.src = carObject.midLane.avgPath;
            }
        
        else
            {
                mid_lane.src = carObject.midLane.longPath;
            } 
        mid_lane.style.top       = carObject.midLane.top[index]+ '%';
        mid_lane.style.left      = carObject.midLane.left+ '%';
        mid_lane.style.height    = carObject.midLane.height[index] + 'px';
        mid_lane.style.width     = carObject.midLane.width[index] + 'px';
        mid_lane.style.transform = 'translate(-50%,-50%)';
        // console.log("Update object MidLane successfully!");
    }
}
function updateLeftLaneObject(index) {
    // console.log("Update object LeftLane successfully!");
  
}

function updateObject() {
    
    updateLeftLaneObject();
}
let i = 0



function test(){
    updateMidLaneObject(i,0);
    i++;
    console.log(i);
    if (i ==9)
    {
        i = 0
    }
}


test()