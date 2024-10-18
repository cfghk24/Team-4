import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard04() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['0-10', '11-20', '21-30', '31-40', '41-50', '51+'],
        datasets: [{
          label: 'Age Distribution',
          data: [5, 15, 30, 25, 15, 10],
          backgroundColor: tailwindConfig().theme.colors.sky[500],
          hoverBackgroundColor: tailwindConfig().theme.colors.sky[600],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          borderRadius: 4,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              callback: (value) => `${value}%`
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.parsed.y}% of users`
            }
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Age Distribution</h2>
      </header>
      <div className="px-5 py-3" style={{ height: '300px' }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}

export default DashboardCard04;