const ctx = document.querySelector('.activity-chart');
const ctx2 = document.querySelector('.prog-chart');

new Chart(ctx, {
  type: 'bar',
  data:{
    labels: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
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

new Chart(ctx2, {
  type: 'line',
  data:{
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
    datasets: [{
        label: 'Atual GPA',
        data: [6, 10, 8, 14, 6, 8, 4],
        borderColor: '#0891b2',
        tension: 0.4
    },
    {
        label: 'Media GPA',
        data: [8, 6, 8, 6, 11, 8, 9],
        borderColor: '#ca8a04',
        tension: 0.4
    }
  ]
  },
  options: {
    responsive: true,
    maintainAspactRatio: true,
    scales: {
        x: {
          grid: {
            display: false,
          }
        },
        y: {
          ticks: {
            display: false
          },
          border: {
            display: false,
            dash: [5, 5]
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