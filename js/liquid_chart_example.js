var chart_liquid_base = echarts.init(
    document.getElementById('liquid_base'), 'white', {renderer: 'canvas'});
var option_liquid_base = {
"animation": true,
"animationThreshold": 2000,
"animationDuration": 1000,
"animationEasing": "cubicOut",
"animationDelay": 0,
"animationDurationUpdate": 300,
"animationEasingUpdate": "cubicOut",
"animationDelayUpdate": 0,
"color": [
"#c23531",
"#2f4554",
"#61a0a8",
"#d48265",
"#749f83",
"#ca8622",
"#bda29a",
"#6e7074",
"#546570",
"#c4ccd3",
"#f05b72",
"#ef5b9c",
"#f47920",
"#905a3d",
"#fab27b",
"#2a5caa",
"#444693",
"#726930",
"#b2d235",
"#6d8346",
"#ac6767",
"#1d953f",
"#6950a1",
"#918597"
],
"series": [
{
    "type": "liquidFill",
    "name": "完成度",
    "data": [
        0.89,
        0.89
    ],
    "waveAnimation": true,
    "animationDuration": 2000,
    "animationDurationUpdate": 1000,
    "color": [
        "#294D99",
        "#156ACF",
        "#1598ED",
        "#45BDFF"
    ],
    "shape": "circle",
    "outline": {
        "show": true
    },
    "label": {
        "show": true,
        "position": "inside",
        "margin": 8,
        "fontSize": 30
    }
}
],
"legend": [
{
    "data": [],
    "selected": {},
    "show": true,
    "padding": 5,
    "itemGap": 10,
    "itemWidth": 25,
    "itemHeight": 14
}
],
"tooltip": {
"show": true,
"trigger": "item",
"triggerOn": "mousemove|click",
"axisPointer": {
    "type": "line"
},
"textStyle": {
    "fontSize": 14
},
"borderWidth": 0
},
"title": [
{
    "text": "网站改版完成度",
    "padding": 5,
    "itemGap": 10
}
]
};
chart_liquid_base.setOption(option_liquid_base);