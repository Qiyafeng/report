/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-25 12:56:12
 * @version $Id$
 */

var colors=["#DAAE63","#FF7D1C","#EA5F3C","#FFC84F",'#7ED098','#BBE3C4','#74B3D8','#5E738E','#D4E8F2','#C498D1','#91549B'];  //渐变色系1
var textColor = "rgba(0,0,0,.7)";
var titleColor = "rgba(0,0,0,1)";
var gridLineColor = 'rgba(211,211,211,1)';

var fontSize = "14px";
var legendWH = 20;  //图例宽高
var legendFsize = "16px";  //图例字体大小
var titleSize = "26px";   //图表标题字体大小

//设置图表颜色
setColors(8, $("#template_color_theme").attr("value"));
