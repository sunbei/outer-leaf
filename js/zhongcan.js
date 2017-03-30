$(function(){
	$(".zcan-banner-img a").not(":first").hide();	
	$(".zcan-banner-num-passage a").not(":first").hide();
	$(".zcan-banner-num-count a:first").addClass("se");
	var i=0;
	var timer=setInterval(move,1000);
	function move(){
		i++;
		if(i>$(".zcan-banner-img a").size()-1){
			i=0;	
		};
		$(".zcan-banner-img a").eq(i).show().siblings().hide();
		$(".zcan-banner-num-passage a").eq(i).show().siblings().hide();
		$(".zcan-banner-num-count a").eq(i).addClass("se").siblings().removeClass("se");
	}
	$(".zcan-banner").hover(function(){
		clearInterval(timer);
		i=$(".zcan-banner-img a:visible").index();	
	},function(){
		timer=setInterval(move,1000);	
	});
});