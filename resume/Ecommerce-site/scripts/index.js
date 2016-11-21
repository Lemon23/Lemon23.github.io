$(function(){
	//#left
	$("#left li").mouseover(function(){
		$(this).find(".detail").show();
		}).mouseout(function(){
			$(this).find(".detail").hide();
			});
	//#ad
	var index = 0;
	var length = $("#stu a").length;
	var newhref = $("#ad a").eq(index).attr("href");
	function a(x){
		$("#ad a").attr("href",newhref).find("img").eq(x).stop(true, true).fadeIn().siblings().fadeOut();
		$("#stu a").eq(x).addClass("selected").siblings().removeClass("selected");
	}
	$("#stu a").mouseover(function(){
		index = $(this).index();
		a(index);
	}).eq(0).mouseover();
	$("#ad").mouseover(function(){
		clearInterval(show);
	}).mouseout(function(){
		show = setInterval(function(){
			a(index);
			index++
			if(index == length){
				index=0;
			}
		},3000)
	}).mouseout();

	//#section
	$("#til ul li").click(function(){
		$(this).addClass("selected").siblings().removeClass("selected");
		$("#con ul").stop(true,false).animate({left: - $("#con").width() * $(this).index()}, "slow");
		return false;
		})

	//Translucent cover for images
	$("#con img").mouseover(function(){
		$(this).closest("li").append("<div class='gray'></div>");	
		});
		$(document).on("mouseout",".gray",function(){
			$(this).remove();
			})
})

