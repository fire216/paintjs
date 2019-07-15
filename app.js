const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
                    //offset -> 캔버스 내에 위치값
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function onMouseDown(event){
    painting = true;
}

if(canvas){
    //마우스를 움직일 때
    canvas.addEventListener("mousemove",onMouseMove);
    //마우스를 클릭했을때
    canvas.addEventListener("mousedown", startPainting);
    //마우스를 클릭을 뗏을 때
    canvas.addEventListener("mouseup", stopPainting);
    //마우스가 캔버스를 벗어났을 때
    canvas.addEventListener("mouseleave", stopPainting);
}