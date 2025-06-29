// 1️⃣ Fetch roster and render cards with forEach (array iteration)
async function loadRoster() {
  try {
    const res = await fetch('http://localhost:3000/players');
    const players = await res.json();
    const container = document.getElementById('roster-container');
    container.innerHTML = '';

    players.forEach(player => {
      const card = document.createElement('div');
      card.className = 'player-card';
      card.innerHTML = `
        <h3>${player.name} (#${player.number})</h3>
        <p>Position: ${player.position}</p>
        <button class="fav-btn">⭐ Favorite</button>
      `;
      container.appendChild(card);

      // 3️⃣ Mouseover event: highlight card
      card.addEventListener('mouseover', () => card.classList.add('highlight'));
      card.addEventListener('mouseout', () => card.classList.remove('highlight'));

      // 2️⃣ Click event: favorite button
      card.querySelector('.fav-btn')
          .addEventListener('click', () => {
            alert(`${player.name} added to favorites!`);
          });
    });
  } catch (e) {
    console.error('Fetching roster failed', e);
  }
}

// Call on page load
window.addEventListener('DOMContentLoaded', loadRoster);

// 4️⃣ Input event: live search filtering roster
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', handleSearch);

function handleSearch(e) {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll('.player-card').forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = name.includes(query) ? 'block' : 'none';
  });
}

// Prevent default form submission
const form = document.getElementById('search-form');
form.addEventListener('submit', e => e.preventDefault());
