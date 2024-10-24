import { series } from './data.js';
function renderSeriesInTable() {
    var tableBody = document.getElementById('seriesTableBody');
    var totalSeasons = 0;
    series.forEach(function (serie) {
        var row = document.createElement('tr');
        row.innerHTML = "\n      <td>".concat(serie.id, "</td>\n      <td><a href=\"").concat(serie.url, "\" target=\"_blank\">").concat(serie.name, "</a></td>\n      <td>").concat(serie.channel, "</td>\n      <td>").concat(serie.seasons, "</td>\n    ");
        tableBody.appendChild(row);
        totalSeasons += serie.seasons;
    });
    // Calcular promedio de temporadas
    var averageSeasons = (totalSeasons / series.length).toFixed(2);
    // Agregar fila con el promedio al final de la tabla
    var averageRow = document.createElement('tr');
    averageRow.innerHTML = "\n      <td colspan=\"3\"><strong>Average Seasons</strong></td>\n      <td>".concat(averageSeasons, "</td>\n  ");
    tableBody.appendChild(averageRow);
}
// Llamamos a la función para renderizar la tabla cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function () {
    renderSeriesInTable();
});
