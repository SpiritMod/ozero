var my_data = [
    {"dd": "2015-10-05", "p": 0, "r": 0, "v": 0, "c": 0},
    {"dd": "2015-10-06", "p": 2, "r": 7, "v": 6, "c": 10},
    {"dd": "2015-10-07", "p": 23, "r": 15, "v": 4, "c": 15},
    {"dd": "2015-10-08", "p": 8, "r": 27, "v": 21, "c": 12},
    {"dd": "2015-10-09", "p": 5, "r": 13, "v": 15, "c": 10},
    {"dd": "2015-10-10", "p": 7, "r": 23, "v": 33, "c": 20},
    {"dd": "2015-10-11", "p": 45, "r": 59, "v": 43, "c": 65}
];

Morris.Line({
    element: 'chart-2',
    data: my_data,
    xkey: 'dd',
    gridTextColor: '#9f9f9f',
    lineColors: ['#9f9f9f', '#264380', '#b5414b', '#70bc74'],
    ykeys: ['p','r','v', 'c'],
    labels: ['посты','читатели','просмотры', 'комментарии'],
    lineWidth: 2,
    pointSize: 2,
    smooth: false,
    xLabelFormat: function(d) { return d.getDate()+'/'+(d.getMonth()+1)},
    ymin: 0,
    ymax: 100
});

