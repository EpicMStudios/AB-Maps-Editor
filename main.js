var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var mousePos = {x:0, y:0};
var roomPositions = [];

canvas.addEventListener('mousedown', function(evt) {
mousePos = getMousePos(canvas, evt);
clickEvent();

}, false);
function room(x, y, floor) {
    this.x = x;
    this.y = y;
    this.floor = floor;
}
function hall(x1, y1, x2, y2, floor) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.floor = floor;
}
function drawCircle(posx, posy){
    ctx.beginPath();
    ctx.arc(posx,posy,10,0,2*Math.PI);
    ctx.fillStyle = '#111111';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#ff7700'
    ctx.stroke();
}
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
    };
}
function updateRooms(){
    for(var i = 0; i< roomPositions.length; i++){
        drawCircle(roomPositions[i].x, roomPositions[i].y);
    }
}
function clickEvent(){
    roomPositions.push(new room(mousePos.x, mousePos.y,1));
    updateRooms();
    console.log("CLICK EVENT");
}