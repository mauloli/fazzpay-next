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

export default function ChartReact(props) {
  console.log(props);
  const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
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

  const listExpense = props.data.listExpense.map((item) => {
    return item.total;
  });
  const listIncome = props.data.listIncome.map((item) => {
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
