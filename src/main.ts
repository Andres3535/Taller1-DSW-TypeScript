import { series } from './data.js';

function renderSeriesInTable(): void {
  const tableBody = document.getElementById('seriesTableBody')!;
  let totalSeasons = 0;
  series.forEach((serie) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${serie.id}</td>
      <td><a href="${serie.url}" target="_blank">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    tableBody.appendChild(row);
    totalSeasons += serie.seasons;
  });
  // Calcular promedio de temporadas
  const averageSeasons = (totalSeasons / series.length).toFixed(2);

  // Agregar fila con el promedio al final de la tabla
  const averageRow = document.createElement('tr');
  averageRow.innerHTML = `
      <td colspan="3"><strong>Average Seasons</strong></td>
      <td>${averageSeasons}</td>
  `;
  tableBody.appendChild(averageRow);
}

// Llamamos a la función para renderizar la tabla cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  renderSeriesInTable();
});
