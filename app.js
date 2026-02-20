document.addEventListener('DOMContentLoaded', () => {
      initPriceChart();
      initComparisonList();
});

function initPriceChart() {
      const ctx = document.getElementById('priceChart').getContext('2d');

    // Mock data for last 4 weeks
    const labels = ['4 weeks ago', '3 weeks ago', '2 weeks ago', 'Last week'];
      const data = {
                labels: labels,
                datasets: [
                  {
                                    label: 'Apple',
                                    data: [28500, 27800, 29200, 26500],
                                    borderColor: '#2e7d32',
                                    backgroundColor: 'rgba(46, 125, 50, 0.1)',
                                    fill: true,
                                    tension: 0.4
                  }
                          ]
      };

    new Chart(ctx, {
              type: 'line',
              data: data,
              options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                              legend: {
                                                                    position: 'top',
                                                                    labels: {
                                                                                              font: {
                                                                                                                            family: 'Pretendard, sans-serif'
                                                                                                }
                                                                    }
                                              }
                            },
                            scales: {
                                              y: {
                                                                    beginAtZero: false,
                                                                    grid: {
                                                                                              color: 'rgba(0, 0, 0, 0.05)'
                                                                    }
                                              },
                                              x: {
                                                                    grid: {
                                                                                              display: false
                                                                    }
                                              }
                            }
              }
    });
}

function initComparisonList() {
      const list = document.getElementById('comparisonList');
      const items = [
        { name: 'Apple (10 units)', market: '24,500 KRW', mall: '28,900 KRW' },
        { name: 'Spinach (1 pack)', market: '2,800 KRW', mall: '3,500 KRW' },
        { name: 'Beef (100g)', market: '5,800 KRW', mall: '6,200 KRW' },
        { name: 'Eggs (30 count)', market: '6,900 KRW', mall: '7,500 KRW' }
            ];

    list.innerHTML = items.map(item => `
            <div class="comparison-item">
                        <span class="comp-name">${item.name}</span>
                                    <div class="comp-prices">
                                                    <div class="price-tag">
                                                                        <span class="price-label">Market</span>
                                                                                            <span class="price-value highlight">${item.market}</span>
                                                                                                            </div>
                                                                                                                            <div class="price-tag">
                                                                                                                                                <span class="price-label">Mall</span>
                                                                                                                                                                    <span class="price-value">${item.mall}</span>
                                                                                                                                                                                    </div>
                                                                                                                                                                                                </div>
                                                                                                                                                                                                        </div>
                                                                                                                                                                                                            `).join('');
}
