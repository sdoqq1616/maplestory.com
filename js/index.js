$(function(){	
	// tab 鍒囨崲
	$(".news").slide({
		mainCell:".new-bd",
		titCell:".news-tab li",
		trigger:"mousedown",
		effect:"fold",
		titOnClassName:"now",
		autoPlay:0
	})
	$(".weixin").slide({
		mainCell:".bd",
		titCell:".hd li",
		trigger:"mousedown",
		effect:"fold",
		titOnClassName:"now",
		autoPlay:0
	})
	//杞挱
	$(".slider_box").slide({
		mainCell:".slider_bd ul",
		effect:"leftLoop",
		autoPlay:true,
		interTime:4000
	});
	/*banner*/
	$(".banner").slide({
		mainCell:".bd ul",
		effect:"leftLoop",
		autoPlay:true,
		interTime:4000
	});
	/*鍐掗櫓褰遍煶*/
	$(".media-list").slide({
		mainCell:".bd ul",
		effect:"leftLoop",
		autoPlay:false
	});
	//鏂板搧灞曠ず
	$(".shopping-list").slide({
		mainCell:".bd ul",
		autoPage:true,
		effect:"leftLoop",
		vis:4
	});

	
});
	//搴曢儴鑳屾櫙婊氬姩
	var posX1 = 0;
	setInterval(function(){
		//if (posX1 <= -1000) posX1 = 0;
		posX1 -= 1;
		$('#crystal_bg').css({ backgroundPosition: posX1 + 'px ' +'50%'  });
	},50);