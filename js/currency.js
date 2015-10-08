var my_data = [
    {"dd": "2015-10-05", "d": 65.94, "e": 73.63, "y": 103.74},
    {"dd": "2015-10-06", "d": 65.62, "e": 73.79, "y": 103.24},
    {"dd": "2015-10-07", "d": 65.09, "e": 72.94, "y": 102.41},
    {"dd": "2015-10-08", "d": 62.70, "e": 70.46, "y": 98.65},
    {"dd": "2015-10-09", "d": 61.70, "e": 70.00, "y": 98.05}
];

Morris.Line({
    element: 'chart-1',
    data: my_data,
    xkey: 'dd',
    gridTextColor: '#fff',
    lineColors: ['#85bb65', '#b297cd', '#e87269'],
    ykeys: ['d','e','y'],
    labels: ['USD','EUR','CNY10'],
    lineWidth: 2,
    pointSize: 2,
    smooth: false,
    xLabelFormat: function(d) { return d.getDate()+'/'+(d.getMonth()+1)},
    ymin: 40,
    ymax: 110
});

