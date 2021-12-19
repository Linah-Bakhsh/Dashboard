

// Line Chart for Orders
const ctx = document.getElementById('Order');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Aug 1', 'Aug 2', 'Aug 3', 'Aug 4', 'Aug 5', 'Aug 6'],
        datasets: [{
         
            data: [1200, 1990, 3000, 3400, 3400, 3100],
            backgroundColor: [
                'rgba(37, 38, 85, 0.4)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(2, 223, 140, 1)',
                'rgba(2, 223, 140, 1)',
                'rgba(2, 223, 140, 1)',
                'rgba(2, 223, 140, 1)',
                'rgba(2, 223, 140, 1)',
                'rgba(2, 223, 140, 1)'
            ],
            borderWidth: 2
        }]
    },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
            ,legend: {
            display: false,
        }
    }

});


// Bar Chart for Visitor
const ctx2 = document.getElementById('visitor');
const myChart2 = new Chart(ctx2, {
type: 'bar',
data: {
    labels: ['Aug 1', 'Aug 2', 'Aug 3', 'Aug 4', 'Aug 5', 'Aug 6'],
    
    datasets: [{
        
        
        data: [1200, 1990, 3000, 3400, 3400, 3100],
        label:'men',
        backgroundColor: 
            'rgba(225, 3, 254, 0.4)'
           
        , 

    }, {data: [1200, 3422, 3000, 1990, 5633, 1990],
    label:'women',
    backgroundColor: 'rgba(37, 38, 85, 0.4)'
     }
    ],
    
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
       
}

});

// Liner Chart for Cities
const ctx3 = document.getElementById('cities');
const myChart3 = new Chart(ctx3, {
type: 'doughnut',
data: {
    labels: ['Riyadh ', 'Jeddah ', 'Sharqia ', 'Makkah'],
    datasets: [{
       
        
        data: [1200, 1990, 3000, 3400],
        backgroundColor: [
            'rgba(225, 3, 254, 0.4)',
            'rgba(37, 38, 85, 0.4)',
            'rgba(2, 223, 140, 0.4)',
            'rgba(51, 23, 249, 0.4)',
            'rgba(2, 223, 140, 0.4)'
        ],
       
        borderWidth: 1
    }]
},
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
       
}

});

// Liner Chart for Rat
const ctx4 = document.getElementById('rate');
const myChart4 = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ['January ', 'February ', 'March ', 'April','May','June','July','August'],
        datasets: [{
         
            data: [1, 2, 3, 4, 5, 5,3, 2, 3],
            backgroundColor: [
                'rgba(37, 38, 85, 0.4)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(2, 223, 140, 1)',
                'rgba(2, 223, 140, 1)',
                'rgba(2, 223, 140, 1)',
                'rgba(2, 223, 140, 1)',
                'rgba(2, 223, 140, 1)',
                'rgba(2, 223, 140, 1)'
            ],
            borderWidth: 2
        }]
    },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    suggestedMin: 1,
                    suggestedMax: 5
                }
            }
            ,legend: {
            display: false,
        }
    }

});


