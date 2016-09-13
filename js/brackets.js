$(function() {

	$('ul.nav-tabs-js').each(function(){

    var $active, $content, $links = $(this).find('a');

    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.addClass('active');

    $content = $($active[0].hash);

    $links.not($active).each(function () {
      $(this.hash).hide();
    });
		
    $(this).on('click', 'a', function(e){
      $active.removeClass('active');
      $content.hide();

      $active = $(this);
      $content = $(this.hash);

      $active.addClass('active');
      $content.show();

      e.preventDefault();
    });

  });
	
	$('.tabContainer li a').last().trigger('click');
	
	function section_tab() {
		$('.bracket > div[class*="groups"] ul.section-tab > li').click(function(){
			var tab_id = $(this).attr('data-tab');
			
			$(this).parents('div[class*="groups"]').addClass('intest-data-tab');
			
			$(this).parents('.section-tab').children('li').removeClass('current');
			$(this).parents('div[class*="groups"]').children('.tab-content-s').removeClass('current');
			
			$(this).addClass('current');
			$(this).parents('div[class*="groups"]').children("#"+tab_id).addClass('current');
			
		});
	}
	
	function group_slider() {
  
	  $( ".group_slider" ).prepend( "<div class='buttons'><center><a href='#' class='prev'></a><a href='#' class='next'></a></center></div>" );
		
		$(".group_slider > .bracket-js > .stages").css("display", "none", "width", "100%");
		//$(".bracket-js .stages").css("display", "none");
		$(".group_slider > .bracket-js > .stages.-s0").addClass("now").css("display", "block");

		$(".buttons .next").click(function() {
			$(".group_slider > .bracket-js > .stages.now:not(:last-child)").css("display", "none");
	    $(".group_slider > .bracket-js > .stages.now:not(:last-child)").removeClass("now").next().addClass("now").css("display", "block");
	  });
		
		$(".buttons .prev").click(function() {
			$(".group_slider > .bracket-js > .stages.now:not(:first-child)").css("display", "none");
	    $(".group_slider > .bracket-js > .stages.now:not(:first-child)").removeClass("now").prev().addClass("now").css("display", "block");
	  });
  
	}
	
	function group_slider_desc() {
		
		if($(window).width() > 600){
			
			$('.option:has(.stages:nth-child(5))').prepend( "<div class='buttons'><a href='#' class='prev'></a><a href='#' class='next'></a></div>" );
			
	    if ($('.option > [data*="t-hidden"]').length < 1) {
			    $(".-bracket .buttons .prev").addClass("disabled");
	    }
			
	    if ($('.option .stages:nth-child(5)').length < 1) {  
	        $(".-bracket .buttons .next").addClass("disabled");
	    }
			
			if ($('.option [data*="t-"]').length > 5) {  
				
		    //if ($('.option > [data*="t-hidden"]').length < 1) {
				//    $(".-bracket .buttons .prev").addClass("disabled");
		    //}
				
		    //if ($('.option > [data*="t-4"]').length < 1) {  
		    //    $(".-bracket .buttons .next").addClass("disabled");
		    //}
	    }
			
			$(".option .buttons .next").click(function() {

				$parent = $(this).parent().parent();
				$parent.children(".stages[data=t-0]").attr("data","t-hidden");
				
				var i=-1;
		  	$parent.children(".stages:not([data=t-hidden])").each(function(){
					i++;
					$(this).attr("data","t-"+i);
				});
				
		  	$parent.children(".buttons").each(function(){
					$(this).children(".prev").removeClass("disabled");
				});
				
				if ($parent.children('[data*="t-4"]').length < 1) {
					$(this).addClass("disabled");
				}
				
				return false;
					
			});
			
			$(".option .buttons .prev").click('click', function() {
				
				$parent = $(this).parent().parent();
				$parent.children(".stages[data=t-0]").prev().attr("data","t-0");
				
			  var i=-1;
				$parent.children(".stages:not([data=t-hidden])").each(function(){
		  		i++;
					$(this).attr("data","t-"+i);
		  	});
				
		  	$parent.children(".buttons").each(function(){
					$(this).children(".next").removeClass("disabled");
				});
				
				if ($parent.children('[data*="t-hidden"]').length < 1) {
					$(this).addClass("disabled");
				}
				
				return false;
				
			});
			
		}
  
	}
	
	group_slider_desc();
	
	section_tab();
	
	if($(window).width() < 600){
		$(".group_slider > .bracket-js > .stages").css("width", "100%");
		$(".group_slider > .bracket-js > .stages:not(.-s0)").css("display", "none");
		group_slider();
	}
	
	var section = $('.bracket');
	var swidth = section.width();
  if (swidth < 770) {
			$('.bracket').addClass("-small");
	}


});