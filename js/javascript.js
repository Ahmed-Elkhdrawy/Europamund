(function( $ ){
$( document ).ready( function() {
	$( '.input-range').each(function(){
		var value = $(this).attr('data-slider-value');
		var separator = value.indexOf(',');
		if( separator !== -1 ){
			value = value.split(',');
			value.forEach(function(item, i, arr) {
				arr[ i ] = parseFloat( item );
			});
		} else {
			value = parseFloat( value );
		}
		$( this ).slider({
			formatter: function(value) {
				console.log(value);
				return '$' + value;
			},
			min: parseFloat( $( this ).attr('data-slider-min') ),
			max: parseFloat( $( this ).attr('data-slider-max') ), 
			range: $( this ).attr('data-slider-range'),
			value: value,
			tooltip_split: $( this ).attr('data-slider-tooltip_split'),
			tooltip: $( this ).attr('data-slider-tooltip')
		});
	});
	
 } );
} )( jQuery );
$(document).ready(function () {
    "use strict";
    $(window).scroll(function () {
        var scrollHeigt = $(window).scrollTop();
        if (scrollHeigt > $(".navbar").height()) {
            $(".mytop-nav").fadeOut(100);
            $(".navbar").addClass("navbar-fixed-top");
            $(".navbar").css("box-shadow", "0 0 10px -5px #000");
            $("body").css("padding-top", $(".navbar").height() + 30);
        } else if (scrollHeigt < $(".navbar").height()){
            $(".navbar").removeClass("navbar-fixed-top");
            $(".navbar").css("box-shadow", "none");
            $("body").css("padding-top", 0);
            $(".mytop-nav").fadeIn(100);
        }
    });
});
$(document).ready(function () {
    var maxPrice = $("#price_lable");
    $("#priceSlider").slider({
       range:  true,
        min: 0,
        max: 4500,
        slide: function (event, ui) {
            maxPrice.html(ui.values[0] + " : " + ui.values[1]);
        }
    });
});
$(document).ready(function () {
    var maxDay = $("#day_lable");
    $("#dayslider").slider({
       range:  true,
        min: 1,
        max: 30,
        slide: function (event, ui) {
            maxDay.html(ui.values[0] + " : " + ui.values[1]);
        }
    });
});
$(document).ready(function () {
    $(".s-bt").on("click", function () {
        $(this).parent().find("select").focus();
    });
});

$(function () {
    "use strict";
    $(".slider-trip").height($(window).height());
    $(".line-left").height($(".trip-r1").height() - 130);
    $(window).resize(function () {
        $(".slider-trip").height($(window).height());
        $(".line-left").height($(".trip-r1").height() - 130);
    });
});
$(function () {
    "use strict";
    
       $(".trip-feature .btns li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    
    $(".trip-feature .btns li").on("click", function () {
        $("#" + $(this).data("dn")).removeClass("d-n");
        $("#" + $(this).data("dn")).siblings("div").addClass("d-n");
    });
});
























