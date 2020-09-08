var left=document.querySelector(".bg_left");
document.onmousemove=function(e){
    var nowX=e.clientX;
    left.style.width=`${nowX}px`;
}