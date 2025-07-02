document.addEventListener('DOMContentLoaded', () => {
  let data = [];
  const list = document.querySelector('.player-list');

  fetch('http://localhost:3000/')
    .then(res=>res.json())
    .then(json=> (data=json, update(data)));

  search_input.addEventListener('input', e => {
    const term = e.target.value.toLowerCase();
    update(data.filter(p=>p.name.toLowerCase().includes(term)));
  });

  document.getElementById('search-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Submitted: ' + search_input.value);
  });

  document.getElementById('dark-mode-toggle').addEventListener('change', e => {
    document.body.classList.toggle('dark-mode', e.target.checked);
  });

  document.querySelector('#gallery').addEventListener('click', e => {
    if(e.target.tagName === 'IMG') {
      const lb = document.getElementById('lightbox');
      lb.querySelector('img').src = e.target.src;
      lb.style.display = 'flex';
    }
  });

  document.getElementById('lightbox').addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  function update(arr) {
    list.innerHTML = arr.map(p=>`<li>${p.name} — ${p.position} (#${p.number})</li>`).join('');
  }
});

