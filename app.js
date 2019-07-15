const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
                    //offset -> 캔버스 내에 위치값
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(event){
    painting = true;
}

function onMouseUp(event){
    stopPainting()
}

if(canvas){
    //마우스를 움직일 때
    canvas.addEventListener("mousemove",onMouseMove);
    //마우스를 클릭했을때
    canvas.addEventListener("mousedown", onMouseDown);
    //마우스를 클릭을 뗏을 때
    canvas.addEventListener("mouseup", onMouseUp);
    //마우스가 캔버스를 벗어났을 때
    canvas.addEventListener("mouseleave", stopPainting);
}