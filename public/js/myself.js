(function(){
    var dividepage=document.querySelector('.dividepage');
    var $name1 = sessionStorage.getItem("username"); 
    if($name1){
    // 获取所有游戏数据
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var r = JSON.parse(xhr.responseText);
        var gamenum=Math.ceil(r.length/4);
        var pd="";
        if(gamenum>1){
        for(var i=1;i<gamenum;i++){
            pd+=`
            <div class="page_border page_padding page_bgc page_hover">${i+1}</div>
            `
        }
        }
        dividepage.innerHTML=`
        <div class="page_border page_padding page_bgc page_hoverDisable">上一页</div>
        <div class="page_border page_padding page_bgc page_checked">1</div>
        `+pd+`<div class="page_border page_padding page_bgc page_hover">下一页</div>`;
    }
    }
    xhr.open('get', `/pro/mygamelength/${$name1}`, true);
    xhr.send();
    }
})();
(function () {
    var top_span1=document.querySelector(".top>.wrap>span:nth-of-type(1)");
    var top_span2=document.querySelector(".top>.wrap>span:nth-of-type(2)");
    var top_a=top_span2.firstElementChild;
    var username=document.querySelector('.user-title-c>.user-info>p>.name');
    var usertitle=document.querySelector('.user-title');
    var detail=document.querySelectorAll(".details");
    // console.log(username);
    var $name = sessionStorage.getItem("username"); 
    // console.log($name);
    var logout=top_span2.children[1];
    logout.onclick=function(){
    sessionStorage.clear();
    location.href="http://127.0.0.1:8080/myself.html";
    }
    var usernav = document.querySelector(".user-nav");
    var title = document.querySelector(".details>.title");
    var li = usernav.querySelectorAll("li:not(:last-child)");
    var details = document.querySelector('.details-content');
    var gameul = document.querySelector('.details-content>.content-game>ul');
    // console.log(gameul);
    var option = details.children;
    // 事件委托，将单击事件绑定到ul元素上
    usernav.onclick = function (e) {
        //判断点击的节点是否为span元素 
        if (e.target.nodeName == "SPAN") {
            // 对列表进行遍历，将设置过的样式清空
            for (var key of li) {
                key.className = "";
            }
            title.innerHTML = e.target.innerText;
            // 重新给点击的父节点设样式
            e.target.parentNode.className = "active";
            for (let i = 0; i < li.length; i++) {
                option[i].style.display = "none";
                if (li[i].className == "active") {
                    option[i].style.display = "block";
                }
            }
        }
    }
    // 获取下标点击元素
    var dividepage=document.querySelector('.dividepage');
    var dividechecked=dividepage.querySelector('.page_checked');
    var $page=dividechecked.innerHTML
    // console.log($page);
    if($name){
        top_a.innerHTML=`${$name}`;
        username.innerHTML=`${$name}`;
        top_span1.className="";
        top_span2.className="span-active"
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var r = JSON.parse(xhr.responseText);
            // console.log(r);
            if (r == -1) {
                gameul.children[0].style.display = "block";
            } else {
                gameul.children[0].style.display = "none";
                for (let i = 0; i < r.length; i++) {
                    gameul.innerHTML+=`
                    <li>
                        <a href="#" class="game-image" style="background-image:url(${r[i].gpicture})">
                        <p>进入游戏</p>
                        </a>
                        <div class="game-list">
                            <p>游戏名称：<span>${r[i].gname}</span></p>
                            <div class="list">
                                <div class="turn left"></div>
                                <div class="server-warp">
                                    <ul class="server-list">
                                        <li>
                                            <a href="#">${r[i].area}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="turn right"></div>
                             </div>
                        </div>
                    </li>
                    `;
                }
            }
        }
    }
    xhr.open('get', `/pro/mygame/${$name}&${$page}`, true);
    xhr.send();
    }else{
        usertitle.children[0].style.display="none";
        usertitle.children[1].style.display="block";
        detail[0].style.display="none";
        detail[1].style.display="block";
    }
})();

(function(){
    var dividepage=document.querySelector('.dividepage');
    
    var gameul = document.querySelector('.details-content>.content-game>ul');
    var $name = sessionStorage.getItem("username"); 
    dividepage.onclick=function(e){
        var divgame=dividepage.querySelectorAll('div');
        var dividechecked=dividepage.querySelector('.page_checked');
        var $page=dividechecked.innerHTML
        // 判断点击的是上一页子元素
        if(e.target.innerText=="上一页"){
            if($page=1){
                $page=1;
            }else{
                $page--;
            }
            // 样式转换
            for(let i=0;i<divgame.length;i++){
                e.target.parentNode.children[i].classList.remove('page_checked');
                if(e.target.parentNode.children[i].innerHTML==$page){
                    e.target.parentNode.children[i].classList.add('page_checked');
                }
            }
            // 判断下标数字变化转样式
            if($page==(divgame.length-2)){
                // console.log(divgame[0]);
                divgame[0].classList.remove('page_hoverDisable');
                divgame[0].classList.add('page_hover');
                divgame[divgame.length-1].classList.add('page_hoverDisable');
                divgame[divgame.length-1].classList.remove('page_hover');
            }else{
                divgame[divgame.length-1].classList.remove('page_hoverDisable');
                divgame[divgame.length-1].classList.add('page_hover');
                divgame[0].classList.add('page_hoverDisable');
                divgame[0].classList.remove('page_hover');
            }
        }
        // 判断点击的是下一页子元素
        if(e.target.innerText=="下一页"){
            if($page=divgame.length-2){
                $page=divgame.length-2;
            }else{
                $page++;
            }
            for(let i=0;i<divgame.length;i++){
                e.target.parentNode.children[i].classList.remove('page_checked');
                if(e.target.parentNode.children[i].innerHTML==$page){
                    e.target.parentNode.children[i].classList.add('page_checked');
                }
            }
            // 判断下标数字变化转样式
            if($page==(divgame.length-2)){
                // console.log(divgame[0]);
                divgame[0].classList.remove('page_hoverDisable');
                divgame[0].classList.add('page_hover');
                divgame[divgame.length-1].classList.add('page_hoverDisable');
                divgame[divgame.length-1].classList.remove('page_hover');
            }else{
                divgame[divgame.length-1].classList.remove('page_hoverDisable');
                divgame[divgame.length-1].classList.add('page_hover');
                divgame[0].classList.add('page_hoverDisable');
                divgame[0].classList.remove('page_hover');
            }
        }
        // 定义正则判断是否为数字
        var RegExp=/(^[\-0-9][0-9]*(.[0-9]+)?)$/;
        if(RegExp.test(e.target.innerText)){
            // 对所有子元素进行移除page_checked类
            for(let i=0;i<divgame.length;i++){
                e.target.parentNode.children[i].classList.remove('page_checked');
            }
            // 设置点击的元素添加page_checked
            e.target.classList.add('page_checked');
            $page=e.target.innerText;
            // console.log(divgame.length-2);
            // 判断下标数字变化转样式
            if($page==(divgame.length-2)){
                // console.log(divgame[0]);
                divgame[0].classList.remove('page_hoverDisable');
                divgame[0].classList.add('page_hover');
                divgame[divgame.length-1].classList.add('page_hoverDisable');
                divgame[divgame.length-1].classList.remove('page_hover');
            }else{
                divgame[divgame.length-1].classList.remove('page_hoverDisable');
                divgame[divgame.length-1].classList.add('page_hover');
                divgame[0].classList.add('page_hoverDisable');
                divgame[0].classList.remove('page_hover');
            }
        }
        // console.log($page);
        gameul.innerHTML="";
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var r = JSON.parse(xhr.responseText);
            // console.log(r);
            if (r != -1) {
                for (let i = 0; i < r.length; i++) {
                    gameul.innerHTML+=`
                    <li>
                        <a href="#" class="game-image" style="background-image:url(${r[i].gpicture})">
                        <p>进入游戏</p>
                        </a>
                        <div class="game-list">
                            <p>游戏名称：<span>${r[i].gname}</span></p>
                            <div class="list">
                                <div class="turn left"></div>
                                <div class="server-warp">
                                    <ul class="server-list">
                                        <li>
                                            <a href="#">${r[i].area}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="turn right"></div>
                             </div>
                        </div>
                    </li>
                    `;
                }
            }
        }
    }
    xhr.open('get', `/pro/mygame/${$name}&${$page}`, true);
    xhr.send();
    }

})()