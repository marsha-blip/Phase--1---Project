document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("Players-form");
  const nameInput = document.getElementById("Players");
  const categorySelect = document.getElementById("Players-category");
  const list = document.getElementById("player-list");
  const searchInput = document.getElementById("search-input");
  const searchForm = document.getElementById("search-form");
  const darkToggle = document.getElementById("dark-mode-toggle");
  const gallery = document.getElementById("gallery");
  const lightbox = document.getElementById("lightbox");
  const lbImg = lightbox.querySelector("img");

  let players = [];

  // Load initial data from db.json
  fetch("db.json")
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((data) => {
      players = data.players;
      renderList(players);
    })
    .catch((err) => console.error("Failed loading db.json:", err));

  form.addEventListener("submit", onAddPlayer);
  nameInput.addEventListener("input", onFilterInput);
  categorySelect.addEventListener("change", onSortByCategory);
  searchForm.addEventListener("submit", onSearchFormSubmit);
  darkToggle.addEventListener("change", (e) =>
    document.body.classList.toggle("dark-mode", e.target.checked)
  );
  gallery.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      lbImg.src = e.target.src;
      lightbox.style.display = "flex";
    }
  });
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  function onAddPlayer(e) {
    e.preventDefault();
    const name = nameInput.value.trim();
    if (!name) return alert("Please enter a player name.");
    players.push({ name, category: categorySelect.value });
    renderList(players);
    form.reset();
    nameInput.focus();
  }

  function onFilterInput(e) {
    const term = e.target.value.trim().toLowerCase();
    renderList(players.filter((p) => p.name.toLowerCase().includes(term)));
  }

  function onSortByCategory() {
    renderList(
      [...players].sort((a, b) => a.category.localeCompare(b.category))
    );
  }

  function onSearchFormSubmit(e) {
    e.preventDefault();
    alert("Search submitted: " + searchInput.value);
  }

  function renderList(arr) {
    list.innerHTML = arr
      .map((p) => `<li>${p.name} — <em>${p.category}</em></li>`)
      .join("");
  }
});
