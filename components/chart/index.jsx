import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
};
const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function ChartReact() {
  const dataChart = useSelector((state) => state.dashboard);
  const listExpense = dataChart.data.listExpense.map((item) => {
    return item.total;
  });
  const listIncome = dataChart.data.listIncome.map((item) => {
    return item.total;
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: listIncome,
        backgroundColor: "#6379F4",
      },
      {
        label: "Expense",
        data: listExpense,
        backgroundColor: "#f46363",
      },
    ],
  };
  return <Bar options={options} data={data} style={{ width: "100%" }} />;
}
