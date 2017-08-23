// JavaScript Document

//幻灯片播放函数
var count = 1;
var s = null;
function huandengpian(){
	if(!document.getElementById) return false;
	if(!document.getElementById("myphotos")) return false;
	if(!document.getElementsByTagName) return false;
	var photos = document.getElementById("myphotos");
	var img = photos.getElementsByTagName("img");                       //取得所有的图像
	for(var i = 0; i < img.length; i++){
		img[i].style.display = "none";                                  //隐藏所有图像
	}
	img[count-1].style.display = "block";                               //显示指定图像
	count ++;
	zuoyou(count);                                                     //将count传递出去，使两个函数数据互通
	if(count > img.length) count = 1;
	s = setTimeout(huandengpian, 3000);                             //每隔3s执行一次
}

//左右箭头切换
function zuoyou(n){
	if(!document.getElementById) return false;
    if(!document.getElementById("left")) return false;
	if(!document.getElementById("right")) return false;
	var left = document.getElementById("left");
	var right = document.getElementById("right");
	if(!document.getElementById("myphotos")) return false;
	if(!document.getElementsByTagName) return false;
	var photos = document.getElementById("myphotos");
	var img = photos.getElementsByTagName("img");                       //取得所有的图像
	left.onclick = function(){
		n -= 2;
		if(n < 1) n = img.length;
		count = n;
		huandengpian(count);
		clearTimeout(s);
	}
	right.onclick = function(){
		huandengpian(count);     //此时的count在huandengpian函数中已经进行了加1，所以直接调用函数提前切换到下一张图片
		clearTimeout(s);
	}
}


//正文导航链接切换
var j = 4;                       //默认进入网页显示快速链接面板
function nav(){
	if(!document.getElementById) return false;
	if(!document.getElementById("navlinks")) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById("zw-caption")) return false;
	var navlinks = document.getElementById("navlinks");
	var li = navlinks.getElementsByTagName("li");
	var zwcaption = document.getElementById("zw-caption");
	var zli = zwcaption.getElementsByTagName("li");
	for(var i = 0 ; i < li.length ; i ++){
		li[i].style.display = "none";
		zli[i].className = zli[i].className.replace("mycolors", "");
	}
	li[j].style.display = "block";
	zli[j].className = "mycolors";
	//点击党群机构时跳转到的链接板
	$(document).ready(function(e) {
        $("#dangqun").click(function(){
			j = 0;
			nav();
		})
    });
	//点击行政机构时跳转到的链接板
	$(document).ready(function(e) {
        $("#xingzheng").click(function(){
			j = 1;
			nav();
		})
    });
	//点击院系设置时跳转到的链接板
	$(document).ready(function(e) {
        $("#yuanxi").click(function(){
			j = 2;
			nav();
		})
    });
	//点击教辅科研时跳转到的链接板
	$(document).ready(function(e) {
        $("#jiaofu").click(function(){
			j = 3;
			nav();
		})
    });
	//点击快速链接时跳转到的链接板
	$(document).ready(function(e) {
        $("#kuaisu").click(function(){
			j = 4;
			nav();
		})
    });
}


function selects(){
	var myselect1 = document.getElementById("myselect1");                        //获取select
	myselect1.style.color = "#330066";
	myselect1.onchange = function(){                                             //获取当前选择的下拉菜单value值
		var values=myselect1.options[myselect1.selectedIndex].value;             //设置或返回下拉列表中被选选项的索引号
		window.open(values);                                                    //打开网页           
	}
	var myselect2 = document.getElementById("myselect2");   
	myselect2.style.color = "#330066";     
	myselect2.onchange = function(){
		var values=myselect2.options[myselect2.selectedIndex].value;      
		window.open(values); 
	}
	var myselect3 = document.getElementById("myselect3");    
	myselect3.style.color = "#330066";     
	myselect3.onchange = function(){
		var values=myselect3.options[myselect3.selectedIndex].value;    
		window.open(values);  
	}
}


addLoadEvent(zuoyou);
addLoadEvent(huandengpian);
addLoadEvent(nav);
addLoadEvent(selects);