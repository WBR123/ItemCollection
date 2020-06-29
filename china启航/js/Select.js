

	var article=document.getElementsByClassName("article");
	var title=document.getElementsByClassName("title");	
		function control(n){//定义一个函数 控制div
			for(var i=0; i<article.length;i++){
					article[i].style.display="none";
			}
			article[n].style.display="block";//显示指定的div内容
		}			
			//div绑定对应的主题    给li绑定事件
		for(var i=0;i<title.length;i++){
			(function(i){
			title[i].onmouseover=function(){
					control(i);
				}
			})(i)	
		}