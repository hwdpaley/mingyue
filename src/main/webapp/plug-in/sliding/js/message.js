$(document).ready(function() {
    doGetMessage();
});
var delayTime=60*1000;
function doGetMessage(){
    setTimeout(checkKc, delayTime);
    $('#alertMessage').click(function() {
        hideTop();
    });
}

//登录处理函数
function checkKc() {

    setTimeout(checkKc, delayTime);
	$.ajax({
		async : false,
		cache : false,
		type : 'POST',
		url : '/mzyKuCunController.do?checkKc',// 请求的action路径
		data : null,
		error : function() {// 请求失败处理函数
		},
		success : function(data) {
			var d = $.parseJSON(data);
			if (d.success) {
                showError(d.msg);
			}
		}
	});
}


//显示错误提示
function showError(str) {
	$('#alertMessage').addClass('error').html(str).stop(true, true).show().animate({
		opacity : 1,
		right : '0'
	}, 500);

}
function showWarm(str) {
    $('#alertMessage').addClass('warning').html(str).stop(true, true).show().animate({
        opacity : 1,
        right : '0'
    }, 500);

}
//验证通过加载动画
function loginsuccess()
{
	$("#login").animate({
		opacity : 1,
		top : '49%'
	}, 200, function() {
		$('.userbox').show().animate({
			opacity : 1
		}, 500);
		$("#login").animate({
			opacity : 0,
			top : '60%'
		}, 500, function() {
			$(this).fadeOut(200, function() {
				$(".text_success").slideDown();
				$("#successLogin").animate({
					opacity : 1,
					height : "200px"
				}, 1000);
			});
		});
	});
}
function showSuccess(str) {
	$('#alertMessage').removeClass('error').html(str).stop(true, true).show().animate({
		opacity : 1,
		right : '0'
	}, 500);
}

//function onfocus() {
//	if ($(window).width() > 480) {
//		$('.tip input').tipsy({
//			trigger : 'focus',
//			gravity : 'w',
//			live : true
//		});
//	} else {
//		$('.tip input').tipsy("hide");
//	}
//}

function hideTop() {
	$('#alertMessage').animate({
		opacity : 0,
		right : '-20'
	}, 500, function() {
		$(this).hide();
	});
}
//加载信息
//function loading(name, overlay) {
//	$('body').append('<div id="overlay"></div><div id="preloader">' + name + '..</div>');
//	if (overlay == 1) {
//		$('#overlay').css('opacity', 0.1).fadeIn(function() {
//			$('#preloader').fadeIn();
//		});
//		return false;
//	}
//	$('#preloader').fadeIn();
//}
//
//function unloading() {
//	$('#preloader').fadeOut('fast', function() {
//		$('#overlay').fadeOut();
//	});
//}
// 表单晃动
function jrumble() {
	$('.inner').jrumble({
		x : 4,
		y : 4,
		rotation : 10
	});
	$('.inner').trigger('startRumble');
	setTimeout('$(".inner").trigger("stopRumble")', 500);
}