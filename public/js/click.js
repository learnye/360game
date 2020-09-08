
var tab = document.querySelector('.tab');
var list = tab.querySelectorAll('li');
var ulist = document.querySelectorAll('.ulist');
// console.log(ulist);

// var glist=document.querySelector('newgame-list');
// 给3个tab设置索引
for (let i = 0; i < list.length; i++) {
    list[i].setAttribute('index', i);
    list[i].onclick = function () {
        for (let j = 0; j < list.length; j++) {
            list[j].className = "";
        }
        this.className = "cur";
        var index = this.getAttribute('index');
        // console.log(index);
        for (var i = 0; i < ulist.length; i++) {
            ulist[i].style.display = 'none';
        }
        ulist[index].style.display = 'block';
    }

}

// 消除小广告
var t_delete = document.querySelector('.little-title');
function title_click() {
    t_delete.style.display = "none";
}

// 点击按钮更换图片
var flag = 1;
// var focus1 = document.querySelector('.focus1');
// var lis = focus1.querySelectorAll('li');
var rec_ul=document.querySelector('.focus1>div>ul.rec_ul');

function fun1() {
    // console.log(lis);
    if (flag < rec_ul.pnum) {
        rec_ul.style.transform="translateX(-1273px)";
        flag++;
    } else if (flag == rec_ul.pnum) {
        rec_ul.style.transform="translateX(0px)";
        flag=1;
    }
}
function fun2() {
    if (flag < rec_ul.pnum) {
        rec_ul.style.transform="translateX(-1273px)";
        flag++;
    } else if (flag == rec_ul.pnum) {
        rec_ul.style.transform="translateX(0px)";
        flag=1;
    }
}

var flag1=0;
var focus2 = document.querySelector('.focus2');
var lis1 = focus2.querySelectorAll('li');
function fun3() {
    // console.log(lis);
    if (flag1 == 0) {
        for (var i = 0; i < 5; i++) {
            lis1[i].style.transform = "translateX(-1273px)";
            lis1[i+5].style.transform = "translateX(-1273px)";
            flag1 = 1;
        }
    } else if (flag1 == 1) {
        for (var i = 0; i < 5; i++) {
            lis1[i].style.transform = "translateX(0px)";
            lis1[i+5].style.transform = "translateX(0px)";
            flag1 = 0;
        }
    }
}
function fun4() {
    if (flag1 == 0) {
        for (var i = 0; i < 5; i++) {
            lis1[i].style.transform = "translateX(-1273px)";
            lis1[i+5].style.transform = "translateX(-1273px)";
            flag1 = 1;
        }
    } else if (flag1 == 1) {
        for (var i = 0; i < 5; i++) {
            lis1[i].style.transform = "translateX(0px)";
            lis1[i+5].style.transform = "translateX(0px)";
            flag1 = 0;
        }
    }
}
var flag2=0;
var focus3 = document.querySelector('.focus3');
var lis2 = focus3.querySelectorAll('li');
function fun5() {
    // console.log(lis);
    if (flag2 == 0) {
        for (var i = 0; i < 5; i++) {
            lis2[i].style.transform = "translateX(-1271px)";
            lis2[i+5].style.transform = "translateX(-1271px)";
            flag2 = 1;
        }
    } else if (flag2 == 1) {
        for (var i = 0; i < 5; i++) {
            lis2[i].style.transform = "translateX(0px)";
            lis2[i+5].style.transform = "translateX(0px)";
            flag2 = 0;
        }
    }
}
function fun6() {
    if (flag2 == 0) {
        for (var i = 0; i < 5; i++) {
            lis2[i].style.transform = "translateX(-1271px)";
            lis2[i+5].style.transform = "translateX(-1271px)";
            flag2 = 1;
        }
    } else if (flag2 == 1) {
        for (var i = 0; i < 5; i++) {
            lis2[i].style.transform = "translateX(0px)";
            lis2[i+5].style.transform = "translateX(0px)";
            flag2 = 0;
        }
    }
}
// 实现箭头返回页面头部
function to_top() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}
// 动画实现折叠菜单
var navmenu = document.querySelector('.nav_menu');
// console.log(navmenu);
var iconl= navmenu.querySelector('.icon_list');
var gname = navmenu.querySelector('.game-menu');
var state = 0;
function menu() {

    if (state == 0) {
        navmenu.classList.add("menu_active");
        gname.style.display = "block";
        gname.classList.remove("action1");
        gname.classList.add("action");
        state=1;
    }else { 
        navmenu.classList.remove("menu_active");  
        gname.classList.remove("action");
        gname.classList.add("action1");  
        setTimeout(function(){
            gname.style.display = "none";
        },500);    
        state=0;
    }
};
// 获取滚轮在页面上的位置，是侧边栏在一定位置隐藏
var fixed=document.querySelector('.fix-tools');
window.onscroll=function(){
    var y=window.scrollY;
    if(y>=1100){
        fixed.style.display="block";
    }else{
        fixed.style.display="none";
    }
};


