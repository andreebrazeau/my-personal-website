$(document).ready(function() {
    $("#contact").hide();
	$("#yellow_selected").hide();
	$("#red_selected").hide();
	$("#blue_selected").hide();

    $("[href='#contact']").click(function(event) {
        event.preventDefault();
        $("#about_me").hide();
        $("#contact").show();
		$("#yellow_selected").show();
		$("#blue_selected").hide();
		$("#red_selected").show();

    });
    $("[href='#about_me']").click(function(event) {
        event.preventDefault();
        $("#contact").hide();
        $("#about_me").show();
		$("#yellow_selected").hide();
    });
});