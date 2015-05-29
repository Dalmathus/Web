/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    
    'use strict';
    $("#flexcontainer > *").hide();
    $(".flex-item-big").fadeIn(0);
    var time = 0;
    $(".flex-item").each(function () {
        $(this).delay(time).fadeIn(3500);
        time += 100;
    });
});

$(".flex-item").click(function() {
    $(this).append("<p>test</p>");
});