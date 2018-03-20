/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-25 12:56:12
 * @version $Id$
 */

function Convert(amtStr) {
	amtStr=amtStr.toString();
    var a, renum = '';
    var j = 0;
    var a1 = '', a2 = '', a3 = '';
    var tes = /^-/;
    a = amtStr.replace(/,/g, "");
    a = a.replace(/[^-\.,0-9]/g, ""); //删除无效字符
    a = a.replace(/(^\s*)|(\s*$)/g, ""); //trim
    if (tes.test(a)) a1 = '-';
    else a1 = '';
    a = a.replace(/-/g, "");
    if (a != "0" && a.substr(0, 2) != "0.") a = a.replace(/^0*/g, "");
    j = a.indexOf('.'); if (j < 0) j = a.length; a2 = a.substr(0, j); a3 = a.substr(j); j = 0;
    for (i = a2.length; i > 3; i = i - 3) {
        renum = "," + a2.substr(i - 3, 3) + renum;
        j++;
    }
    renum = a1 + a2.substr(0, a2.length - j * 3) + renum + a3;
 
    return renum;
}

//柱状图,折线图,面积图
function chart_canvas(id,type,title,min,max,categories,series){
	var rotation;
	if(type=='bar'){
		rotation=-45;
	}else{
		rotation=0;
	}
	var pointWidth;
	if(series.length<=3){
		pointWidth=20;
	}else{
		pointWidth=null;
	}
	$('#'+id).empty();
	$('#'+id).highcharts({
	    chart: {
	        type: type,
	   	    backgroundColor: 'none',
	        plotBorderWidth: 0,
	    },
	    credits: {
            enabled: false
        },
	    //colors:colors,
	    title: {
	        text: title,
	        style: {
	            color: titleColor,
	            fontfamily: "Microsoft YaHei",
	            fontSize:titleSize,
	            fontWeight: 'bold'
	        },
	        align:'center'
	    },
	    legend: {
	        align: 'center',
	        verticalAlign: 'bottom',
	        y:0,
	        symbolHeight: legendWH,
        	symbolWidth: legendWH,
        	itemStyle: {
                color: textColor,
                fontWeight: 'bold',
				fontSize:legendFsize
            }
	    },
	    xAxis: {
	       	startOnTick: false,
	       	endOnTick: false,
			lineColor:"rgba(0,0,0,0)",
	        tickLength: 0,
	           labels: {
               	formatter: function() {                         					
               		return categories[this.value];                     				
               	},
               	style:{
               		color: textColor,
	           		fontfamily: "Microsoft YaHei",
	           		fontSize:fontSize
               	}                 			
            },
            tickInterval:1,
            maxPadding:0.05
	    },
	    yAxis: {
	        title:'',
	        //gridLineDashStyle: 'longdash',
	        gridLineColor:gridLineColor,
	        gridLineWidth: 0.5,
	        min: min,
	        max:max,
	        tickPixelInterval: 50,
	        labels: {
	            style: {
	                color: textColor,
	            	fontfamily: "Microsoft YaHei",
	            	fontSize:fontSize
	            },
	            rotation: rotation
	        }
	    },
	    tooltip: {
	        formatter: function () {
                return '<span style="font-size:20px">'+categories[this.x]+'</span><br/>'+
                '<b>'+this.series.name+':</b>'+Convert(this.y);
            },
			style: {
				fontSize: "20px"
			}
	    },
	    credits: {
	        enabled: false
	    },
	    plotOptions: {
	        column: {
	            pointPadding: 0.2,
	            pointWidth: pointWidth,
	            borderWidth: 0,
	            dataLabels: {
	                enabled: false,
	                formatter: function() { 
 						return Convert(this.y);
  					},
	            },

               	enableMouseTracking: true
	        },
	        bar:{
	            pointPadding: 0.2,
	            pointWidth: pointWidth,
	            // pointWidth: 20,
	            borderWidth: 0,
	            dataLabels: {
	                enabled: false,
	                formatter: function() { 
 						return Convert(this.y);
  					},
	            },
               	enableMouseTracking: true
	        },
	        area:{
	            dataLabels: {
	            	enabled: false,
	               	formatter: function() { 
 						return Convert(this.y);
  					},
	            },
               	enableMouseTracking: true,
               	fillOpacity: 0.95
	        },
	        line:{
	            dataLabels: {
	                enabled: false,
	                formatter: function() { 
 						return Convert(this.y);
  					},
	            },
               	enableMouseTracking: true
	        },
	        series: {
                groupPadding: 0.1
            }
	    },
	    series: series
	});
}
//堆叠条形图
function charts_stack_bar_canvas(id,title,min,max,categories,series){
	var pointWidth;
	if(series.length<=3){
		pointWidth=20;
	}else{
		pointWidth=null;
	}
	$('#'+id).empty();
	$('#'+id).highcharts({
	    chart: {
	        type: 'bar',
	   	    backgroundColor: 'none',
	        plotBorderWidth: 0,
	    },
	    credits: {
            enabled: false
        },
	    //colors:colors,
	    title: {
	        text: title,
	        style: {
	            color: titleColor,
	            fontfamily: "Microsoft YaHei",
	            fontSize:titleSize,
	            fontWeight: 'bold'
	        },
	        align:'center'
	    },
	    legend: {
	        align: 'center',
	        verticalAlign: 'bottom',
	        y:0,
	        symbolHeight: legendWH,
        	symbolWidth: legendWH,
        	itemStyle: {
                color: textColor,
                fontWeight: 'bold',
				fontSize:legendFsize
            }
	    },
	    xAxis: {
	       	startOnTick: false,
	       	endOnTick: false,
			lineColor:"rgba(0,0,0,0)",
	        tickLength: 0,
	           labels: {
               	formatter: function() {                         					
               		return categories[this.value];                     				
               	},
               	style:{
               		color: textColor,
	           		fontfamily: "Microsoft YaHei",
	           		fontSize:fontSize,
               	},
            },
            tickInterval:1,
            maxPadding:0.05
	    },
	    yAxis: {
	        title:'',
	        //gridLineDashStyle: 'longdash',
	        gridLineColor:gridLineColor,
	        gridLineWidth: 0.5,
	        min: null,
	        max:null,
	        tickPixelInterval: 50,
	        labels: {
	            style: {
	                color: textColor,
	            	fontfamily: "Microsoft YaHei",
	            	fontSize:fontSize
	            },
	            rotation: -45
	        }
	    },
	    tooltip: {
	        // headerFormat: '<span style="font-size:10px">{point.key}</span><br/>',
	        formatter: function () {
                return '<span style="font-size:20px">'+categories[this.x]+'</span><br/>'+
                '<b>'+this.series.name+':</b>'+Convert(this.y);
            },
			style: {
				fontSize: "20px"
			}
	    },
	    credits: {
	        enabled: false
	    },
	    plotOptions: {
	        bar:{
	            pointPadding: 0.2,
	            pointWidth: pointWidth,
	            borderWidth: 0,
	            dataLabels: {
	                enabled: false,
	                formatter: function() { 
 						return Convert(this.y);
  					},
	            },
               	enableMouseTracking: true
	        },
	        series: {
                groupPadding: 0.1,
                stacking: 'normal'
            }
	    },
	    series: series
	});
}
//堆叠柱状图
function charts_stack_column_canvas(id,title,min,max,categories,series){
	var pointWidth;
	if(series.length<=3){

		pointWidth=20;
	}else{
		pointWidth=null;
	}
	$('#'+id).empty();
	$('#'+id).highcharts({
	    chart: {
	        type: 'column',
	   	    backgroundColor: 'none',
	        plotBorderWidth: 0,
	    },
	    credits: {
            enabled: false
        },
	    //colors:colors,
	    title: {
	        text: title,
	        style: {
	            color: titleColor,
	            fontfamily: "Microsoft YaHei",
	            fontSize:titleSize,
	            fontWeight: 'bold'
	        },
	        align:'center'
	    },
	    legend: {
	        align: 'center',
	        verticalAlign: 'bottom',
	        y:0,
	        symbolHeight: legendWH,
        	symbolWidth: legendWH,
        	itemStyle: {
                color: textColor,
                fontWeight: 'bold',
				fontSize:legendFsize
            }
	    },
	    xAxis: {
	       	startOnTick: false,
	       	endOnTick: false,
	        tickLength: 0,
	           labels: {
               	formatter: function() {                         					
               		return categories[this.value];                     				
               	},
               	style:{
               		color:textColor,
	           		fontfamily: "Microsoft YaHei",
	           		fontSize:fontSize,
               	},
            },
            tickInterval:1,
            maxPadding:0.05
	    },
	    yAxis: {
	        title:'',
	        //gridLineDashStyle: 'longdash',
	        gridLineColor:gridLineColor,
	        gridLineWidth: 0.5,
	        min: null,
	        max:null,
	        tickPixelInterval: 50,
	        labels: {
	            style: {
	                color:textColor,
	            	fontfamily: "Microsoft YaHei",
	            	fontSize:fontSize
	            },
	            rotation: 0
	        }
	    },
	    tooltip: {
	        // headerFormat: '<span style="font-size:10px">{point.key}</span><br/>',
	        formatter: function () {
                return '<span style="font-size:20px">'+categories[this.x]+'</span><br/>'+
                '<b>'+this.series.name+':</b>'+Convert(this.y);
            },
			style: {
				fontSize: "20px"
			}
	    },
	    credits: {
	        enabled: false
	    },
	    plotOptions: {
	        column:{
	            pointPadding: 0.2,
	            pointWidth: pointWidth,
	            borderWidth: 0,
	            dataLabels: {
	                enabled: false,
	                formatter: function() { 
 						return Convert(this.y);
  					},
	            },
               	enableMouseTracking: true
	        },
	        series: {
                groupPadding: 0.1,
                stacking: 'normal'
            }
	    },
	    series: series
	});
}
//百分比堆叠柱状图
function charts_percent_stack_column_canvas(id,title,min,max,categories,series){
	var pointWidth;
	if(series.length<=3){
		pointWidth=20;
	}else{
		pointWidth=null;
	}
	$('#'+id).empty();
	$('#'+id).highcharts({
	    chart: {
	        type: 'column',
	   	    backgroundColor: 'none',
	        plotBorderWidth: 0,
	    },
	    credits: {
            enabled: false
        },
	    //colors:colors,
	    title: {
	        text: title,
	        style: {
	            color: titleColor,
	            fontfamily: "Microsoft YaHei",
	            fontSize:titleSize,
	            fontWeight: 'bold'
	        },
	        align:'center'
	    },
	    legend: {
	        align: 'center',
	        verticalAlign: 'bottom',
	        y:0,
	        symbolHeight: legendWH,
        	symbolWidth: legendWH,
        	itemStyle: {
                color: textColor,
                fontWeight: 'bold',
				fontSize:legendFsize
            }
	    },
	    xAxis: {
	       	startOnTick: false,
	       	endOnTick: false,
	        tickLength: 0,
	           labels: {
               	formatter: function() {                         					
               		return categories[this.value];                     				
               	},
               	style:{
               		color:textColor,
	           		fontfamily: "Microsoft YaHei",
	           		fontSize:fontSize,
               	},
            },
            tickInterval:1,
            maxPadding:0.05
	    },
	    yAxis: {
	        title:'',
	        //gridLineDashStyle: 'longdash',
	        gridLineColor:gridLineColor,
	        gridLineWidth: 0.5,
	        min: null,
	        max:null,
	        tickPixelInterval: 50,
	        labels: {
	            style: {
	                color:textColor,
	            	fontfamily: "Microsoft YaHei",
	            	fontSize:fontSize
	            },
	        }
	    },
	    tooltip: {
	        // headerFormat: '<span style="font-size:10px">{point.key}</span><br/>',
	        formatter: function () {
                return '<span style="font-size:20px">'+categories[this.x]+'</span><br/>'+
                '<b>'+this.series.name+':</b>'+Convert(this.y);
            },
			style: {
				fontSize: "20px"
			}
	    },
	    credits: {
	        enabled: false
	    },
	    plotOptions: {
	        column:{
	            pointPadding: 0.2,
	            pointWidth: pointWidth,
	            borderWidth: 0,
	            dataLabels: {
	                enabled: false,
	                formatter: function() { 
 						return Convert(this.y);
  					},
	            },
               	enableMouseTracking: true
	        },
	        series: {
                groupPadding: 0.1,
                stacking: 'percent'
            }
	    },
	    series: series
	});
}
//3D柱状图
function chart_3d_column_canvas(id,title,min,max,categories,series){
	var pointWidth;
	if(series.length<=3){
		pointWidth=20;
	}else{
		pointWidth=null;
	}
	$('#'+id).empty();
	$('#'+id).highcharts({
		chart: {
	        type: 'column',
	        plotBorderWidth: 0,
	        backgroundColor: 'none',
	        options3d: {
	            enabled: true,
	            alpha: 10,
	            beta: 25,
	            depth: 70
	        },
	    },
	    credits: {
            enabled: false
        },
	    //colors:colors,
	    title: {
	        text: title,
	        style: {
	            color: titleColor,
	            fontfamily: "Microsoft YaHei",
	            fontSize:titleSize,
	            fontWeight: 'bold'
	        },
	        align:'center'
	    },
	    legend: {
	        align: 'center',
	        verticalAlign: 'bottom',
	        y:0,
	        symbolHeight: legendWH,
            symbolWidth: legendWH,
            itemStyle: {
                color: textColor,
                fontWeight: 'bold',
				fontSize:legendFsize
            }
	    },
	    xAxis: {
	        startOnTick: true,
	        tickLength: 0,
	        gridLineDashStyle: 'solid',
	        gridLineColor:gridLineColor,
	        gridLineWidth: 0.5,
	        labels: {
                formatter: function() {                         					
                	return categories[this.value];                     				
                },
                style:{
                	color:textColor,
	            	fontfamily: "Microsoft YaHei",
	            	fontSize:fontSize
                }                   			
            },
            tickInterval:1,
            minPadding:0,
            maxPadding:0
	    },
	    yAxis: {
	        title:'',
	        gridLineDashStyle: 'solid',
	        gridLineColor:gridLineColor,
	        gridLineWidth: 0.5,
	        min: min,
	        max:max,
	        tickPixelInterval: 50,
	        labels: {
	            style: {
	                color:textColor,
	            	fontfamily: "Microsoft YaHei",
	            	fontSize:fontSize
	            }
	        }
	    },
	    tooltip: {
	        // headerFormat: '<span style="font-size:10px">{point.key}</span><br/>',
	        formatter: function () {
                return '<span style="font-size:20px">'+categories[this.x]+'</span><br/>'+
                '<b>'+this.series.name+':</b>'+Convert(this.y);
            },
			style: {
				fontSize: "20px"
			}
	    },
	    credits: {
	        enabled: false
	    },
	    plotOptions: {
	        column: {
	        	depth: 30,
	            pointPadding: 0.2,
	            pointWidth: pointWidth,
	            borderWidth: 0,
	            dataLabels: {
	                enabled: false,
	                formatter: function() { 
 						return Convert(this.y);
  					},
	            },
               	enableMouseTracking: true
	        }
	    },
	    series: series
	});
}
//堆叠的3D柱状图
function charts_stack_3d_column_canvas(id,title,min,max,categories,series){
	var pointWidth;
	if(series.length<=3){
		pointWidth=20;
	}else{
		pointWidth=null;
	}
	$('#'+id).empty();
	$('#'+id).highcharts({
		chart: {
	        type: 'column',
	        plotBorderWidth: 0,
	        backgroundColor: 'none',
	        options3d: {
	            enabled: true,
	            alpha: 10,
	            beta: 25,
	            depth: 70
	        },
	    },
	    credits: {
            enabled: false
        },
	    //colors:colors,
	    title: {
	        text: title,
	        style: {
	            color: titleColor,
	            fontfamily: "Microsoft YaHei",
	            fontSize:titleSize,
	            fontWeight: 'bold'
	        },
	        align:'center'
	    },
	    legend: {
	        align: 'center',
	        verticalAlign: 'bottom',
	        y:0,
	        symbolHeight: legendWH,
            symbolWidth: legendWH,
            itemStyle: {
                color: textColor,
                fontWeight: 'bold',
				fontSize:legendFsize
            }
	    },
	    xAxis: {
	        startOnTick: true,
	        tickLength: 0,
	        gridLineDashStyle: 'solid',
	        gridLineColor:gridLineColor,
	        gridLineWidth: 0.5,
	        labels: {
                formatter: function() {
                	return categories[this.value];
                },
                style:{
                	color:textColor,
	            	fontfamily: "Microsoft YaHei",
	            	fontSize:fontSize
                }
            },
            tickInterval:1,
            minPadding:0,
            maxPadding:0
	    },
	    yAxis: {
	        title:'',
	        gridLineDashStyle: 'solid',
	        gridLineColor:gridLineColor,
	        gridLineWidth: 0.5,
	        min: null,
	        max:null,
	        tickPixelInterval: 50,
	        labels: {
	            style: {
	                color:textColor,
	            	fontfamily: "Microsoft YaHei",
	            	fontSize:fontSize
	            }
	        }
	    },
	    tooltip: {
	        // headerFormat: '<span style="font-size:10px">{point.key}</span><br/>',
	        formatter: function () {
                return '<span style="font-size:20px">'+categories[this.x]+'</span><br/>'+
                '<b>'+this.series.name+':</b>'+Convert(this.y);
            },
			style: {
				fontSize: "20px"
			}
	    },
	    credits: {
	        enabled: false
	    },
	    plotOptions: {
	        column: {
	        	depth: 30,
	            pointPadding: 0.2,
	            pointWidth: pointWidth,
	            borderWidth: 0,
	            dataLabels: {
	                enabled: false,
	                formatter: function() { 
 						return Convert(this.y);
  					},
	            },
               	enableMouseTracking: true
	        },
	         series: {
                stacking: 'normal'
            }
	    },
	    series: series
	});
}
//饼图
function chart_pie_canvas(id,title,pie_percentage,pie_Unit,series,dataLabelEnable){
	var width=$("#"+id).width();
	var formatter,tooltip_formatter;
	if(pie_percentage==0){
		formatter=function () {
            return Highcharts.numberFormat(this.percentage,2,'.',',')+'%';
        }
        tooltip_formatter=function () {
            return '<b>'+this.point.name+':</b>'+Highcharts.numberFormat(this.percentage,2,'.',',')+'%';
        }
	}else if(pie_percentage==1){
		formatter=function () {
            return Convert(this.y)+pie_Unit;
        }
        tooltip_formatter=function () {
            return '<b>'+this.point.name+':</b>'+Convert(this.y)+pie_Unit;
        }
	}
	$('#'+id).empty();
	$('#'+id).highcharts({
	    chart: {
	        type: 'pie',
	        backgroundColor: 'none',
	        alignTicks: false,
		    width:width,
		    height:(width/360)*400,
	    },
	    credits: {
            enabled: false
        },
	    //colors:pie_colors1,
	    title: {
	        text: title,
	        style: {
	            color: titleColor,
	            fontfamily: "Microsoft YaHei",
	            fontSize:titleSize,
	            fontWeight: 'bold'
	        },
	        align:'center'
	    },
	    legend: {
	        align: 'center',
	        verticalAlign: 'bottom',
	        //x:10,
	        //y:-200,
	        symbolHeight: legendWH,
            symbolWidth: legendWH,
            itemStyle: {
                color: textColor,
                fontWeight: 'bold',
				fontSize:legendFsize
            },
            itemMarginBottom: 5
	    },
	    tooltip: {
	        formatter: tooltip_formatter,
			style: {
				fontSize: "20px"
			}
	    },
	    plotOptions: {    
	        pie: {
	            allowPointSelect: true,
	            cursor: 'pointer',
	            depth: 35,
	            dataLabels: {
	                distance: 20,
	                enabled: dataLabelEnable,
	                formatter:formatter,
	                style: {
	                    color:textColor,
	                    fontfamily: "Microsoft YaHei",
	            		fontSize:"20px",
	            		fontWeight: 'bold'
	                }
	            },
	            showInLegend: true
	        }
	    },
	    series: series
	});
}
//3D饼图
function chart_3d_pie_canvas(id,title,pie_percentage,pie_Unit,series,dataLabelEnable){
	var formatter,tooltip_formatter;
	var width=$("#"+id).width();
	if(pie_percentage==0){
		formatter=function () {
            return Highcharts.numberFormat(this.percentage,2,'.',',')+'%';
        }
        tooltip_formatter=function () {
            return '<b>'+this.point.name+':</b>'+Highcharts.numberFormat(this.percentage,2,'.',',')+'%';
        }
	}else if(pie_percentage==1){
		formatter=function () {
            return Convert(this.y)+pie_Unit;
        }
        tooltip_formatter=function () {
            return '<b>'+this.point.name+':</b>'+Convert(this.y)+pie_Unit;
        }
	}
	$('#'+id).empty();
	$('#'+id).highcharts({
	    chart: {
	    	type: 'pie',
	        backgroundColor: 'none',
	        options3d: {
	            enabled: true,
	            alpha: 45,
	            beta: 0
	        },
	        alignTicks: false,
		    width:width,
		    height:(width/360)*400,
	    },
	    credits: {
            enabled: false
        },
	    //colors:pie_colors1,
	    title: {
	        text: title,
	        style: {
	            color: titleColor,
	            fontfamily: "Microsoft YaHei",
	            fontSize:titleSize,
	            fontWeight: 'bold'
	        }
	    },
	    tooltip: {
	        formatter: tooltip_formatter,
			style: {
				fontSize: "20px"
			}
	    },
	    legend: {
	        align: 'center',
	        verticalAlign: 'bottom',
	        x:10,
	        y:0,
	        symbolHeight: legendWH,
            symbolWidth: legendWH,
            itemMarginBottom: 5,
            itemStyle: {
                color: textColor,
                fontWeight: 'bold',
				fontSize:legendFsize
            }
	    },
	    plotOptions: {
	        pie: {
	            allowPointSelect: true,
	            cursor: 'pointer',
	            depth: 35,
	            dataLabels: {
	                distance: 20,
	                enabled: dataLabelEnable,
	                formatter:formatter,
	                style: {
	                    color:textColor,
	                    fontfamily: "Microsoft YaHei",
	            		fontSize:"20px",
	            		fontWeight: 'bold'
	                }
	            },
	            showInLegend: true
	        }
	    },
	    series: series
	});
}

//环形图
function chart_pie_inner_canvas(id,title,pie_percentage,pie_Unit,series,dataLabelEnable){
	var formatter,tooltip_formatter;
	var width=$("#"+id).width();
	if(pie_percentage==0){
		formatter=function () {
            return Highcharts.numberFormat(this.percentage,2,'.',',')+'%';
        }
        tooltip_formatter=function () {
            return '<b>'+this.point.name+':</b>'+Highcharts.numberFormat(this.percentage,2,'.',',')+'%';
        }
	}else if(pie_percentage==1){
		formatter=function () {
            return Convert(this.y)+pie_Unit;
        }
        tooltip_formatter=function () {
            return '<b>'+this.point.name+':</b>'+Convert(this.y)+pie_Unit;
        }
	}
	$('#'+id).empty();
	$('#'+id).highcharts({
	    chart: {
	    	type: 'pie',
	       	backgroundColor: 'none',
	       	marginLeft: 0,
	        marginRight:0,
	        alignTicks: false,
		    width:width,
		    height:(width/360)*400,
	    },
	    credits: {
            enabled: false
        },
	    //colors:pie_colors1,
	    title: {
	        text: title,
	        style: {
	            color: titleColor,
	            fontfamily: "Microsoft YaHei",
	            fontSize:titleSize,
	            fontWeight: 'bold'
	        },
	        align: 'center',
	    },
	    tooltip: {
	        formatter: tooltip_formatter,
			style: {
				fontSize: "20px"
			}
	    },
	    legend: {
			align: 'center',
	        verticalAlign: 'bottom',
	        y:0,
	        symbolHeight: legendWH,
        	symbolWidth: legendWH,
			itemStyle: {
                color: textColor,
                fontWeight: 'bold',
				fontSize:legendFsize
            }
	    },
	    plotOptions: {
	        pie: {
	            allowPointSelect: true,
	            cursor: 'pointer',
	            depth: 35,
	            dataLabels: {
	                distance: 20,
	                enabled: dataLabelEnable,
	                formatter:formatter,
	                style: {
	                    color:textColor,
	                    fontfamily: "Microsoft YaHei",
	            		fontSize:"20px",
	            		fontWeight: 'bold'
	                }
	            },
	            startAngle: 0,
	            endAngle: 360,
	            center: ['50%', '50%'],
	            showInLegend: true
	        }
	    },
	     series: series
	});
}

//3D环形图
function charts_3d_pie_inner_canvas(id,title,pie_percentage,pie_Unit,series,dataLabelEnable){
	var formatter,tooltip_formatter;
	var width=$("#"+id).width();
	if(pie_percentage==0){
		formatter=function () {
            return Highcharts.numberFormat(this.percentage,2,'.',',')+'%';
        }
        tooltip_formatter=function () {
            return '<b>'+this.point.name+':</b>'+Highcharts.numberFormat(this.percentage,2,'.',',')+'%';
        }
	}else if(pie_percentage==1){
		formatter=function () {
            return Convert(this.y)+pie_Unit;
        }
        tooltip_formatter=function () {
            return '<b>'+this.point.name+':</b>'+Convert(this.y)+pie_Unit;
        }
	}
	$('#'+id).empty();
	$('#'+id).highcharts({
	    chart: {
	    	type: 'pie',
	       	backgroundColor: 'none',
	       	marginLeft: 0,
	        marginRight:0,
	        options3d: {
	            enabled: true,
	            alpha: 45,
	            beta: 0
	        },
	        alignTicks: false,
		    width:width,
		    height:(width/360)*400,
	    },
	    credits: {
            enabled: false
        },
	    //colors:pie_colors1,
	    title: {
	        text: title,
	        style: {
	            color: titleColor,
	            fontfamily: "Microsoft YaHei",
	            fontSize:titleSize,
	            fontWeight: 'bold'
	        },
	        align: 'center',
	    },
	   	tooltip: {
	        formatter: tooltip_formatter,
			style: {
				fontSize: "20px"
			}
	    },
	    legend: {
	        align: 'center',
	        verticalAlign: 'bottom',
	        x:10,
	        y:0,
	        symbolHeight: legendWH,
            symbolWidth: legendWH,
            itemMarginBottom: 5,
            itemStyle: {
                color: textColor,
                fontWeight: 'bold',
				fontSize:legendFsize
            }
	    },
	    plotOptions: {
	        pie: {
	            allowPointSelect: true,
	            cursor: 'pointer',
	            depth: 35,
	            dataLabels: {
	                distance: 20,
	                enabled: dataLabelEnable,
	                formatter:formatter,
	                style: {
	                    color:textColor,
	                    fontfamily: "Microsoft YaHei",
	            		fontSize:"20px",
	            		fontWeight: 'bold'
	                }
	            },
	            startAngle: 0,
	            endAngle: 360,
	            center: ['50%', '50%'],
	            showInLegend: true
	        }
	    },
	     series: series
	});
}

//包含双坐标轴、折线图、柱状图的混合图
function charts_column_line_canvas(id,title,categories,series){
	var data_min=0;
	for (key in series[1]['data']) {
		if(data_min==0){
			data_min=parseInt(series[1]['data'][key]);
		}else if(data_min<=parseInt(series[1]['data'][key])){
			data_min=parseInt(series[1]['data'][key]);
		}
	}
	if(data_min>=0){
		data_min=0;
	}else{
		data_min=data_min*2;
	}
	$('#'+id).empty();
	$('#'+id).highcharts({
	    chart: {
	        zoomType: 'none',
	   	    backgroundColor: 'none',
	        plotBorderWidth: 0,
	    },
	    credits: {
            enabled: false
        },
	    //colors:colors,
	    title: {
	        text: title,
	        style: {
	            color: titleColor,
	            fontfamily: "Microsoft YaHei",
	            fontSize:titleSize,
	            fontWeight: 'bold'
	        },
	        align:'center'
	    },
	    legend: {
	        align: 'center',
	        verticalAlign: 'bottom',
	        y:0,
	        symbolHeight: legendWH,
        	symbolWidth: legendWH,
        	itemStyle: {
                color: textColor,
                fontWeight: 'bold',
				fontSize:legendFsize
            }
	    },
	    xAxis: {
	       	startOnTick: true,
	        tickLength: 0,
	           labels: {
               	formatter: function() {                         					
               		return categories[this.value];                     				
               	},
               	style:{
               		color:textColor,
	           		fontfamily: "Microsoft YaHei",
	           		fontSize:fontSize
               	}                 			
            },
            tickInterval:1,
            minPadding:0,
            maxPadding:0
	    },
	    yAxis: [{
	        title:'',
	        //gridLineDashStyle: 'longdash',
	        gridLineColor:gridLineColor,
	        gridLineWidth: 0.5,
	        min: data_min,
	        max:null,
	        tickPixelInterval: 50,
	        labels: {
	            style: {
	                color:textColor,
	            	fontfamily: "Microsoft YaHei",
	            	fontSize:fontSize
	            }
	        },
	    opposite: true
	    },{
	        title:'',
	        //gridLineDashStyle: 'longdash',
	        gridLineColor:'rgba(0,0,0,0.5)',
	        min: null,
	        max:null,
	        tickPixelInterval: 50,
	        labels: {
	            style: {
	                color:textColor,
	            	fontfamily: "Microsoft YaHei",
	            	fontSize:fontSize
	            }
	        }
	    }],
	    tooltip: {
	        // headerFormat: '<span style="font-size:10px">{point.key}</span><br/>',
	        formatter: function () {
                return '<span style="font-size:20px">'+categories[this.x]+'</span><br/>'+
                '<b>'+this.series.name+':</b>'+Convert(this.y);
            },
			style: {
				fontSize: "20px"
			}
	    },
	    credits: {
	        enabled: false
	    },
	    plotOptions: {
	        column: {
	            pointPadding: 0.2,
	            borderWidth: 0,
	            dataLabels: {
	                enabled: false,
	                formatter: function() { 
 						return Convert(this.y);
  					},
	            },
               	enableMouseTracking: true
	        },
	        area:{
	            dataLabels: {
	            	enabled: false,
	               	formatter: function() { 
 						return Convert(this.y);
  					},
	            },
               	enableMouseTracking: true
	        },
	        line:{
	            dataLabels: {
	                enabled: false,
	                formatter: function() { 
 						return Convert(this.y);
  					},
	            },
               	enableMouseTracking: true
	        }
	    },
	    series: series
	});
}


function chart_draw(){
	$(".chart_svg").each(function(){
		if($(this).is('.appear')){
   			return;
   		}
   		var data=$(this).data('chart');
		var id=$(this).attr("id");
		if(data!==undefined && data != "undefined"){
			data=JSON.parse(data.replace(/'/g, '"'));
			// console.log(data);

			if(data['content']['chart_type']=='column'||data['content']['chart_type']=='area'||data['content']['chart_type']=='line'||data['content']['chart_type']=='bar'){
				chart_canvas(id,data['content']['chart_type'],data['title'],data['content']['min'],data['content']['max'],data['content']['categories'],data['content']['series']);
			}else if(data['content']['chart_type']=='3d_column'){
				chart_3d_column_canvas(id,data['title'],data['content']['min'],data['content']['max'],data['content']['categories'],data['content']['series']);
			}else if(data['content']['chart_type']=='stack_bar'){
				charts_stack_bar_canvas(id,data['title'],data['content']['min'],data['content']['max'],data['content']['categories'],data['content']['series']);
			}else if(data['content']['chart_type']=='stack_column'){
				charts_stack_column_canvas(id,data['title'],data['content']['min'],data['content']['max'],data['content']['categories'],data['content']['series']);
			}else if(data['content']['chart_type']=='percent_stack_column'){
				charts_percent_stack_column_canvas(id,data['title'],data['content']['min'],data['content']['max'],data['content']['categories'],data['content']['series']);
			}else if(data['content']['chart_type']=='stack_3d_column'){
				charts_stack_3d_column_canvas(id,data['title'],data['content']['min'],data['content']['max'],data['content']['categories'],data['content']['series']);
			}else if(data['content']['chart_type']=='pie'){
				var dataLabelEnable;
				if(data['content']['dataLabelEnable']==undefined){
					dataLabelEnable=false;
				}else{
					dataLabelEnable=data['content']['dataLabelEnable'];
				}
				chart_pie_canvas(id,data['title'],data['content']['pie_percentage'],data['content']['pie_Unit'],data['content']['series'],dataLabelEnable)
			}else if(data['content']['chart_type']=='3d_pie'){
				var dataLabelEnable;
				if(data['content']['dataLabelEnable']==undefined){
					dataLabelEnable=false;
				}else{
					dataLabelEnable=data['content']['dataLabelEnable'];
				}
				chart_3d_pie_canvas(id,data['title'],data['content']['pie_percentage'],data['content']['pie_Unit'],data['content']['series'],dataLabelEnable)
			}else if(data['content']['chart_type']=='pie_inner'){
				var dataLabelEnable;
				if(data['content']['dataLabelEnable']==undefined){
					dataLabelEnable=false;
				}else{
					dataLabelEnable=data['content']['dataLabelEnable'];
				}
				chart_pie_inner_canvas(id,data['title'],data['content']['pie_percentage'],data['content']['pie_Unit'],data['content']['series'],dataLabelEnable)
			}else if(data['content']['chart_type']=='3d_pie_inner'){
				var dataLabelEnable;
				if(data['content']['dataLabelEnable']==undefined){
					dataLabelEnable=false;
				}else{
					dataLabelEnable=data['content']['dataLabelEnable'];
				}
				charts_3d_pie_inner_canvas(id,data['title'],data['content']['pie_percentage'],data['content']['pie_Unit'],data['content']['series'],dataLabelEnable);
			}else if(data['content']['chart_type']=='column_line'){
				charts_column_line_canvas(id,data['title'],data['content']['categories'],data['content']['series']);
			}
		}
		var fold = $(window).height() + $(window).scrollTop();
   		if((fold > $(this).offset().top+10&&$(window).height()<$(this).offset().top)||$(window).height()>$(this).offset().top){
			$(this).addClass('appear');
		}
	});
}
// chart_draw();
window.onload=function(){
	chart_draw();
}
$(window).bind("scroll", function(event){
	chart_draw();
});