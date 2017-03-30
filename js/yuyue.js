$(function(){
		$(".box-sj").click(function(){
			$(this).parent(".box").find(".list-content").slideToggle();
			$(this).parent(".box").siblings(".box").find(".list-content").hide();
			click();	
		});
		function click(){
			$(".list-content li").click(function(){
				$(this).parent().siblings(".list").val($(this).text());	
				$(this).parent().slideUp();
			});	
		};	
	});