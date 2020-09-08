// 获取轮播图片并动态添加图片函数

(function show(){
    // var banner=document.querySelector('.banner');
    // var bannerlist=banner.querySelectorAll('li');
    var focus_area=document.querySelector('.b-focus-area');
    var focus_num=document.querySelector('.b-focus-num');
    var blist=focus_area.querySelector('ul');
    var flag=document.createDocumentFragment();
    var flag1=document.createDocumentFragment();
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
        var r=JSON.parse(xhr.responseText);
        for(let i=0;i<r.length;i++){
            // bannerlist[i].style.backgroundImage=`url(${r[i].avatar})`;
            var li=document.createElement("li");
            li.className="l-focus-area";
            li.style.backgroundImage=`url(${r[i].avatar})`;
            var a=document.createElement('a');
            a.className="slide-link";
            a.href="#";
            li.appendChild(a);
            flag.appendChild(li);
            var span=document.createElement("span");
            flag1.appendChild(span);
        }
        blist.appendChild(flag);
        focus_num.appendChild(flag1);
        focus_num.children[0].className="cur";
        banner();    
    }

    }
    xhr.open('get',`/pro/requireimg/banner`,true);
    xhr.send();
    
})();
// 推荐图片
(function showrecommend(){
    // var rec=document.querySelector('.focus1');
    // var reclist=rec.querySelectorAll('li');
    var ul=document.querySelector('.focus1>div>ul');
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
        var r=JSON.parse(xhr.responseText);
        for(let i=0;i<r.length;i++){
            // var recimg=reclist[i].querySelector('img');
            // var rectext=reclist[i].querySelector('p');
            // recimg.src=`${r[i].avatar}`;
            // rectext.innerText=`${r[i].name}`;
            ul.innerHTML+=`
            <li>
            <a href="#">
                <img class="imgload" src="${r[i].avatar}" alt="${r[i].name}">
            </a>
            <p class="recommend_title">${r[i].name}</p>
            <span class="i_new"></span>
            <div class="recommend-mask">
                <div class="recommend-btn">
                    <a href="#" class="recommend-btn-gw">官网</a>
                    <a href="#" class="recommend-btn-lb">礼包</a>
                    <a href="#" class="recommend-btn-dy">微端</a>
                    <a href="#" class="recommend-btn-in">进入游戏</a>
                </div>
            </div>
        </li>
            `;

        }
        ul.pnum=Math.ceil(r.length/5);
        }
    }
    xhr.open('get',`/pro/requireimg/rec`,true);
    xhr.send();
    
})();
// 热游图片
(function showhotgame(){
    var hot=document.querySelector('.hot-list');
    var hotlist=hot.querySelectorAll('li');
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
        var r=JSON.parse(xhr.responseText);
        for(let i=0;i<r.length;i++){
            var hotimg=hotlist[i].querySelector('.imgload1');
            var hottext=hotlist[i].querySelector('.hot_title');
           hotimg.src=`${r[i].avatar}`;
           hottext.innerText=`${r[i].name}`;
        }
        }
    }
    xhr.open('get',`/pro/requireimg/hot`,true);
    xhr.send();
    
})();
// 手机页游图片
(function showphonegame(){
    var phone=document.querySelector('.classic-list');
    var phonelist=phone.querySelectorAll('li');
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
        var r=JSON.parse(xhr.responseText);
        for(let i=0;i<r.length;i++){
            var phoneimg=phonelist[i].querySelector('.phone');
           phoneimg.src=`${r[i].avatar}`;
        }
        }
    }
    xhr.open('get',`/pro/requireimg/phone`,true);
    xhr.send();
    
})();
// 新游图片
(function shownewgame(){
    var newgame=document.querySelector('.focus2');
    var newgamelist=newgame.querySelectorAll('li');
    // var newgameul=document.querySelector('.focus2>focus_area>ul');
    // console.log(newgameul)
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
        var r=JSON.parse(xhr.responseText);
        for(let i=0;i<r.length-1;i++){
            var newimg=newgamelist[i].querySelector('.imgload');
            var newtext=newgamelist[i].querySelector('.recommend_title');
            newimg.src=`${r[i].avatar}`;
            newtext.innerText=`${r[i].name}`;
        }
        }
    }
    xhr.open('get',`/pro/requireimg/ng`,true);
    xhr.send();
    
})();
// 新游推荐
(function shownewgamerec(){
    var newrec=document.querySelector('.newgame-list');
    var newreclist=newrec.querySelectorAll('li');
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
        var r=JSON.parse(xhr.responseText);
        // console.log(r.length);
        for(let i=0;i<r.length;i++){
            var newrecimg=newreclist[i].querySelector('img');
            var newrectext=newreclist[i].querySelector('.new-name');
            newrecimg.src=`${r[i].avatar}`;
            newrectext.innerText=`${r[i].name}`;
            var newrecp=newreclist[i].querySelectorAll('p');
            newrecp[0].innerText=`${r[i].type}`;
            newrecp[1].innerText=`${r[i].time}`;
        }
        }
    }
    xhr.open('get',`/pro/requireimg3`,true);
    xhr.send();
    
})();
// 活动图片
(function showactivegame(){
    var active=document.querySelector('.c-focus-area');
    var activelist=active.querySelectorAll('li');
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
        var r=JSON.parse(xhr.responseText);
        for(let i=0;i<r.length;i++){
            var activeimg=activelist[i].querySelector('.lazyload');
            activeimg.src=`${r[i].avatar}`;
        }
        }
    }
    xhr.open('get',`/pro/requireimg/active`,true);
    xhr.send();
    
})();
// 热游排行图片
(function showhotrank(){
    var hotrank=document.querySelector('.list');
    var hotranklist=hotrank.querySelectorAll('li');
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
        var r=JSON.parse(xhr.responseText);
        for(let i=0;i<r.length-1;i++){
            var hotrankimg=hotranklist[i].querySelector('.list-img');
            var hotrankname=hotranklist[i].querySelector('.list-name');
            var hotranktype=hotranklist[i].querySelector('.list-type');
            hotrankimg.src=`${r[i].avatar}`;
            hotrankname.innerText=`${r[i].name}`;
            hotranktype.innerText=`${r[i].type}`;
        }
        }
    }
    xhr.open('get',`/pro/requireimg1`,true);
    xhr.send();
    
})();
// 全部游戏图片
(function showallimg(){
    var allimg=document.querySelectorAll('.allimg');
    // console.log(allimg);
    var allimglist0=allimg[0].querySelectorAll('li');
    var allimglist1=allimg[1].querySelectorAll('li');
    var allimglist2=allimg[2].querySelectorAll('li');
    var allimglist3=allimg[3].querySelectorAll('li');
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
        var r=JSON.parse(xhr.responseText);
            for(let j=0;j<allimglist0.length;j++){
            var allimage0=allimglist0[j].querySelector('img');
            allimage0.src=`${r[j].avatar}`;
            }
            for(let i=0,j=7;j<14,i<7;j++,i++){
                var allimage1=allimglist1[i].querySelector('img');
                allimage1.src=`${r[j].avatar}`;
            }
            for(let i=0,j=14;j<21,i<7;j++,i++){
                var allimage2=allimglist2[i].querySelector('img');
                allimage2.src=`${r[j].avatar}`;
            }
            for(let i=0,j=21;j<28,i<7;j++,i++){
                var allimage3=allimglist3[i].querySelector('img');
                allimage3.src=`${r[j].avatar}`;
                }
        }
    }
    xhr.open('get',`/pro/requireimg2`,true);
    xhr.send();
    
})();