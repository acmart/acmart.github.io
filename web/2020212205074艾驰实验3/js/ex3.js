
function changecolor(){
	document.getElementById("p1").style.color="red";
}


function dates(){
	var date=new Date();
	var year=date.getFullYear();
	var month1=date.getMonth();
	var months = 
            [
            "01", "02", "03", "04", "05", "06", 
            "07", "08", "09", "10", "11", "12"
            ];
    var month=months[month1]
	var day=date.getDate();
	document.getElementById("H1").innerHTML=year+"-"+month+"-"+day;
}


function added(){
	document.getElementById("p3").classList.add("fn-active");
}


function del(){
	var p4=document.getElementById("ul1");
	p4.removeChild(document.getElementById("p8"));
}


function openl(){

	window.open("https://www.taobao.com","_blank");
}


function another(){
	var numb=9;
	var p6=document.getElementById("p6");
	p6.onclick=function(){
	var oli=document.createElement("li");
	oli.innerHTML= 'p'+numb;
	numb++;
	document.getElementById("ul1").appendChild(oli);
	}
}

/*
function num(){
	var list=document.getElementById('ul1').children;//获取所有的li标签
	for(var i=0;i<list.length;i++){//遍历每一个li标签
  	  list[i].setAttribute('index',i+1); //给每一个li标签添加索引
  	  list[i].onclick=function () {
  	    alert(this.getAttribute('index'));//获取添加的li标签的元素值
  	  }
	}
}
*/