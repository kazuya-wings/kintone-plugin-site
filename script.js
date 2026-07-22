document.addEventListener("DOMContentLoaded", function () {
  const grid = document.getElementById("plugin-grid");

  plugins.forEach(function (plugin) {
    const card = document.createElement("a");
    card.href = plugin.page;
    card.className = "plugin-card";

    card.innerHTML = `
      <div class="plugin-card-icon">${plugin.icon}</div>
      <h3>${plugin.name}</h3>
      <p>${plugin.description}</p>
      <span class="plugin-card-link">詳細を見る →</span>
    `;

    grid.appendChild(card);
  });
});
