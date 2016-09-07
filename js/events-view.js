$(document).ready(function(e) {
	 var dataString = "user_id="+window.localStorage.getItem("user_id");
    
	
	if($(".navbar-title").html() == ''){
		$(".navbar-title").html(window.localStorage.getItem("event-name"));
	}
	var dataString = "user_id="+window.localStorage.getItem("user_id")+"&id="+window.localStorage.getItem("event-id");
    $('#details_event').html('');
    $.ajax({
        url:'http://amisapp.ansarullah.co.uk/mobile_newapp/event_details',
        type:'POST',
        data:dataString,
		dataType:'json',
        success:function(data){ 
			$('.w-tab-pane[data-w-tab="Tab 1"]').empty().append(data.details);
			
			var chartimg = '<div class="text-new" ><img src="'+data.chart+'" data-elem="pinchzoomer"></div>';
			
			if(data.cchart.length > 0){
				chartimg += '<div class="w-row"><h2 class="title-new">Child Chart</h2>';
				for(var i=0;i<data.cchart.length;i++){
				chartimg += '<div class="text-new"><img src="'+data.cchart[i]+'" data-elem="pinchzoomer"></div><div class="separator-button"></div>';
				}
			}
			  $('.w-tab-pane[data-w-tab="Tab 2"]').empty().css('display','block').append(chartimg).css('opacity',0);  
			  $('.w-tab-pane[data-w-tab="Tab 2"] img').pinchzoomer();         
        }
    });
	
	
});
var handleTouchyPinch = function (e, $target, data) { alert(1);
    $target.css({'webkitTransform':'scale(' + data.scale + ',' + data.scale + ')'});
};
$('#my_div').bind('touchy-pinch', handleTouchyPinch);
$(document).on('click','.eventsli a',function(){
	window.localStorage.setItem("event-name", $(this).find('.event-title').html());
	window.localStorage.setItem("event-id", $(this).attr('data-id'));
	location.href= "events-view.html";
});