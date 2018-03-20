/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-01 14:13:17
 * @version $Id$
 */

/*if($("#flag_confrim").length>0){
	$("#flag_confrim").show();
	$("body").on('touchmove',touchmove);  
}*/
//所有的图表颜色 模板D E F
var colorArrayAll = [
	{template:4,colorArray:[
		{color1:["#E96032","#FBB158","#B6D45A","#39B7B1","#3DB8AF","#49E2F9","#9576E5","#E0AEFF","#D5B1FF","#F3EAFF","#F7F3FF"],color2:["#D33246","#E85F32","#FAAF57","#B7D35A","#287785","#2BB7D9","#4299CE","#9078E4","#5DC4FF","#CAB2FF","#CDC8FE"]},
		{color1:["#E96032","#9576E5","#E0AEFF","#D5B1FF","#F3EAFF","#FBB158","#B6D45A","#39B7B1","#3DB8AF","#49E2F9","#F3EAFF"],color2:["#D33246","#4299CE","#9078E4","#5DC4FF","#CAB2FF","#E85F32","#FAAF57","#B7D35A","#287785","#2BB7D9","#CAB2FF"]},
		{color1:["#FBB158","#B6D45A","#49E2F9","#F3EAFF","#F7F3FF","#E96032","#39B7B1","#3DB8AF","#9576E5","#E0AEFF","#D5B1FF"],color2:["#E85F32","#FAAF57","#2BB7D9","#CAB2FF","#CDC8FE","#D33246","#B7D35A","#287785","#4299CE","#9078E4","#5DC4FF"]},
		{color1:["#FBB158","#3DB8AF","#B6D45A","#49E2F9","#9576E5","#E96032","#39B7B1","#E0AEFF","#D5B1FF","#F3EAFF","#F7F3FF"],color2:["#E85F32","#287785","#FAAF57","#2BB7D9","#4299CE","#D33246","#B7D35A","#9078E4","#5DC4FF","#CAB2FF","#CDC8FE"]},
		{color1:["#E96032","#E0AEFF","#F3EAFF","#3DB8AF","#49E2F9","#FBB158","#B6D45A","#39B7B1","#9576E5","#D5B1FF","#F7F3FF"],color2:["#D33246","#9078E4","#CAB2FF","#287785","#2BB7D9","#E85F32","#FAAF57","#B7D35A","#4299CE","#5DC4FF","#CDC8FE"]}
		]
	},
	/*{template:5,colorArray:[
		{color1:["#F7CC82","#FFB47C","#FF7D1C","#FED67D","#FFC84F","#C7FFD3","#BBE3C4","#7A9AC3","#E8F8FF","#D6EAF3","#C498D1"],color2:["#DAAE63","#FF7D1C","#EA5F3C","#FFC84F","#7ED098","#BBE3C4","#74B3D8","#5E738E","#C1E4F5","#C498D1","#91549B"],color3:["#DAAE63","#FF7D1C","#EA5F3C","#FFC84F","#7ED098","#BBE3C4","#74B3D8","#5E738E","#D4E8F2","#C498D1","#91549B"]},
		{color1:["#F7CC82","#FFB47C","#BBE3C4","#7A9AC3","#E8F8FF","#FF7D1C","#FFC84F","#FFC84F","#C7FFD3","#D6EAF3","#C498D1"],color2:["#DAAE63","#FF7D1C","#74B3D8","#5E738E","#C1E4F5","#EA5F3C","#FED67D","#7ED098","#BBE3C4","#C498D1","#91549B"],color3:["#DAAE63","#FF7D1C","#74B3D8","#5E738E","#D4E8F2","#EA5F3C","#FFC84F","#7ED098","#BBE3C4","#C498D1","#91549B"]},
		{color1:["#FF7D1C","#C7FFD3","#BBE3C4","#7A9AC3","#C498D1","#F7CC82","#FFB47C","#FED67D","#FFC84F","#E8F8FF","#D6EAF3"],color2:["#EA5F3C","#BBE3C4","#74B3D8","#5E738E","#91549B","#DAAE63","#FF7D1C","#FFC84F","#7ED098","#C1E4F5","#C498D1"],color3:["#EA5F3C","#BBE3C4","#74B3D8","#5E738E","#91549B","#DAAE63","#EA5F3C","#FFC84F","#7ED098","#D4E8F2","#C498D1"]},
		{color1:["#C498D1","#FFB47C","#D6EAF3","#E8F8FF","#FFC84F","#F7CC82","#FF7D1C","#FED67D","#C7FFD3","#BBE3C4","#7A9AC3"],color2:["#91549B","#FF7D1C","#C498D1","#C1E4F5","#7ED098","#DAAE63","#EA5F3C","#FFC84F","#BBE3C4","#74B3D8","#5E738E"],color3:["#91549B","#FF7D1C","#C498D1","#D4E8F2","#7ED098","#DAAE63","#EA5F3C","#FFC84F","#BBE3C4","#74B3D8","#5E738E"]},
		{color1:["#F7CC82","#7A9AC3","#BBE3C4","#FED67D","#FFB47C","#FF7D1C","#FFC84F","#C7FFD3","#E8F8FF","#D6EAF3","#C498D1"],color2:["#DAAE63","#5E738E","#74B3D8","#FFC84F","#FF7D1C","#EA5F3C","#7ED098","#BBE3C4","#C1E4F5","#C498D1","#91549B"],color3:["#DAAE63","#5E738E","#74B3D8","#FFC84F","#FF7D1C","#EA5F3C","#91549B","#C498D1","#D4E8F2","#7ED098","#BBE3C4"]}
		]
	},*/
	{template:5,colorArray:[
		{color1:["#DAAE63","#FF7D1C","#EA5F3C","#FFC84F","#7ED098","#BBE3C4","#74B3D8","#5E738E","#D4E8F2","#C498D1","#91549B"],color2:["#DAAE63","#FF7D1C","#EA5F3C","#FFC84F","#7ED098","#BBE3C4","#74B3D8","#5E738E","#D4E8F2","#C498D1","#91549B"],color3:["#DAAE63","#FF7D1C","#EA5F3C","#FFC84F","#7ED098","#BBE3C4","#74B3D8","#5E738E","#D4E8F2","#C498D1","#91549B"]},
		{color1:["#DAAE63","#FF7D1C","#74B3D8","#5E738E","#D4E8F2","#EA5F3C","#FFC84F","#7ED098","#BBE3C4","#C498D1","#91549B"],color2:["#DAAE63","#FF7D1C","#74B3D8","#5E738E","#D4E8F2","#EA5F3C","#FFC84F","#7ED098","#BBE3C4","#C498D1","#91549B"],color3:["#DAAE63","#FF7D1C","#74B3D8","#5E738E","#D4E8F2","#EA5F3C","#FFC84F","#7ED098","#BBE3C4","#C498D1","#91549B"]},
		{color1:["#EA5F3C","#BBE3C4","#74B3D8","#5E738E","#91549B","#DAAE63","#EA5F3C","#FFC84F","#7ED098","#D4E8F2","#C498D1"],color2:["#EA5F3C","#BBE3C4","#74B3D8","#5E738E","#91549B","#DAAE63","#EA5F3C","#FFC84F","#7ED098","#D4E8F2","#C498D1"],color3:["#EA5F3C","#BBE3C4","#74B3D8","#5E738E","#91549B","#DAAE63","#EA5F3C","#FFC84F","#7ED098","#D4E8F2","#C498D1"]},
		{color1:["#91549B","#FF7D1C","#C498D1","#D4E8F2","#7ED098","#DAAE63","#EA5F3C","#FFC84F","#BBE3C4","#74B3D8","#5E738E"],color2:["#91549B","#FF7D1C","#C498D1","#D4E8F2","#7ED098","#DAAE63","#EA5F3C","#FFC84F","#BBE3C4","#74B3D8","#5E738E"],color3:["#91549B","#FF7D1C","#C498D1","#D4E8F2","#7ED098","#DAAE63","#EA5F3C","#FFC84F","#BBE3C4","#74B3D8","#5E738E"]},
		{color1:["#DAAE63","#5E738E","#74B3D8","#FFC84F","#FF7D1C","#EA5F3C","#91549B","#C498D1","#D4E8F2","#7ED098","#BBE3C4"],color2:["#DAAE63","#5E738E","#74B3D8","#FFC84F","#FF7D1C","#EA5F3C","#91549B","#C498D1","#D4E8F2","#7ED098","#BBE3C4"],color3:["#DAAE63","#5E738E","#74B3D8","#FFC84F","#FF7D1C","#EA5F3C","#91549B","#C498D1","#D4E8F2","#7ED098","#BBE3C4"]}
		]
	},
	{template:6,colorArray:[
		{color1:["#FFC747","#647382","#FED77F","#B8F391","#7CE899","#79D4FC","#8B9AFB","#A6B9ED","#05E3FF","#FF9190","#FFC2B2"],color2:["#FE7D00","#3B4855","#FDB641","#5DF5BB","#36D29E","#6B8FFF","#5C6EE8","#586FAE","#5CCBFE","#F58D8B","#F69B88"]},
		{color1:["#FFC747","#79D4FC","#A6B9ED","#05E3FF","#7CE899","#FED77F","#B8F391","#647382","#8B9AFB","#FF9190","#FFC2B2"],color2:["#FE7D00","#6B8FFF","#586FAE","#5CCBFE","#36D29E","#FDB641","#5DF5BB","#3B4855","#5C6EE8","#F58D8B","#F69B88"]},
		{color1:["#647382","#FED77F","#5DF5BB","#7CE899","#A6B9ED","#FFC747","#79D4FC","#647382","#8B9AFB","#05E3FF","#FFC2B2"],color2:["#3B4855","#FDB641","#B8F391","#36D29E","#586FAE","#FE7D00","#6B8FFF","#5C6EE8","#5CCBFE","#F58D8B","#F69B88"]},
		{color1:["#FED77F","#A6B9ED","#05E3FF","#FF9190","#FFC2B2","#FFC747","#B8F391","#7CE899","#647382","#79D4FC","#8B9AFB"],color2:["#FDB641","#586FAE","#5CCBFE","#F58D8B","#F69B88","#FE7D00","#5DF5BB","#36D29E","#3B4855","#6B8FFF","#5C6EE8"]},
		{color1:["#FFC747","#7CE899","#FED77F","#79D4FC","#05E3FF","#B8F391","#647382","#8B9AFB","#A6B9ED","#FF9190","#FFC2B2"],color2:["#FE7D00","#36D29E","#FDB641","#6B8FFF","#5CCBFE","#5DF5BB","#3B4855","#5C6EE8","#586FAE","#F58D8B","#F69B88"]}
		]
	},
	{template:7,colorArray:[
		{color1:["#40D0D9","#6A6A9A","#60C2B8","#53D7ED","#97E3ED","#C1AEE0","#E2BAEA","#FF68A1","#FFB59F","#EEACAC","#F9D3D2"],color2:["#7D83E2","#313147","#42A6B2","#699AEF","#A88C8","#7760A1","#BA6DC6","#FF886D","#FE8B69","#E47476","#FAAAA6"]},
		{color1:["#97E3ED","#C1AEE0","#E2BAEA","#6A6A9A","#40D0D9","#60C2B8","#F9D3D2","#EEACAC","#FEA288","#FF886D","#699AEF"],color2:["#7A88C8","#7760A1","#BA6DC6","#313147","#7D83E2","#42A6B2","#FAAAA6","#E47476","#FE8B69","#FF68A1","#53D7ED"]},
		{color1:["#40D0D9","#60C2B8","#6A6A9A","#97E3ED","#C1AEE0","#E2BAEA","#53D7ED","#EEACAC","#FFB59F","#F9D3D2","#FF68A1"],color2:["#7D83E2","#42A6B2","#313147","#7A88C8","#7760A1","#BA6DC6","#699AEF","#E47476","#FE8B69","#FAAAA6","#FF886D"]},
		{color1:["#53D7ED","#C1AEE0","#97E3ED","#60C2B8","#FF68A1","#FFB59F","#EEACAC","#F9D3D2","#40D0D9","#E2BAEA","#6A6A9A"],color2:["#699AEF","#7760A1","#7A88C8","#42A6B2","#FF886D","#FE8B69","#E47476","#FAAAA6","#7D83E2","#BA6DC6","#313147"]},
		{color1:["#6A6A9A","#97E3ED","#60C2B8","#53D7ED","#C1AEE0","#FFB59F","#E2BAEA","#FF68A1","#EEACAC","#40D0D9","#F9D3D2"],color2:["#313147","#7A88C8","#42A6B2","#699AEF","#7760A1","#FE8B69","#BA6DC6","#FF886D","#E47476","#7D83E2","#FAAAA6"]}
		]
	},
	{template:8,colorArray:[
		{color1:["#F48B61","#C1CAD1","#ADBECA","#FBDC77","#42CBE0","#9C96F9","#96A6FC","#86E5FF","#8BEACC","#81DFC1","#FFB6AA"],color2:["#F3636A","#90A1AE","#6B8498","#F89872","#5C9ECA","#5A4DD4","#6F82F2","#45CBFF","#41C5DF","#54C8A2","#E07B7C"]},
		{color1:["#ADBECA","#FFB6AA","#FBDC77","#F48B61","#C1CAD1","#9C96F9","#96A6FC","#42CBE0","#86E5FF","#8BEACC","#81DFC1"],color2:["#6B8498","#E07B7C","#F89872","#F3636A","#90A1AE","#5A4DD4","#6F82F2","#5C9ECA","#45CBFF","#41C5DF","#54C8A2"]},
		{color1:["#F48B61","#42CBE0","#C1CAD1","#FBDC77","#9C96F9","#ADBECA","#96A6FC","#8BEACC","#81DFC1","#FFB6AA","#86E5FF"],color2:["#F3636A","#5C9ECA","#90A1AE","#F89872","#5A4DD4","#6B8498","#6F82F2","#41C5DF","#54C8A2","#E07B7C","#45CBFF"]},
		{color1:["#FBDC77","#ADBECA","#F48B61","#9C96F9","#96A6FC","#42CBE0","#C1CAD1","#8BEACC","#86E5FF","#FFB6AA","#81DFC1"],color2:["#F89872","#6B8498","#F3636A","#5A4DD4","#6F82F2","#5C9ECA","#90A1AE","#41C5DF","#45CBFF","#E07B7C","#54C8A2"]},
		{color1:["#FFB6AA","#C1CAD1","#F48B61","#96A6FC","#9C96F9","#86E5FF","#8BEACC","#42CBE0","#FBDC77","#FFB6AA","#ADBECA"],color2:["#E07B7C","#90A1AE","#F3636A","#6F82F2","#5A4DD4","#45CBFF","#41C5DF","#5C9ECA","#F89872","#E07B7C","#6B8498"]}
		]
	},
	{template:9,colorArray:[
		{color1:["#6ab0f3","#bbb2d5","#eda651","#79d4ca","#c4daeb","#eae6fe","#719fec","#898ac5","#fea77c","#fcc6a7","#ff918e"],color2:["#3e83e9","#a18ac0","#e58d43","#4bc4b7","#aae0e1","#d5dff5","#8084e0","#585ea1","#fe8f68","#fbafbf","#fd6b6d"]}
		]
	},
	{template:10,colorArray:[
		{color1:["#4896e0","#e6be3e","#bbb2d5","#79d4ca","#c4daeb","#eae6fe","#719fec","#898ac5","#fea77c","#fcc6a7","#ff918e"],color2:["#004391","#ec8a00","#a18ac0","#4bc4b7","#aae0e1","#d5dff5","#8084e0","#585ea1","#fe8f68","#fbafbf","#fd6b6d"]},
		{color1:["#719fec","#fea77c","#ff918e","#898ac5","#c4daeb","#79d4ca","#4896e0","#eae6fe","#e6be3e","#fcc6a7","#bbb2d5"],color2:["#8084e0","#fe8f68","#fd6b6d","#585ea1","#aae0e1","#4bc4b7","#004391","#d5dff5","#ec8a00","#fbafbf","#a18ac0"]},
		{color1:["#e6be3e","#898ac5","#4896e0","#719fec","#eae6fe","#ff918e","#fcc6a7","#fea77c","#79d4ca","#bbb2d5","#c4daeb"],color2:["#ec8a00","#585ea1","#004391","#8084e0","#d5dff5","#fd6b6d","#fbafbf","#fe8f68","#4bc4b7","#a18ac0","#aae0e1"]}
		]
	},
	{template:"11red",colorArray:[
		{color1:["#00ecdf","#ffa01a","#3b77fe","#ef5f4b","#d3dbf0","#8ea2f8","#cce1f3","#c1e8f2","#8cdbbe","#40d0f8","#f5e9b3"],color2:["#2d49f4","#fc6b00","#6737fa","#eb3870","#8ea2f8","#e55e7e","#8fbce8","#87c9dd","#2abbb3","#5191ea","#f6d172"]},
		]
	},
	{template:"11yellow",colorArray:[
		{color1:["#825bb5","#469ed9","#fac729","#ffa06c","#b4cd55","#d9d6d7","#ffb16b","#3ed4ea","#e3febe","#d4e7fd","#58daf3"],color2:["#7c376f","#4860d4","#fdad48","#ff815d","#5bb75c","#c9add1","#fc8961","#faade1","#c1e692","#c1d4e9","#8ba2f1"]},
		]
	},
	{template:"11green",colorArray:[
		{color1:["#ef5f4b","#90dcbf","#f9b6bc","#6b97ff","#b065ef","#88cbfe","#ffb16b","#919df5","#ffc333","#63e2b7","#58daf3"],color2:["#eb3870","#2abbb3","#e55e7e","#5c45ff","#8540f1","#35d6e4","#fc8961","#6567d9","#fd8e46","#09c794","#8ba2f1"]},
		]
	},
	{template:"11blue",colorArray:[
		{color1:["#ef5f4b","#00eedf","#c2e8f2","#6b99ff","#d3dbf0","#8ea2f8","#cce1f3","#c1e8f2","#8cdbbe","#40d0f8","#f5e9b3"],color2:["#e42304","#2D49F3","#87c9dd","#5c45ff","#8ea2f8","#e55e7e","#8fbce8","#87c9dd","#2abbb3","#5191ea","#f6d172"]},
		]
	}
];

//设置图表颜色 template:模板 colorIndex:模板里的颜色组序号
function setColors(template,colorIndex){
	var colors=["#FE8306","#FDB846","#69F4B6","#36D29E",'#3B4956','#6C95FF','#5E70E9','#6278B6','#5CCBFE','#F8A390','#FEBFAF'];  //默认渐变色系1
	var colors2=["#FFC747","#FED77F","#5DF5BB","#7CE899",'#647382','#79D4FC','#8B9AFB','#A6B9ED','#05E3FF','#FF9190','#FFC2B2'];  //默认渐变色系2
	template = template || 6;
	var obj;
	colorIndex = (parseInt(colorIndex)-1) || 0;
	if(colorArrayAll && colorArrayAll.length > 0){
		for(var i=0;i<colorArrayAll.length;i++){
			if(colorArrayAll[i].template == template){
				obj = colorArrayAll[i].colorArray[colorIndex];
			}
		}
	}
	Highcharts.getOptions().colors = Highcharts.map((obj && obj.color1) || colors, function(color,index) {
		return {  
			linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },  
			stops: [  
				[0, color],  
				[1, (obj && obj.color2[index]) || colors2[index]] // darken  
			]  
		};
	});
}
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


$(".chart_pie_svg>.highcharts-container>svg>rect").each(function(){
	$(this).attr("rx","277");
	$(this).attr("ry","277");
});

// $(".chart_svg").each(function(){
// 	$(this).addClass("fadeInUp");
// 	$(this).addClass("wow");
// });

if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
    new WOW().init();
};
var wheight = $(window).height();
$("#menu_show").click(function(){
	$("html,body").css("overflow-y","hidden");
	$('.tab:visible').height(wheight);
	scroll_top=$('body').scrollTop();
	$("#menu").animate({
		left:"0"
	},300)
});
$("#menu").click(function(e){
	if(e.target.tagName.toLowerCase() == "a" && $(e.target).next("ul").length != 0){
		return;
	}
	$("html,body").css("overflow-y","scroll");
	$('.tab:visible').height('auto');
	$(this).animate({
	 	left:"100%"
	},300)
});
$(".menu_item").click(function(){
	$("body").css("overflow-y","scroll");
	var tab=$(this).attr("name");
	scroll_tab=tab;
	$(".tab").hide();
	$(tab).show();
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
	    new WOW().init();
	};
	if(tab=="#index"){
		location.hash = "index";
		$('body').scrollTop(scroll_top);
		$('#index,#fixed_btn>#home,footer,#posterShow').show();
		$('#fixed_btn>#back').hide();
		
		if($("#backHidden").val()){   //链接跳转过来
			$("#backLine").show();
			$("#home").hide();
		}
	}else{
		$('body').scrollTop(0);
	}
	$("#menu").animate({
	  	left:"100%"
	},300)
});
$(".tab_info").click(function(){
    $(".tab").hide();
    var tab=$(this).attr("name");
	$(tab).show();
	location.hash = tab.replace('#','');
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
	    new WOW().init();
	};
	$('body').scrollTop(0);
});
$(".search").click(function(){
	$(".tab").hide();
	$("#tab_sign").show();
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    };
})
$(".menu_search").click(function(){
	$("body").css("overflow-y","scroll");
	$('body').scrollTop(0);
	$(".tab").hide();
	$("#tab_sign").show();
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    };
    $("#menu").animate({
		left:"100%"
	},300)
});



gd_img();
$(window).resize(function() {
	gd_img();
});
function gd_img(){
	$(".gd_img_div").each(function(){
		var item_i=1;
		var width=($(window).width()/4);
		$(".gd_img_div").css("height",$(window).width());
		$(this).find(".gd_img_item").each(function(){
			if(item_i==1){
				$(this).css("height",width);
				$(this).css("left",0);
				$(this).css("top",0);
			}else if(item_i==2){
				$(this).css("height",width);
				$(this).css("left",width*1);
				$(this).css("top",0);
			}else if(item_i==3){
				$(this).css("height",width);
				$(this).css("left",width*2);
				$(this).css("top",0);
			}else if(item_i==4){
				$(this).css("height",width);
				$(this).css("left",width*3);
				$(this).css("top",0);
			}else if(item_i==5){
				$(this).css("height",width);
				$(this).css("left",0);
				$(this).css("top",width);
			}else if(item_i==6){
				$(this).css("height",width);
				$(this).css("left",width*3);
				$(this).css("top",width);
			}else if(item_i==7){
				$(this).css("height",width);
				$(this).css("left",0);
				$(this).css("top",width*2);
			}else if(item_i==8){
				$(this).css("height",width);
				$(this).css("left",width*3);
				$(this).css("top",width*2);
			}else if(item_i==9){
				$(this).css("height",width);
				$(this).css("left",0);
				$(this).css("top",width*3);
			}else if(item_i==10){
				$(this).css("height",width);
				$(this).css("left",width*3);
				$(this).css("top",width*3);
			}else if(item_i==11){
				$(this).css("height",width*2);
				$(this).css("left",width);
				$(this).css("top",width);
			}
			item_i++;
		});
		$(".gd_my_ordernum").each(function(){
			$(this).css("height",width);
			$(this).css("left",width);
			$(this).css("top",width*3);
		});
	});
}
$(".form1_submit").click(function(){
	if($("#num").val()==""){
		alert("持股数不为空");
		return;
	}
	document.form1.submit();
});
$(".form2_submit").click(function(){
	if($("#tab11_num").val()==""){
		alert("持股数不为空");
		return;
	}
	document.form2.submit();
});
$(".sign_close_a").click(function(){
	$("#sign_confrim").hide();
	$("body").off('touchmove',touchmove);  
});
$(".sign_ready_close_a").click(function(){
	$("#sign_ready_confrim").hide();
	$("body").off('touchmove',touchmove);  
});
$(".sign_share").click(function(){
	$("#sharefq").show();
});
$(".care").click(function(){
	$("#code_confrim").show();
	$("body").on('touchmove',touchmove); 
});
$(".code_close_a").click(function(){
	$("#code_confrim").hide();
	$("body").off('touchmove',touchmove); 
});



$(".apply").click(function(){
	$("#code_confrim1").show();
	$("body").on('touchmove',touchmove);
});
$(".code_close_a").click(function() {
	$("#code_confrim1").hide();
	$("body").off('touchmove',touchmove);
});
$(".code_close_a").click(function() {
	$("#code_confrim2").hide();
	$("body").off('touchmove',touchmove);
});

$(document).on("click", "#btnSubmitActivate", function() {

	var job_title = $("#job_title").val();
	var name = $("#name").val();
	var mobile = $("#mobile").val();

	var dataSubmit;

	dataSubmit = {"job_title": job_title, "name": name, "mobile": mobile};

	var pattern1 = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
	var pattern2 = /^1/;  

	if(pattern1.test(mobile)&&pattern2.test(mobile)&&job_title&&name){
		//向后台api发送数据
		$.ajax({
	    	url: 'http://api2.ireasy.com/api/v1/report/'+$("#report_id").val()+'/companyapply/',
		    method: 'POST',
		    method: 'POST',
		    dataType: 'json',
		    data: dataSubmit,	    
		    success: function(res){
				if(res.id)
				{
					$("#code_confrim1").hide();
					$("#code_confrim2").show();
				}
		    }
		});

	}else{
		$(".msgInputError").show();
		if(!name||!job_title||!mobile)
		{
			$(".msgInputError p").html("您输入的信息不完整，请完善后提交！");
		}
		else if(!pattern1.test(mobile)||!pattern2.test(mobile))
		{
			$(".msgInputError p").html("您输入的信息有误，请核对后提交！");
		}
	}

});

$(function(){
	$(window).scroll(function(){
	    if($(window).scrollTop()>0){
	        $(".fix1").animate({
	        	left:'-80'
	        },150);
	        $(".fix2").animate({
            	left: "0"
          	},150);
	    }
	});
	$(".fix2").click(function(){
        $(".fix1").animate({
        	left:'0'
        },150);
        $(".fix2").animate({
        	left:"-40"
        },150);
	})
});
/*if(!window.location.hash.substr(1)){
	if($('body').scrollTop()>$(window).height()){
		$("#fixed_btn").show();
	}else{
		$("#fixed_btn").hide();
	}
}else{
	if(window.location.hash.substr(1).indexOf('tab')==-1){
		if($('body').scrollTop()>$(window).height()){
			$("#fixed_btn").show();
		}else{
			$("#fixed_btn").hide();
		}
	}else{
		$("#fixed_btn").show();
	}
}
$(window).bind("scroll", function(event){
	if(!window.location.hash.substr(1)){
		if($('body').scrollTop()>$(window).height()){
			$("#fixed_btn").show();
		}else{
			$("#fixed_btn").hide();
		}
	}else{
		if(window.location.hash.substr(1).indexOf('tab')==-1){
			if($('body').scrollTop()>$(window).height()){
				$("#fixed_btn").show();
			}else{
				$("#fixed_btn").hide();
			}
		}else{
			$("#fixed_btn").show();
		}
	}
});*/

var like_busy=false;
$('#ask_content').bind('input propertychange', function() {
	if($(this).val().length>10){
		$(".ask_submit").removeClass('disabled');
	}else{
		$(".ask_submit").addClass('disabled');
	}
	if($(this).val().length>200){
		$(this).val($(this).val().substring(0,200))
	}
	$(".words_num").text(200-$(this).val().length);
});
if(IsPC){
	$("footer p").click(function(){
		$("#footer_confrim").show();
		$('body').addClass('modal-open');
	});
	$(".confrim_close").click(function(){
		$("#footer_confrim").hide();
		$('body').removeClass('modal-open');
	});
	$("#share").click(function(){
		$("#share_confrim").show();
		$('body').addClass('modal-open');
	});
	$("#share_confrim_close").click(function(){
		$("#share_confrim").hide();
		$('body').removeClass('modal-open');
	});
	$("#ask_btn").click(function(){
		$.ajax({
            type: "post",
            url: "/view/"+$("#report_id").val()+"/authorize",
            dataType: "json",
            beforeSend: function () {
			    $("#ask_btn").addClass("disabled");
			},
            success: function(data){
            	if(data.meta.error==0){
            		$("#ask").modal('toggle');
					$('body').addClass('modal-open');
            	}else if(data.meta.error==1002){
            		window.location.href='http://www.ireasy.com/oauth/oauth.php?redirect_uri=http://www.ireasy.com/site/template/jumpto.html?other_uri='+encodeURIComponent(location.href);
            	}
            },
            complete: function () {
				$("#ask_btn").removeClass("disabled");
			},
            error: function(data){
                 //alert(data);
                //dump(data);
            }
        });
	});
	$(".ask_submit").click(function(){
		$.ajax({
            type: "post",
            url: "/view/"+$("#report_id").val()+"/ask",
            data:{"question_title":$("#ask_content").val()},
            dataType: "json",
            beforeSend: function () {
			    $(".ask_submit").addClass("disabled");
			},
            success: function(data){
            	console.log(data);
            	if(data.meta.error==0){
            		$(".result_msg").show();
            		$("#ask_content").val('');
            		setTimeout(function(){
            			$("#ask").modal('toggle');
						$('body').removeClass('modal-open');
            		}, 1000)
            	}else if(data.meta.error==1002){
            		window.location.href='http://www.ireasy.com/oauth/oauth.php?redirect_uri=http://www.ireasy.com/site/template/jumpto.html?other_uri='+encodeURIComponent(location.href);
            	}
            },
            complete: function () {
				$(".ask_submit").removeClass("disabled");
			},
            error: function(data){
                 //alert(data);
                //dump(data);
            }
        });
	});
	$("#like").click(function(){
		if($(this).is('.disabled')){
            return;
        }
		if(like_busy){
			return;
		}
		$.ajax({
            type: "post",
            url: "/view/station/report/"+$("#report_id").val()+"/like",
            data:{"page_url":window.location.href},
            dataType: "json",
            success: function(data){
            	console.log(data);
            	if(data.meta.error==0){
            		like_busy=true;
            		$("#like").text(parseInt($("#like").text())+1);
            		$("#like").css('background-image',"url(/view/half_year_template/images/icon-z1.png)");
            	}
            },
            error: function(data){
                 //alert(data);
                //dump(data);
            }
        });
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
	$("#share").on('touchstart', function(event){
		$("#share_confrim").show();
		$('body').addClass('modal-open');
	});
	$("#share_confrim_close").on('touchstart', function(event){
		$("#share_confrim").hide();
		$('body').removeClass('modal-open');
	});
	$("#ask_btn").on('touchstart', function(event){
		$.ajax({
            type: "post",
            url: "/view/"+$("#report_id").val()+"/authorize",
            dataType: "json",
            beforeSend: function () {
			    $("#ask_btn").addClass("disabled");
			},
            success: function(data){
            	if(data.meta.error==0){
            		$("#ask").modal('toggle');
					$('body').addClass('modal-open');
            	}else if(data.meta.error==1002){
            		window.location.href='http://www.ireasy.com/oauth/oauth.php?redirect_uri=http://www.ireasy.com/site/template/jumpto.html?other_uri='+encodeURIComponent(location.href);
            	}
            },
            complete: function () {
				$("#ask_btn").removeClass("disabled");
			},
            error: function(data){
                 //alert(data);
                //dump(data);
            }
        });
	});
	$(".ask_submit").on('touchstart', function(event){
		$.ajax({
            type: "post",
            url: "/view/"+$("#report_id").val()+"/ask",
            data:{"question_title":$("#ask_content").val()},
            dataType: "json",
            beforeSend: function () {
			    $(".ask_submit").addClass("disabled");
			},
            success: function(data){
            	console.log(data);
            	if(data.meta.error==0){
            		$("#ask_content").val('');
            		$(".result_msg").show();
            		setTimeout(function(){
            			$("#ask").modal('toggle');
						$('body').removeClass('modal-open');
            		}, 1000)
            	}else if(data.meta.error==1002){
            		window.location.href='http://www.ireasy.com/oauth/oauth.php?redirect_uri=http://www.ireasy.com/site/template/jumpto.html?other_uri='+encodeURIComponent(location.href);
            	}
            },
            complete: function () {
				$(".ask_submit").removeClass("disabled");
			},
            error: function(data){
                 //alert(data);
                //dump(data);
            }
        });
	});
	$("#like").on('touchstart', function(event){
		if($(this).is('.disabled')){
            return;
        }
		if(like_busy){
			return;
		}
		$.ajax({
            type: "post",
            url: "/view/station/report/"+$("#report_id").val()+"/like",
            data:{"page_url":window.location.href},
            dataType: "json",
            success: function(data){
            	if(data.meta.error==0){
            		like_busy=true;
            		$("#like").text(parseInt($("#like").text())+1);
            		$("#like").css('background-image',"url(/view/half_year_template/images/icon-z1.png)");
            	}
            },
            error: function(data){
                 //alert(data);
                //dump(data);
            }
        });
	});
}

if($("#backHidden").val()){   //链接跳转过来
	$("#backLine").show();
	$("#home").hide();
}


