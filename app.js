
var ctx = document.getElementById('radar-chart').getContext('2d');

var data = {
    labels: ['Tactics', 'Flexibility', 'Kills', 'Deaths', 'Speed'],
    datasets: [
        {
            label: 'Ghost',
            data: [8, 7, 9, 6, 1],
            backgroundColor: 'rgba(105, 109, 118, 0.2)',
            borderColor: 'rgba(198, 194, 211, 1)',
            borderWidth: 1,
            pointLabel:''
        },
    ]
};

var options = {
  scale: {
    ticks: {
      beginAtZero: true,
      suggestedMin: 0,
      max: 10
    },
    r:{
        suggestedMin: 0, 
        suggestedMax: 10,
        display: false
    }
  }
};

var radarChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: options
});
