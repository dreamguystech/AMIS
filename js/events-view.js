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
        success:function(data){
			$('.w-tab-pane[data-w-tab="Tab 1"]').empty().append(data);
        }
    });
});

$(document).on('click','.eventsli a',function(){
	window.localStorage.setItem("event-name", $(this).find('.event-title').html());
	window.localStorage.setItem("event-id", $(this).attr('data-id'));
	location.href= "events-view.html";
});