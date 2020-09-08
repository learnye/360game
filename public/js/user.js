

// 登录注册切换
var tab_title = document.querySelector('.tab-title');
var tspan = tab_title.querySelectorAll('span');
// console.log(tspan);
var login_wrap = document.querySelector('.login-wrap');
var register_wrap = document.querySelector('.register-wrap');
for (let i = 0; i < tspan.length; i++) {
    tspan[i].setAttribute('index', i);
    tspan[i].onclick = function () {
        for (let j = 0; j < tspan.length; j++) {
            tspan[j].className = "";
        }
        this.className = "cur";
        var index = this.getAttribute('index');
        if (index == 0) {
            login_wrap.style.display = "block";
            register_wrap.style.display = "none"
        } else if (index == 1) {
            login_wrap.style.display = "none";
            register_wrap.style.display = "block"
        }
    }
}
// 用户登录函数
function login() {
    var $uname = uname.value;
    var $upwd = upwd.value;
    if (!$uname) {
        alert('用户名为空');
        return;
    }
    if (!$upwd) {
        alert('密码为空');
        return;
    }
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var r = xhr.responseText;
            if (r == -1) {
                alert('登录失败，用户名或密码错误');
                location.href = "http://127.0.0.1:8080/user.html";
            } else {
                alert('登录成功');
                sessionStorage.setItem('username',JSON.parse(r)[0].g_uname);
                location.href = `http://127.0.0.1:8080/index.html`;
            }
        }
    }
    xhr.open('get', `/pro/login/${$uname}&${$upwd}`, true);
    xhr.send();
}
// 检测用户名格式
function checkuname() {
    var _g_uname = g_uname.value;
    var t1 = document.querySelector('.t1');
    if (_g_uname.length < 2 || _g_uname.length > 14) {
        t1.innerHTML = "用户名应为2-14个字符,支持中英文、数字或\"_\"";
        t1.style.color = "red";
    } else {
        t1.innerHTML = "2-14个字符：英文、数字或中文";
        t1.style.color = "#959393";
    }
}
//检测密码格式
function checkupwd() {
    var _g_upwd = g_upwd.value;
    var t2 = document.querySelector('.t2');
    if (_g_upwd.length < 8 || _g_upwd.length > 20) {
        t2.innerHTML = "密码应为8-20位字符，请重新输入";
        t2.style.color = "red";
    } else {
        t2.innerHTML = "8-20个字符(区分大小写)";
        t2.style.color = "#959393";
    }
}
// 验证密码是否一致
function checkagain() {
    var _g_upwd = g_upwd.value;
    var _gupwd = gupwd.value;
    var t3 = document.querySelector('.t3');
    if (_gupwd !== _g_upwd) {
        t3.innerHTML = "两次密码输入不一致";
        t3.style.color = "red";
    } else {
        t3.innerHTML = "请再次输入密码";
        t3.style.color = "#959393";
    }
}
// 随机产生4位验证码
function code() {
    var count = 0, str = '', g;
    for (; count <= 3;) {
        g = parseInt(Math.random() * 123);
        if ((g >= 48 && g <= 57) || (g >= 65 && g <= 90) || (g >= 97 && g <= 122)) {
            str += String.fromCharCode(g);
            count++;
        }
    }
    yzcode.innerHTML=str;
}
code();
// 用户注册函数
function register() {
    var _g_uname = g_uname.value;
    var _g_upwd = g_upwd.value;
    var _gupwd = gupwd.value;
    var code=numcode.value;
    var t1 = document.querySelector('.t1');
    var t2 = document.querySelector('.t2');
    var t3 = document.querySelector('.t3');
    if(!_g_uname || !_g_upwd || !_gupwd){
        alert('信息请填写完整');
        return;
    }
    if(t1.style.color=="red" || t2.style.color=="red" || t2.style.color=="red"){
        alert('请正确填写注册信息');
        return;
    }
    if(code.toUpperCase()!=yzcode.innerHTML.toUpperCase()){
        alert('验证码输入错误');
        return;
    }
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            var r=xhr.responseText;
            if(r==1){
                alert('注册成功');
                location.href="http://127.0.0.1:8080/user.html";
            }else{
                alert('注册失败');
                return;
            }
        }
    }
    xhr.open('post','/pro/reg',true);
    var formdate=`g_uname=${_g_uname}&g_upwd=${_g_upwd}`;
    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
    xhr.send(formdate);
 }