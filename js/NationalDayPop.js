
var NationalDayObjFun = {

	NationalDayLoadFlag : true,//棣栨鍔犺浇鍥剧墖鎵ц鍑芥暟寮€鍏�
	NationalDayAnimFlag : false,//闃叉杩炵画鐐瑰嚮寮€鍏�
	// pc绔浘鐗囧昂瀵�
	NationalDayWidth : 1350, //澶у浘瀹藉害
	NationalDayHeight : 550, //澶у浘楂樺害
	NationalDayWidthS : 150, //灏忓浘瀹藉害
	NationalDayHeightS : 150, //灏忓浘楂樺害

	// 绉诲姩绔浘鐗囧昂瀵�
	// NationalDayWidthClice : document.body.clientWidth*0.9, //澶у浘瀹藉害
	// NationalDayHeightClice : document.body.clientWidth*1.15, //澶у浘楂樺害
	platOs : null, //璁惧绫诲瀷

	// ============================================================鍒ゆ柇鏄痯c绔繕鏄Щ鍔ㄧ
	//璁惧妫€娴�
	browserType : function () {
	    var u = window.navigator.userAgent.toLowerCase();
	    var bIsIpad = u.match(/ipad/i) == "ipad";
	    var bIsIphoneOs = u.match(/iphone os/i) == "iphone os";
	    var bIsMidp = u.match(/midp/i) == "midp";
	    var bIsUc7 = u.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	    var bIsUc = u.match(/ucweb/i) == "ucweb";
	    var bIsAndroid = u.match(/android/i) == "android";
	    var bIsCE = u.match(/windows ce/i) == "windows ce";
	    var bIsWM = u.match(/windows mobile/i) == "windows mobile";
	    var bIsIOS = !!u.match(/\(i[^;]+;( u;)? cpu.+mac os x/) || u.indexOf('ios') > -1;
	    var isPhone=false;
	    var isPc=false;
	    if(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM || bIsIOS) {
	        isPhone=true;
	    } else {
	        isPc=true;
	    }
	    var Obj={
	        userAgent:u,
	        isWindows:u.match(/windows/i) == "windows",
	        isMac:u.match(/macintosh/i) == "macintosh",
	        isWeChat:u.match(/MicroMessenger/i) == "micromessenger",
	        isWeibo:u.match(/WeiBo/i) == "weibo",
	        isBeareadApp:u.indexOf('bearead') > -1 ,
	        isAndroid:u.indexOf('android') > -1 || u.indexOf('adr') > -1 ,
	        isIOS:bIsIOS ,
	        isQQ:u.match(/qq\//i) == "qq/",
	        isPC:isPc,
	        isPhone:isPhone
	    };
	    return Obj;
	},

	//鍒ゆ柇娴忚鍣�
	isPicFun : function(){
		var isBrowser = NationalDayObjFun.browserType();
	    if(isBrowser.isPC){
	        platOs = 0;
	    }else{
	    	platOs = 1;
	    }
	},
	// ============================================================鍒ゆ柇鏄痯c绔繕鏄Щ鍔ㄧ



	// ============================================================js鍏ュ彛鏂规硶
	//寮曞叆jquery鎻掍欢骞跺姞鍏mg鍏冪礌
	NationalDayInit : function(){
		var _left =1;
		var _top = 0;

		if(window.NationalDay_x != undefined) _left = NationalDay_x;
		if(window.NationalDay_y != undefined) _top = NationalDay_y;


		NationalDayObjFun.isPicFun();
		var nowTime = new Date();
		var startTime = new Date(2019,8,27);
		var endTime = new Date(2019,9,3);
		// console.log(nowTime)
		// console.log(endTime)
		// console.log(platOs)
		if(!window.jQuery){
			var t=document.createElement("script");
			t.src='https://static.web.sdo.com/shengqugames/html/shengquweb/js/src/lib/jquery-1.10.2.js',t.type="text/javascript"
			// ,t.async=!0
			document.getElementsByTagName("head")[0].appendChild(t);
			if(navigator.userAgent.toUpperCase().indexOf("MSIE")==-1){
				t.onload=function(){
					if(nowTime >= startTime && nowTime <= endTime ){
						// NationalDayObjFun.checkCookie(_left,_top);//鐢╟ookie鎵ц姝よ

						//涓嶇敤cookie鎵ц涓嬮潰
						if(platOs == 0){
							NationalDayObjFun.NationalDayAddImg(_left,_top);//鎵цpc绔簨浠�
						}else if(platOs == 1){
							NationalDayObjFun.NationalDayAddImgClice(_left,_top);//鎵ц绉诲姩绔簨浠�
						}
					}
				}
			}else{
				t.onreadystatechange = function() {
		            var r = t.readyState;
		            // console.log("鐘舵€�: " + r);
		            if (r === 'loaded' || r === 'complete') {
		                t.onreadystatechange = null;
		                if(nowTime >= startTime && nowTime <= endTime){
							// NationalDayObjFun.checkCookie(_left,_top);//鐢╟ookie鎵ц姝よ

							//涓嶇敤cookie鎵ц涓嬮潰
							if(platOs == 0){
								NationalDayObjFun.NationalDayAddImg(_left,_top);//鎵цpc绔簨浠�
							}else if(platOs == 1){
								NationalDayObjFun.NationalDayAddImgClice(_left,_top);//鎵ц绉诲姩绔簨浠�
							}
						}
		            }
		        };
			}
			
		}else{
			if(nowTime >= startTime && nowTime <= endTime){
				// NationalDayObjFun.checkCookie(_left,_top);//鐢╟ookie鎵ц姝よ

				//涓嶇敤cookie鎵ц涓嬮潰
				if(platOs == 0){
					NationalDayObjFun.NationalDayAddImg(_left,_top);//鎵цpc绔簨浠�
				}else if(platOs == 1){
					NationalDayObjFun.NationalDayAddImgClice(_left,_top);//鎵ц绉诲姩绔簨浠�
				}
			}
		}
	},
	// ============================================================js鍏ュ彛鏂规硶





	// ============================================================cookie鐩稿叧
	//璁剧疆cookie
	setCookie : function(cname,cvalue,exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		// console.log('document.cookie:'+document.cookie)
	},
	//鑾峰彇cookie
	getCookie : function(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		// console.log('decodedCookie:'+decodedCookie)
		var ca = decodedCookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
			  c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
			  return c.substring(name.length, c.length);
			}
		}
		return "";
	},

	//璁板綍cookie
	checkCookie : function(_left,_top) {
		var user=NationalDayObjFun.getCookie("webName");
		// console.log('user:'+user)
		if (user != "") {
			// alert('鍐嶆娆㈣繋鎮�')
		} else {
			user = 'shengqugames';
			if (user != "" && user != null) {
				NationalDayObjFun.setCookie("webName", user, 30);
				if(platOs == 0){
					NationalDayObjFun.NationalDayAddImg(_left,_top);//鎵цpc绔簨浠�
				}else if(platOs == 1){
					NationalDayObjFun.NationalDayAddImgClice(_left,_top);//鎵ц绉诲姩绔簨浠�
				}
			}
		}
	},
	// ============================================================cookie鐩稿叧






	// ============================================================pc绔脊绐椾簨浠跺鐞�
	//鍒涘缓鍥剧墖鍏冪礌锛屼笁绉掓垨鑰呯偣鍑讳箣鍚庣缉灏�
	NationalDayAddImg : function(_left,_top){
		var popWrap = document.createElement('div');
		var popDiv = document.createElement('div');
		var popImg = document.createElement('img');
		popImg.src="https://static.web.sdo.com/shengqugames/pic/NationalDay/NationalImgP.jpg?" + Math.random();
		popWrap.setAttribute('id','popWrap');
		popImg.setAttribute('id','popImg');
		popDiv.setAttribute('id','popDiv');
		if(document.body != null){ 
			document.body.appendChild(popWrap);
			document.body.appendChild(popDiv);
			$('#popDiv').append(popImg);
			$('#popWrap').css({
				'position':'fixed',
				'width':'100%',
				'height':'100%',
				'left':0,
				'top':0,
				'display':'none',
				'background':'rgba(0,0,0,0.8)',
				'zIndex':'99999999999999'
			});
			$('#popDiv').css({
				'position':'fixed',
				'width':NationalDayObjFun.NationalDayWidth,
				'height':NationalDayObjFun.NationalDayHeight,
				'left':$(window).width()*0.5,
				'top':$(window).height()*0.5,
				'margin-left':-parseInt(NationalDayObjFun.NationalDayWidth/2),
				'margin-top':-parseInt(NationalDayObjFun.NationalDayHeight/2),
				'display':'none',
				'cursor':'pointer',
				'zIndex':'99999999999999'
			});
			$('#popImg').css({
				'width':'100%',
				'height':'auto'
			});
			popImg.onload = function(){
				if(NationalDayObjFun.NationalDayLoadFlag){
					NationalDayObjFun.NationalDayLoadFlag = false;
					$('#popWrap').show();
					$('#popDiv').show(600);
					var scaleImgTimer = setTimeout(function(){
						NationalDayObjFun.zoomAnima(_left,_top)
					},3000);
					$('#popImg').click(function(){
						if(NationalDayObjFun.NationalDayAnimFlag){
							NationalDayObjFun.expandAnima()
						}else{
							clearTimeout(scaleImgTimer);
							NationalDayObjFun.zoomAnima(_left,_top)
						}
					});
				}
			}
		}
	},
	// 澶у浘鎹㈠皬鍥句簨浠�
	zoomAnima : function(_left,_top){
		$('#popWrap').fadeOut(600);
		$('#popDiv').animate({'width':NationalDayObjFun.NationalDayWidthS,'height':NationalDayObjFun.NationalDayHeightS,'left':(($(window).width() - NationalDayObjFun.NationalDayWidthS) * _left),'top':(($(window).height() - NationalDayObjFun.NationalDayHeightS) * _top),'margin-left':0,'margin-top':0},600,function(){
			NationalDayObjFun.NationalDayAnimFlag = true;
		});
		$('#popImg').attr("src","https://static.web.sdo.com/shengqugames/pic/NationalDay/NationalImgS.jpg?" + Math.random());
	},
	// 灏忓浘鎹㈠ぇ鍥句簨浠�
	expandAnima : function(){
		$('#popWrap').fadeIn(600);
		$('#popImg').attr("src","https://static.web.sdo.com/shengqugames/pic/NationalDay/NationalImgP.jpg?" + Math.random());
		$('#popDiv').animate({'width':NationalDayObjFun.NationalDayWidth,'height':NationalDayObjFun.NationalDayHeight,'left':$(window).width()*0.5,'top':$(window).height()*0.5,'margin-left':-parseInt(NationalDayObjFun.NationalDayWidth/2),'margin-top':-parseInt(NationalDayObjFun.NationalDayHeight/2)},600,function(){
			NationalDayObjFun.NationalDayAnimFlag = false;
		})
	},
	
	// ============================================================pc绔脊绐椾簨浠跺鐞�



	// ============================================================绉诲姩绔脊绐椾簨浠跺鐞�
	//鍒涘缓鍥剧墖鍏冪礌锛屼笁绉掓垨鑰呯偣鍑讳箣鍚庣缉灏�
	NationalDayAddImgClice : function(_left,_top){
		var popDiv = document.createElement('div');
		var popImg = document.createElement('img');
		popImg.src="https://static.web.sdo.com/shengqugames/pic/NationalDay/NationalImgMG.jpg?" + Math.random();
		popImg.setAttribute('id','popImg');
		popDiv.setAttribute('id','popDiv');


		if(document.body != null){ 
			document.body.appendChild(popDiv);
			$('#popDiv').append(popImg);
			$('#popDiv').css({
				'position':'fixed',
				'width':$(window).width(),
				'height':$(window).height(),
				'left':'0',
				'top':'0',
				// 'width':NationalDayObjFun.NationalDayWidthClice,
				// 'height':NationalDayObjFun.NationalDayHeightClice,
				// 'left':$(window).width()*0.5,
				// 'top':$(window).height()*0.5,
				// 'margin-left':-parseInt(NationalDayObjFun.NationalDayWidthClice/2),
				// 'margin-top':-parseInt(NationalDayObjFun.NationalDayHeightClice/2),
				'display':'none',
				'cursor':'pointer',
				'zIndex':'99999999999999',
				'line-height': 0,
				'background':'rgba(0,0,0,0.8)'
			});
			$('#popImg').css({
				'width':'80%',
				'height':'auto',
				'position':'absolute',
				'top':'50%',
				'left':'10%',
				'transform':'translateY(-50%)',
				'-webkit-transform':'translateY(-50%)'
			});
			
			popImg.onload = function(){
				$('#popDiv').fadeIn(600);
				if(NationalDayObjFun.NationalDayLoadFlag){
					NationalDayObjFun.NationalDayLoadFlag = false;
					var scaleImgTimer1 = setTimeout(function(){
						$('#popDiv').fadeOut(100);
					},5000);

					$('#popDiv').on('touchstart',function(){
						clearTimeout(scaleImgTimer1);
						$('#popDiv').fadeOut(100);
					});

				}
			}
		}
	},
	// ============================================================绉诲姩绔脊绐椾簨浠跺鐞�

	

}

NationalDayObjFun.NationalDayInit();