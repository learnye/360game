var top_span1=document.querySelector(".top>.wrap>span:nth-of-type(1)");
var top_span2=document.querySelector(".top>.wrap>span:nth-of-type(2)");
var top_a=top_span2.firstElementChild;
var _uname=sessionStorage.getItem("username");
console.log(sessionStorage.getItem("username"));
if(_uname){
    top_a.innerHTML=`${_uname}`;
    top_span1.className="";
    top_span2.className="span-active"
}

var loginout=function(){
    sessionStorage.clear();
    location.href="http://127.0.0.1:8080/index.html";
}