$(function(){

	//根据图片个数，循环出所有的span
	for (var i = 0; i < $('.banner li').length; i++) {
		$('.btn').append('<span></span>')
	};

	//鼠标移入/移出时，左右箭头效果
	$('.banner').mouseover(function(event) {
		$('.left').animate({left:'0'}, 100)
		$('.right').animate({right:'0'}, 100)
	}).mouseleave(function(event) {
		$('.left').animate({left:'-45px'}, 100)
		$('.right').animate({right:'-45px'}, 100)
		autoPlay()
	})

	var i=0;//全局变量I，初始为0；
	var timer=null;//定义定时器为空；
	$('.btn span').eq(0).addClass('cur');//页面加载后，给第一个span按钮添加样式
		clearInterval(timer);

		//向右按钮点击事件
	$('.right').click(function(event) {
				
				clearInterval(timer);

		if(i>=$('.banner li').length-1)
		{
			i=0
			$('.banner ul').animate({left:-$('.banner li').width()*i}, "slow")
			$('.btn span').eq(i).addClass('cur').siblings().removeClass('cur')
		}
		else
		{
			i++;
			$('.banner ul').animate({left:-$('.banner li').width()*i}, "slow")
			$('.btn span').eq(i).addClass('cur').siblings().removeClass('cur')
		}
	});

		//向左按钮点击事件
	$('.left').click(function(event) {

			clearInterval(timer);

			if(i>0)
			{
				i--;
				$('.banner ul').animate({left:-$('.banner li').width()*i}, "slow")
				$('.btn span').eq(i).addClass('cur').siblings().removeClass('cur')
			}
			else
			{
				i=$('.banner li').length-1;
				$('.banner ul').animate({left:-$('.banner li').width()*i}, "slow")
				$('.btn span').eq(i).addClass('cur').siblings().removeClass('cur')
			}	
	});

		//自动播放
	function autoPlay()
	{
		clearInterval(timer);
		timer=setInterval(
			function(){
				if(i<$('.banner li').length-1)
				{
					i++;
					$('.banner ul').animate({left:-$('.banner li').width()*i}, "slow")
					$('.btn span').eq(i).addClass('cur').siblings().removeClass('cur')
				}
				else if(i>=$('.banner li').length-1)
				{
					i=0;
					$('.banner ul').animate({left:-$('.banner li').width()*i}, "slow")
					$('.btn span').eq(i).addClass('cur').siblings().removeClass('cur')
				}
			}
			,3500)
		
	}
autoPlay()//执行自动播放

		//span按钮点击事件
		$('.btn span').mousedown(function() {
		var i=$('.btn span').index(this);
		$('.banner ul').animate({left:-$('.banner li').width()*i}, "slow")
		$('.btn span').eq(i).addClass('cur').siblings().removeClass('cur')
		clearInterval(timer);
		})
})