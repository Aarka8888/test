 
const ctx1 = document.getElementById('chart-1').getContext("2d");

  new Chart(ctx1, {
    type: 'polarArea',
    data: {
      labels: ['HQ ', 'Marwaas', 'Via Roma', 'Dekedda'],
      datasets: [{
        label: 'Customer Feedback',
        data: [800, 450, 370, 270,],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true
    }
  });

   
const ctx2 = document.getElementById('chart-2').getContext("2d");

new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Outgoing', 'Paid', 'Pending', 'Return', 'Waafi'],
    datasets: [{
      label: 'Remittance Status',
      data: [800, 450, 150, 70, 50],
      backgroundColor: [
        "green",
        "orange",
        "violet",
        "red",
        "brown"

      ],
      
    }]
  },
  options: {
    responsive: true
  }
});



