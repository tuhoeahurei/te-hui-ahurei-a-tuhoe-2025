$(window).load(function() {
	if ( $(".player-loader").length ) {
		$(".player-loader").hide();
		$(".play-button .fa").css("visibility", "visible");
	}
})
$(document).ready(function(){
	if ( $("#reg_form").length ) {
		$("#subreg").click(function() {
			$(".onload,.onerror").hide();							 
			$(".onload").fadeIn().delay( 3000 );
			$(".onload").fadeOut();
			setTimeout(function() { $(".onerror").fadeIn(); $("#userid, #password").val(""); $("#userid").focus(); }, 3500);
		});
	}
	if ( $("#modal-watch").length ) {
		$("#submov").click(function() {
			$(".onload,.onerror").hide();							 
			$(".onload").fadeIn().delay( 3000 );
			$(".onload").fadeOut();
			setTimeout(function() { $(".onerror").fadeIn(); $("#userid, #password").val(""); $("#userid").focus(); }, 3500);
		});
	}
	var hcontrol = $('.control-wrap').height();
	var elback = document.getElementsByClassName('img-backdrop')[0];
	$(".cfull").on('click', function() {
		if(screenfull.isFullscreen){
			screenfull.exit();
			elback.style.maxHeight = '500px'
		} else {
			elback.style.maxHeight = (parseInt(screen.height)-(parseInt(hcontrol)+10))+'px';
			screenfull.request( $('#player')[0] );
		}
	});
	$(window).resize(function() {
		if(screenfull.isFullscreen){
			elback.style.maxHeight = (parseInt(screen.height)-(parseInt(hcontrol)+10))+'px';
		}
	});
	$(".cvolu,.cset").on('click', function() {
		$('#modal-watch').modal({show: true, backdrop: 'static'});
	});
	//$("a.play").on('click', function() {
		//screenfull.exit();
	//});
	//loading video
	$(".player-loader").delay(9000).fadeOut();
	$( ".play-button .fa,.cplay" ).on( "click", function() {
		var opening = "m.png",
			loading = "//" + window.location.hostname + pathloc+"player-loading.gif";
		$(".play-button .fa").hide();
		$(".player-loader").show();
		setTimeout(function() {
			$(".img-backdrop").attr( 'src', opening );
			$(".player-loader").fadeOut(2000);
			$(".progressbar").animate({
				width:"3%"
			},{
				queue: false,
				duration: 3000,
				complete: function() {
					//console.log("ok");
					//$("#control").hide();
					if(screenfull.isFullscreen){
						screenfull.exit();
						elback.style.maxHeight = '500px'
					}
					$('#modal-watch').modal({show: true, backdrop: 'static'});
				}
			});			
		},100);
	});
});