import React from "react";
import { LineElement, CategoryScale, Chart, LinearScale, PointElement } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(LineElement, CategoryScale, PointElement, LinearScale);

const BarChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 26,
      },
    },
  };

  return (
    <div>
      <Line height={400} width={600} data={data} options={options} />
    </div>
  );
};

export default BarChart;
