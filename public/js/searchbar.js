// 获取搜索框元素
var searchbar=document.querySelector(".nav_search>span>input");
// 设置元素获取焦点事件
var ul=document.querySelector(".search_custom");
window.onload=function(){
var xhr=new XMLHttpRequest();
xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status==200){
    var r=JSON.parse(xhr.responseText);
    var flag=document.createDocumentFragment();
    for(let i=0;i<r.length;i++){
        var li=document.createElement('li');
        var a=document.createElement('a');
        var span0=document.createElement('span');
        span0.className=`search-icon${i}`;
        span0.innerHTML=`0${r[i].pid}`;
        var span1=document.createElement('span');
        span1.innerHTML=`${r[i].name}`;
        span1.className=`search-name`;
        a.appendChild(span0);
        a.appendChild(span1);
        li.appendChild(a);
        flag.appendChild(li);
    }
    
    ul.appendChild(flag);
    }
}
xhr.open('get',`/pro/reqlist`,true);
xhr.send();
}
searchbar.onfocus=function(){
    if(searchbar.value==""){
    ul.style.display="block";
    }
    // ul.innerHTML="";
    this.placeholder="";
}
// 设置元素失去焦点事件
searchbar.onblur=function(){
    this.placeholder="魔域觉醒";
    ul.style.display="none";
    
}
// 设置搜索框输入事件
searchbar.onkeyup=function(e){
    ul.style.display="none";
    if(searchbar.value==""){
        ul.style.display="block";
    }
    if(e.keyCode==13){
        searchgame();
    }
}
function searchgame(){
        var gamename=searchbar.value;
        if(!gamename){
            gamename=searchbar.placeholder;
        }
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
        var r=JSON.parse(xhr.responseText);
        if(r==-1){
            alert('没有该游戏');
        }else{
            location.href=`${r[0].addr}`;
        }
        
        }
    }
        xhr.open('get',`/pro/gameaddr/${gamename}`,true);
        xhr.send();
}
