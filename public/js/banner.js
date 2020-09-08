var banner=function(){
var focus_area=document.querySelector('.b-focus-area');
var focus_num=document.querySelector('.b-focus-num');
var blist=focus_area.querySelector('ul');
blist.style.left="0px";
var index=0;
var dots=focus_num.querySelectorAll('span');
// 获取当前移动到的圆点并设置样式
function showCurrentDot(){
    for(var i=0;i<dots.length;i++){
        dots[i].className="";
    }
    dots[index].className="cur";
}
function next_banner(){
    index++;
    if(index>dots.length-1){
        index=0;
    }
    showCurrentDot();
    var newleft;
    if(blist.style.left=="-7612px"){
        newleft=0;
    }else{
        newleft=parseInt(blist.style.left)-1903;
    }
    blist.style.left = newleft +"px";
}
function prev_banner(){
    index--;
    if(index<0){
        index=dots.length-1;
    }
    showCurrentDot();
    var newleft;
    if(blist.style.left=="0px"){
        newleft=-7612;
    }else{
        newleft=parseInt(blist.style.left)+1903;
    }
    blist.style.left = newleft +"px";
}
var timer;
function autoplay(){
    timer=setInterval(function(){
        next_banner();
},3000);
}
autoplay();
for(var i=0;i<dots.length;i++){
    (function(i){
        dots[i].onclick=function(){
            var dis=index -i;
            if(index==dots.length-1 && parseInt(blist.style.left)!==-7612){
                dis= dis-dots.length;
            }
            if(index==0 && parseInt(blist.style.left)!==-0){
                dis= dis+dots.length;
            }
            blist.style.left=(parseInt(blist.style.left)+ dis*1903)+"px";
            index=i;
            showCurrentDot();
        }
    })(i);
}
var slide=document.querySelector('.slide');
slide.onmouseenter = function(){
    clearInterval(timer);
}
slide.onmouseleave=function(){
    autoplay();
}
}
