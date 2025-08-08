import { foodData } from './food-data.js';

const tbody = document.getElementById("food-data");
const rows = foodData.map(item => `<tr>
  <td>${item.item}</td>
  <td>${item.range}</td>
  <td>${item.optimal}</td>
  <td>${item.sensitivity}</td>
</tr>`).join('');

tbody.innerHTML = rows;
