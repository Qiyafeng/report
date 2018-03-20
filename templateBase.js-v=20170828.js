/**
 *
 * @authors Your Name (you@example.org)
 * @date    2016-12-15 11:11:17
 * @version $Id$
 */

if(!window.jQuery){
	alert('jquery 未加载');
}
var scroll_tab='#index';
var scroll_top=$('body').scrollTop();
var touchmove=function(event){
		event.preventDefault();
	}
var hash_event=function(){
	$(".appear").removeClass("appear");
	var height=$(window).height();

	$(".tab>.bl-body").css("min-height",$(window).height());
	var tabID = window.location.hash.substr(1);
	if(tabID){
		$(".tab").hide();
		$("#sign_confrim").hide();
		if($("#"+tabID).parent('div').parent('div').attr('id')=='index'){
			$("#index").show();
		}else if(tabID=='tab_sign_sign'){
			if($("#sign_confrim").length > 0){
				$("body").on('touchmove',touchmove);
				$("#tab_sign").show();
				$("#sign_confrim").show();
			}else{
				location.hash = "index";
				$("#index").show();
			}
		}else if(tabID=='tab_sign_sign_ready'){
			if($("#sign_ready_confrim").length > 0){
				$("body").on('touchmove',touchmove);
				$("#tab_sign").show();
				$("#sign_ready_confrim").show();
			}else{
				location.hash = "index";
				$("#index").show();
			}
		}else if(tabID=='tab_sign_sign_fail'){
			$("#tab_sign").show();
			location.hash = "tab_sign";
			alert('输入的股数大于总流通股数');
		}else{
			if($("#"+tabID).length>0){
				$("#"+tabID).show();
			}
		}
		if(tabID=='index'&&scroll_top!==undefined){
			// console.log(scroll_top);
			scroll_tab='#index';
			$('body').scrollTop(scroll_top);
		}
		$("#menu").animate({
		  	left:"100%"
		},300)
	}else{
		location.hash = "index";
	}
}
$(function() {
	var wh = $(window).height();
	var columns = $(".tab_column");
	
	function autoHeight(){//动态计算每屏高度
		columns.height("auto");
		columns.each(function(e,n){
			var self = $(this);
			if(self.outerHeight() < wh){
				self.outerHeight(wh);
			}else{
				self.height("auto");	
			}
		});
	
		$('.manage_div.tab_column').css('backgroundSize', 'auto '+(640/375 * wh)+'px');
	}
	autoHeight();
	window.setTimeout(function(){
		autoHeight();	
	},1000);
	
	//动态计算表格td宽度 最多显示3例
	function setTableWidth(){
		var absWidth = parseInt($(".tab .abstract:visible").width()/3);
		$(".tab .abstract:visible table").each(function(index, element) {
			if($(this).parents(".tableWrap").length == 0){
				$(this).wrap("<div class='tableWrap'></div>");
				var width=0;
				var colspanCount = 0;
				$(this).find("tr:eq(0) td").each(function(index, element) {
					var colspan =parseInt($(this).attr("colspan")) || 1;
					width += (absWidth*colspan);
					colspanCount = colspanCount + colspan;
				});
				if(colspanCount > 3){
					$(this).width(width);
				}
			}
		});
		
		$(".tab .abstract:visible td").each(function(index, element) {
			var num = 3;
			if($(this).parents("tr").find("td").length < 3){
				num = $(this).parents("tr").find("td").length;	
			}
			var absWidth = parseInt($(".tab .abstract:visible").width()/num);
			var colspan =parseInt($(this).attr("colspan")) || 1;
			$(this).width((absWidth*colspan)-40);
		});
	}
	setTableWidth();

    //update by xm
    //这里为了解决 backLink 不能返回主页
    $("#backLine").attr("href","javascript:void(0)").click(function(){
        if(window.location.hash==="#index"){
            location.href = $("#back").attr("href");
        }else{
            window.history.back();
        }
    });

	//初始判断返回/home图标
	//if(window.location.href.indexOf("tab") != -1){
    if(document.referrer===""){
		var url=window.location.href;
		$('#fixed_btn>#home,footer').show();
        $('#fixed_btn>#backLine,#fixed_btn>#back').hide();
	}else{
        $('#fixed_btn>#home,#fixed_btn>#back,footer,#posterShow').hide();
        $('#fixed_btn>#backLine').show();
	}
	var parentId;
	//进入二级页面
	$('img[alt=more],.tab_info,.menu_list .menu_item').on('click', function(e) {
		$('#fixed_btn>#home,#fixed_btn>#backLine,footer,#posterShow').hide();
		$('#fixed_btn >#back').show();
		//动态计算表格td宽度 最多显示3例
		setTableWidth();
		parentId = $(this).parents(".tab_column").attr("id");
	})
	//二级菜单返回
	$('#fixed_btn>#back').on('click', function(e) {
		e.preventDefault()
		var url=window.location.href;
		$('#index,#fixed_btn>#home,footer').show();
		
		$('#fixed_btn>#back,.tab.tab_common').hide();
		$(".tab_click").removeClass('active').eq(0).addClass("active");
		if(parentId){
			location.hash = parentId;
		}else{
			location.hash = "#index";
		}
		//location.hash = "#index";
		//$('.tab:visible').height('auto');
		//autoHeight();
		
		if($("#backHidden").val()){   //链接跳转过来
			$("#backLine").show();
			$("#home").hide();
		}
	});
	
	//左边描点事件
    $(".tab_click").click(function(){
        $(".tab_click").removeClass('active');
        var id=$(this).data("href");
        $(window).scrollTop($(id).offset().top);
        $(this).addClass("active");
    })
	//滚动时左边描点效果对应改变
    $(window).bind("scroll", function(event){
        $("#index").find(".tab_column").each(function(){
            if($(this).offset().top-60<=$(window).scrollTop()){
                var id=$(this).attr("id");
                $(".tab_click").removeClass('active');
                $(".tab_click[data-href='#"+id+"']").addClass("active");
            }
        })
    });
	
	//返回事件
	window.addEventListener("popstate", function(e) { 
		var hash = location.hash;
		if(hash.indexOf("tab") == -1){
			var url=window.location.href;
			$('#index,#fixed_btn>#home,footer').show();
			$('#fixed_btn>#back,.tab.tab_common').hide();
			$('.tab:visible').height('auto');
			if($("#backHidden").val()){   //链接跳转过来
				$("#backLine").show();
				$("#home").hide();
			}	
		}else{
			$('#fixed_btn>#home,#fixed_btn>#backLine,footer,#posterShow').hide();
			$('#fixed_btn >#back').show();	
		}
	}, false);
	
	function IsPC() 
	{ 
	   var userAgentInfo = navigator.userAgent; 
	   var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"); 
	   var flag = true; 
	   for (var v = 0; v < Agents.length; v++) { 
		   if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; } 
	   } 
	   return flag; 
	}
	if(IsPC){
		$("footer p").click(function(){
			$("#footer_confrim").show();
			$('body').addClass('modal-open');
		});
		$(".confrim_close").click(function(){
			$("#footer_confrim").hide();
			$('body').removeClass('modal-open');
		});
	}else{
		$("footer p").on('touchstart', function(event){
			$("#footer_confrim").show();
			$('body').addClass('modal-open');
		});
		$(".confrim_close").on('touchstart', function(event){
			$("#footer_confrim").hide();
			$('body').removeClass('modal-open');
		});
	}
});
