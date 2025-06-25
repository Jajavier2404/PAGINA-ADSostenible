// src/componentes/Grafico.jsx
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Grafico() {
  // Datos de ejemplo
  const data = {
    labels: ['Energía Solar', 'Eólica', 'Hídrica', 'Biomasa'],
    datasets: [
      {
        label: 'Producción (GWh)',
        data: [200, 150, 300, 100],
        backgroundColor: ['#fbbf24', '#60a5fa', '#34d399', '#f87171'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Producción de Energías Renovables' },
    },
  };

  return <Bar data={data} options={options} />;
}
