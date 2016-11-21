$(function(){
	$.ajax({
		type: "GET",
		url: "ajax/data.json",
		dataType: "json",
		success: function(data){
			for(var i in data.about_info){
				$("#about_info").append("<p>"+data.about_info[i]+"</p>");
			}
			$(".expertise_int").append("<ul></ul>");
			for(var i in data.yuyan){
				$("#expertise_int1 ul").append("<li>"+data.yuyan[i]+"</li>");
			}
			for(var i in data.kuangjia){
				$("#expertise_int2 ul").append("<li>"+data.kuangjia[i]+"</li>");
			}
			for(var i in data.others){
				$("#expertise_int3 ul").append("<li>"+data.others[i]+"</li>");
			}

			$(".demo_detail_int").append("<ul></ul>");
			for(var i in data.memory) {
				$("#demo_detail_int1 ul").append("<li>"+data.memory[i]+"</li>");
			}
			for(var i in data.weather) {
				$("#demo_detail_int2 ul").append("<li>"+data.weather[i]+"</li>");
			}
			for(var i in data.ecommerce) {
				$("#demo_detail_int3 ul").append("<li>"+data.ecommerce[i]+"</li>");
			}
			for(var i in data.hnews) {
				$("#demo_detail_int4 ul").append("<li>"+data.hnews[i]+"</li>");
			}
			for(var i in data.contact_info) {
				$("#contact_info").append("<p>"+data.contact_info[i]+"</p>");
			}

		}
	});
    $('#dowebok').fullpage({
		scrollingSpeed: 400,
		css3: true,
		resize: true,
		anchors: ["page1","page2","page3","page4","page5"],
		verticalCentered: false,
		afterRender: function(){
			$("#home").css({"display":"block"}).addClass("home_zoom");
			$("aside").css({"top":($(".active").height()-$("aside").height())/2});
			$("header").before("<div id='header' style='opacity:0'></div>");	
			$("#home_head").css({"margin-top":"150px"});
			$("header").animate({opacity:"1"},1000,function(){
				$("#header").css({"opacity":"0.3"});
				$("#home_info1").fadeIn(700,function(){
					$(this).next().animate({width:"800px"},700,function(){
						$("#home_info2").fadeIn(750,function(){
							$(this).next().fadeIn(750,function(){
								$("aside").fadeIn(300);
							});
						});
					});
				});
			});	
			$("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
		},
		afterLoad: function(anchorLink,index){
			if(index==1){
				$("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
			}
			if(index==2){
				$("aside a").eq(1).addClass("selected").siblings().removeClass("selected");
				$("#about_content h1").after("<div class='title_en'></div>");
				$(".title_en").animate({width:"150px"}, 800);
				$("#about_info").animate({width:"800px",marginTop:"0",marginBottom:"0"},700,'easeOutElastic',function(){
					$("#about_info p").eq(0).animate({bottom:"0"}, 700,function(){
						$("#about_info p").eq(1).animate({bottom:"0"}, 700,function(){
							$("#about_info p").eq(2).animate({bottom:"0"}, 700,function(){
								$("#about_info p").eq(3).animate({bottom:"0"}, 700);
							});
						});
					});
				});	
			}
			if(index==3){
				$("aside a").eq(2).addClass("selected").siblings().removeClass("selected");
				$("#expertise_content h1").after("<div class='title_en'></div>");
				$(".title_en").animate({width:"150px"},800);	
				$(".expertise_list_content").addClass("expertise_scale");
			}
			if(index==4){
				$("aside a").eq(3).addClass("selected").siblings().removeClass("selected");
				$("#demo_content h1").after("<div class='title_en'></div>");
				$(".title_en").animate({width:"150px"},800);	
				var i =- 1;
				$(".demo_scale").each(function() {
					var $this=$(this);
					if(!$this.hasClass("b_to_t")){
						i++;
						setTimeout(function(){
					   $this.addClass("b_to_t");
					   }, 200*i);
					}
				})
			}
			if(index==5){
				$("aside a").eq(4).addClass("selected").siblings().removeClass("selected");
				$("#contact_content h1").after("<div class='title_en'></div>");
				$(".title_en").animate({width:"150px"},800);	
				var i =- 1;
				$("#contact_head1 span").each(function(){
					var $this=$(this);
					if(!$this.hasClass("fade_in")){
						i++;
						setTimeout(function(){
					   $this.addClass("fade_in");
					   }, 200*i);
					}
				});
				var j =- 1;
				setTimeout(function(){
						$(".contact_scale").each(function(){
							var $this=$(this);
							if(!$this.hasClass("fade_in")){
								j++;
								setTimeout(function(){
					   				$this.addClass("fade_in");
					   			}, 350*j);
							}
						});
				}, 70);
			}
		},
		onLeave:function(index , nextIndex, direction){
			if(index==2||index==3||index==4||index==5){
				$(".title_en").remove();	
			}
		}
	});
});

//点击logo返回主页
	$("#logo").click(function() {
		window.location.href = "/";
	})
//侧边导航文字切换
	$("aside a").hover(function(){
		$(this).find("b").fadeToggle(200,"easeInOutCubic");
	})
// demo明细切换
	$("#demo_box_content1").hover(function() {
		$("#demo_detail_int1").slideDown(400);
	}, function() {
		$("#demo_detail_int1").slideUp(200);
	})
	$("#demo_box_content2").hover(function() {
		$("#demo_detail_int2").slideDown(400);
	}, function() {
		$("#demo_detail_int2").slideUp(200);
	})
	$("#demo_box_content3").hover(function() {
		$("#demo_detail_int3").slideDown(400);
	}, function() {
		$("#demo_detail_int3").slideUp(200);
	})
	$("#demo_box_content4").hover(function() {
		$("#demo_detail_int4").slideDown(400);
	}, function() {
		$("#demo_detail_int4").slideUp(200);
	})
	
// 点击留言
	$("#contact_message1").click(function(){
		$(this).fadeOut(200,function(){
			$("#contact_form").fadeIn(200);
		})
	});

//内容适应居中
	$(window).resize(function(){
		var size = $(function(){
			$("aside").css({"top":($(".active").height()-$("aside").height())/2});
			$("#home_content").css({"padding-top":($(".active").height()-$("#home_content").height())/6});
			$("#about_content").css({"padding-top":($(".active").height()-$("#about_content").height())/6});
			$("#expertise_content").css({"padding-top":($(".active").height()-$("#expertise_content").height())/6});
			$("#demo_content").css({"padding-top":($(".active").height()-$("#demo_content").height())/6});;
		});
		size();
	});