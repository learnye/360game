const express=require('express');
const router=express.Router();
const pool=require('../pool.js');
// 注册路由
router.post('/reg',(req,res)=>{
    let obj=req.body;
    // console.log(obj);
    let sql='insert into g_user set ?';
    pool.query(sql,[obj],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows==0){
            res.send('0');
        }else{
            res.send('1');
        }
    });
});
// 登录路由
router.get('/login/:uname&:upwd',(req,res)=>{
    let _uname=req.params.uname;
    let _upwd=req.params.upwd;
    // console.log(req.params);
    let sql='select g_uname from g_user where g_uname=? and g_upwd=?';
    pool.query(sql,[_uname,_upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }else{
            res.send('-1');
        }
    });
});
// 插入图片路由
router.put('/sendimg1',(req,res)=>{
    let obj=req.body;
    // console.log(obj);
    let sql='insert into gif set ?';
    pool.query(sql,[obj],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows==0){
            res.send('0');
        }else{
            res.send('1');
        }
    });
});
router.put('/sendimg',(req,res)=>{
    let obj=req.body;
    // console.log(obj);
    let sql='insert into allimage set ?';
    pool.query(sql,[obj],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows==0){
            res.send('0');
        }else{
            res.send('1');
        }
    });
});
// 请求picture表中图片路由
router.get('/requireimg/:avatar',(req,res)=>{
    let $avatar=req.params.avatar;
    // console.log($avatar);
    let sql='select avatar,name from picture where avatar like ?';
    pool.query(sql,[`%${$avatar}%`],(err,result)=>{
        if(err) throw err;
        // console.log(result);
        res.send(result);
    });
});
// 请求hotorder表中图片路由
router.get('/requireimg1',(req,res)=>{
    let sql='select avatar,name,type from hotorder ';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        // console.log(result);
        res.send(result);
    });
});
// 请求allimage表中图片路由
router.get('/requireimg2',(req,res)=>{
    let sql='select avatar from allimage ';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        // console.log(result);
        res.send(result);
    });
});
// 请求newlist表中图片路由
router.get('/requireimg3',(req,res)=>{
    let sql='select avatar,name,type,time from newlist ';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        // console.log(result);
        res.send(result);
    });
});
// 获取热游排行游戏名路由
router.get('/reqlist',(req,res)=>{
    let sql='select pid,name from hotorder where pid<=3';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        // console.log(result);
        res.send(result);
    });
});
// 获取游戏地址
router.get('/gameaddr/:pname',(req,res)=>{
    let $pname=req.params.pname;
    let sql='select addr from addr where pname=?';
    pool.query(sql,[$pname],(err,result)=>{
        if(err) throw err;
        // console.log(result);
        if(result.length>0){
        res.send(result);
        }else{
            res.send("-1");
        }
    });
});
// 获取我的游戏数据
router.get('/mygamelength/:name',(req,res)=>{
    let $name=req.params.name;
    let sql='select gname from mygame where name=?';
    pool.query(sql,[$name],(err,result)=>{
        if(err) throw err;
        // console.log(result);
        if(result.length>0){
        res.send(result);
        }else{
            res.send("-1");
        }
    });
});
router.get('/mygame/:name&:page',(req,res)=>{
    let $name=req.params.name;
    let $page=req.params.page;
    if(!$page){
        $page=1;
    }
    let start=($page-1)*4;
    let sql='select gpicture,area,gname from mygame where name=? limit ?,4';
    pool.query(sql,[$name,start],(err,result)=>{
        if(err) throw err;
        // console.log(result);
        if(result.length>0){
        res.send(result);
        }else{
            res.send("-1");
        }
    });
});
module.exports=router;