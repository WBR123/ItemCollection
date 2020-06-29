// JavaScript Document
			
		var _index=0;
		var timer;
		/*点击小圆点*/
		$("#web .but ul li").click(function(){
			$(this).addClass("hover").siblings().removeClass("hover");/*移除原有的样式*/
			_index=$(this).index()/*序列*/
			$("#web .banner ul li").eq(_index).fadeIn().siblings().fadeOut();
		});
		
		/*鼠标移入显示左右键 移出隐藏左右键*/
		$("#web .banner").hover(function(){
			$("#web .banner .next").show();
			$("#web .banner .prev").show();	
				clearInterval(timer);	/*清理定时器*/
		},function(){
			$("#web .banner .next").hide();
			$("#web .banner .prev").hide();	
				timer=setInterval("autoplay()",5000);/*执行定时器*/	
		});
		
		<!--左按钮-->
		$("#web .banner .prev").click(function(){
			_index--;
			if(_index<0){
				_index=4;
			}
			$("#web .banner ul li").eq(_index).fadeIn().siblings().fadeOut();
			$("#web .but ul li").eq(_index).addClass("hover").siblings().removeClass("hover");
		});
		
		<!--右按钮-->
		$("#web .banner .next").click(function(){
			 autoplay()			
		});
		
		function autoplay(){
			_index++;
			if(_index>=4){
				_index=0;
			}
			$("#web .banner ul li").eq(_index).fadeIn().siblings().fadeOut();
			$("#web .but ul li").eq(_index).addClass("hover").siblings().removeClass("hover");
		}
		
		timer=setInterval("autoplay()",5000);/*定时器*/
		