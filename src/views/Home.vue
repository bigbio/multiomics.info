<template>
	<div class="home">
		<div class="nav">
			<div class="header">
				<span class="first">Pretty</span><span>Charts</span>
				<Divider class="line"/>
			</div>
			<div class="header-link">
				<div class="link">
					<Icon type="ios-home-outline" size="18"/>
					<a href="">Dashboard</a>
				</div>
				<div class="link">
					<Icon type="ios-home-outline" size="18"/>
					<a href="">Todo</a>
				</div>
				<div class="link">
					<Icon type="ios-home-outline" size="18"/>
					<a href="">Todo</a>
				</div>
				<div class="link">
					<Icon type="ios-home-outline" size="18"/>
					<a href="">Todo</a>
				</div>
				<div class="link">
					<Icon type="ios-home-outline" size="18"/>
					<a href="">Todo</a>
				</div>
			</div>
		</div>
		<div class="container">
			<Row>
			 	<Col span="12">
			 		<Card>
			 			<chart :type='bar.type' :dataSource="bar.dataSource" :height="bar.height"></chart>
			 		</Card>
			 	</Col>
			  	<Col span="11" offset="1">
			  		<Card>
			  			<chart :type='mssplinearea.type' :dataSource="mssplinearea.dataSource" :height="mssplinearea.height"></chart>
			  		</Card>
			  	</Col>
			</Row>
			<Row class="row">
			  	<Col span="24">
			  		<Card>
			  			<chart :type='mscombidy2d.type' :dataSource="mscombidy2d.dataSource" :height="mscombidy2d.height"></chart>
			  		</Card>	
			  	</Col>
			</Row>
		</div>
	</div>
</template>
<script>
	import chart from '@/components/charts/chart.vue'
	//import lineChart from '@/components/charts/lineChart.vue'
	export default {
	  name: '',
	  components: { chart },
	  data(){
	  	return {
	  		bar:{
	  			type:'column2d',
	  			height:400,
	  			dataSource:{
	              // Chart Configuration
	              chart: {
	                  caption: "Countries With Most Oil Reserves [2017-18]",
	                  subCaption: "In MMbbl = One Million barrels",
	                  xAxisName: "Country",
	                  yAxisName: "Reserves (MMbbl)",
	                  numberSuffix: "K",
	                  theme: "fusion",
	                  xAxisNameFontSize:14,
	                  labelFontSize:14,
	              },
	              // Chart Data
	              data: [
		                {
		                    label: "UK",
		                    value: 90
		                }, {
		                    label: "Saudi",
		                    value: 260
		                }, {
		                    label: "India",
		                    value: 180
		                }, {
		                    label: "Iran",
		                    value: 140
		                }, {
		                    label: "Russia",
		                    value: 115
		                }, {
		                    label: "UAE",
		                    value: 100
		                }, {
		                    label: "US",
		                    value: 30
		                }, {
		                    label: "China",
		                    value: 30
		                }
	              ]
	          	},
	  		},
	  		mssplinearea:{
	  			type:'mssplinearea',
	  			height:400,
	  			dataSource:{
				    "chart": {
				        "caption": "Number of Footfalls Last Week",
				        "subCaption": "Garden Groove harbour vs Crompton-Rancho Dom",
				        "xAxisName": "Day",
				        "yAxisName": "No. of Footfalls",
				        "theme": "fusion",
				        "legendItemFontSize":14,
				    },
				    "categories": [
				        {
				            "category": [
				                {
				                    "label": "Mon"
				                },
				                {
				                    "label": "Tue"
				                },
				                {
				                    "label": "Wed"
				                },
				                {
				                    "vline": "true",
				                    "lineposition": "0",
				                    "color": "#6baa01",
				                    "labelHAlign": "right",
				                    // "labelPosition": "0",
				                    // "label": "National holiday"
				                },
				                {
				                    "label": "Thu"
				                },
				                {
				                    "label": "Fri"
				                },
				                {
				                    "label": "Sat"
				                },
				                {
				                    "label": "Sun"
				                }
				            ]
				        }
				    ],
				    "dataset": [
				        {
				            "seriesname": "Garden Groove harbour",
				            "data": [
				                {
				                    "value": "15123"
				                },
				                {
				                    "value": "14233"
				                },
				                {
				                    "value": "21507"
				                },
				                {
				                    "value": "9110"
				                },
				                {
				                    "value": "14829"
				                },
				                {
				                    "value": "17503"
				                },
				                {
				                    "value": "20202"
				                }
				            ]
				        },
				        {
				            "seriesname": "Crompton-Rancho Dom",
				            "data": [
				                {
				                    "value": "11400"
				                },
				                {
				                    "value": "12800"
				                },
				                {
				                    "value": "17800"
				                },
				                {
				                    "value": "10400"
				                },
				                {
				                    "value": "11800"
				                },
				                {
				                    "value": "13100"
				                },
				                {
				                    "value": "20800"
				                }
				            ]
				        }
				    ]
				}
	  		},
	  		pie:{
	  			type:'pie2d',
	  			height:400,
	  			dataSource:{
				    "chart": {
				        "caption": "Split of Visitors by Age Group",
				        "subCaption": "Last year",
				        "use3DLighting": "0",
				        "showPercentValues": "1",
				        "decimals": "1",
				        "useDataPlotColorForLabels": "1",
				        "theme": "fusion"
				    },
				    "data": [
				        {
				            "label": "Teenage",
				            "value": "1250400"
				        },
				        {
				            "label": "Adult",
				            "value": "1463300"
				        },
				        {
				            "label": "Mid-age",
				            "value": "1050700"
				        },
				        {
				            "label": "Senior",
				            "value": "491000"
				        }
				    ]
				}
	  		},
	  		mscombidy2d:{
	  			type:'mscombidy2d',
	  			height:400,
	  			dataSource:{
				    "chart": {
				        "caption": "Revenues and Profits",
				        "subCaption": "For last year",
				        "xAxisname": "Month",
				        "pYAxisName": "Amount (In USD)",
				        "sYAxisName": "Profit %",
				        "numberPrefix": "$",
				        "sNumberSuffix": "%",
				        "sYAxisMaxValue": "50",
				        "theme": "fusion"
				    },
				    "categories": [
				        {
				            "category": [
				                {
				                    "label": "Jan"
				                },
				                {
				                    "label": "Feb"
				                },
				                {
				                    "label": "Mar"
				                },
				                {
				                    "label": "Apr"
				                },
				                {
				                    "label": "May"
				                },
				                {
				                    "label": "Jun"
				                },
				                {
				                    "label": "Jul"
				                },
				                {
				                    "label": "Aug"
				                },
				                {
				                    "label": "Sep"
				                },
				                {
				                    "label": "Oct"
				                },
				                {
				                    "label": "Nov"
				                },
				                {
				                    "label": "Dec"
				                }
				            ]
				        }
				    ],
				    "dataset": [
				        {
				            "seriesName": "Revenues",
				            "data": [
				                {
				                    "value": "16000"
				                },
				                {
				                    "value": "20000"
				                },
				                {
				                    "value": "18000"
				                },
				                {
				                    "value": "19000"
				                },
				                {
				                    "value": "15000"
				                },
				                {
				                    "value": "21000"
				                },
				                {
				                    "value": "16000"
				                },
				                {
				                    "value": "20000"
				                },
				                {
				                    "value": "17000"
				                },
				                {
				                    "value": "22000"
				                },
				                {
				                    "value": "19000"
				                },
				                {
				                    "value": "23000"
				                }
				            ]
				        },
				        {
				            "seriesName": "Profits",
				            "renderAs": "area",
				            "showValues": "0",
				            "data": [
				                {
				                    "value": "4000"
				                },
				                {
				                    "value": "5000"
				                },
				                {
				                    "value": "3000"
				                },
				                {
				                    "value": "4000"
				                },
				                {
				                    "value": "1000"
				                },
				                {
				                    "value": "7000"
				                },
				                {
				                    "value": "1000"
				                },
				                {
				                    "value": "4000"
				                },
				                {
				                    "value": "1000"
				                },
				                {
				                    "value": "8000"
				                },
				                {
				                    "value": "2000"
				                },
				                {
				                    "value": "7000"
				                }
				            ]
				        },
				        {
				            "seriesName": "Profit %",
				            "parentYAxis": "S",
				            "renderAs": "line",
				            "showValues": "0",
				            "data": [
				                {
				                    "value": "25"
				                },
				                {
				                    "value": "25"
				                },
				                {
				                    "value": "16.66"
				                },
				                {
				                    "value": "21.05"
				                },
				                {
				                    "value": "6.66"
				                },
				                {
				                    "value": "33.33"
				                },
				                {
				                    "value": "6.25"
				                },
				                {
				                    "value": "25"
				                },
				                {
				                    "value": "5.88"
				                },
				                {
				                    "value": "36.36"
				                },
				                {
				                    "value": "10.52"
				                },
				                {
				                    "value": "30.43"
				                }
				            ]
				        }
				    ]
				}
	  		},
	  	}
	  },
	  mounted () {
	    
	  }
	}
</script>
<style scoped>
.home {
	position: relative;
	height: 100vh;
	width: 100%;
	display: flex;
}
.container{
	width: 90%;
	margin:0 auto;
	height: 100vh;
	padding: 40px;
	overflow-y: scroll;
}
.row{
	margin:40px 0;
}
.nav{
	width: 250px;
	height: 100vh;
	background-color: white;
	color:#6c757d;
	border-right: 1px solid #dcdee2;
    border-color: #e8eaec;
}
.header{
	padding: 24px 10px 0 10px;
	font-size: 16px;
	font-weight: bold;
	text-align: left;
}
.header .first{
	color:rgb(93, 98, 181);
	margin-left: 5px;
	margin-right: 5px;
	font-size: 20px;
}
.header .line{
	margin-bottom: 0 !important;
}
.link{
	height: 55px;
    display: flex;
    align-items: center;
    font-size: 16px;
    padding-left: 10px;
}
.link:hover{
	background-color: #f8f8f8;
}
.link:hover a{
	color: rgb(93, 98, 181);
	font-weight: bold;
}
.link:hover i{
	color: rgb(93, 98, 181);
	font-weight: bold;
}
.link a{
	color:#6c757d;
	margin-left: 10px;
}
</style>
<style>
	g[class^='raphael-group-'][class$='-creditgroup'] {
         display:none !important;
    }
</style>
