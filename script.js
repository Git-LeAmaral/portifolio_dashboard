const ctx = document.querySelector('.activity-chart');

new Chart(ctx, {
  type: 'bar',
  data:{
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
        label: 'Time',
        data: [8, 6, 7, 6, 10, 8, 4],
        backgoundColor: '#1e293b',
        borderWidth: 3,
        borderRadius: 6,
        hoverBackgroundColor: '#60a5fa'
    }]
  },
  options: {
    responsive: true,
    maintainAspactRatio: false,
    scales: {
        x: {
          border: {
            display: true
          },
          grid: {
            display: true,
            color: '#1e293b'
          }
        },
        y: {
          ticks: {
            display: false
          }
        } 
    },
    plugins: {
        legend: {
            display: false
        }
    },
    animation: {
        duration: 1000,
        easing: 'easeInOutQuad',
    }
  }    
});