function showSection(id) {
  document.querySelectorAll('main section').forEach(section => {
    section.classList.add('d-none');
  });
  document.getElementById(id).classList.remove('d-none');
}

// Mostrar la sección de inicio al cargar
showSection('inicio');

// === INTEGRACIÓN DE API PÚBLICA ===
fetch('https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=Barcelona')
  .then(response => response.json())
  .then(data => {
    const team = data.teams[0];
    document.getElementById('apiData').innerHTML = `
      <h4>${team.strTeam}</h4>
      <img src="${team.strTeamBadge}" alt="Logo ${team.strTeam}" class="img-fluid" style="max-width:150px;">
      <p class="mt-2">${team.strDescriptionEN.substring(0, 300)}...</p>
    `;
  })
  .catch(error => {
    console.error('Error al obtener datos de la API:', error);
    document.getElementById('apiData').innerHTML = "<p>No se pudo conectar con la API.</p>";
  });