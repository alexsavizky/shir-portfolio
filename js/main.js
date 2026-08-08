// Renders the SHOWS array (js/shows-data.js) into the page, generates
// placeholder cover art when no image is supplied, and pauses other
// players when a new one starts.

(function () {
  const grid = document.getElementById("shows-grid");
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const PALETTES = [
    ["#ff5a36", "#ffb238"],
    ["#3ac6a0", "#1f7a8c"],
    ["#8e6bff", "#ff6bcb"],
    ["#ffb238", "#ff5a7a"],
    ["#1fa8ff", "#8e6bff"],
  ];

  function hashString(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = (h << 5) - h + str.charCodeAt(i);
      h |= 0;
    }
    return Math.abs(h);
  }

  function initials(title) {
    return title
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join("");
  }

  function buildCover(show) {
    if (show.cover) {
      const img = document.createElement("img");
      img.className = "show-cover";
      img.src = `assets/images/${show.cover}`;
      img.alt = `עטיפת התוכנית ${show.title}`;
      img.loading = "lazy";
      return img;
    }
    const div = document.createElement("div");
    div.className = "cover-placeholder";
    const [c1, c2] = PALETTES[hashString(show.title) % PALETTES.length];
    div.style.background = `linear-gradient(135deg, ${c1}, ${c2})`;
    div.textContent = initials(show.title);
    div.setAttribute("aria-hidden", "true");
    return div;
  }

  function buildCard(show) {
    const card = document.createElement("article");
    card.className = "show-card";

    card.appendChild(buildCover(show));

    const body = document.createElement("div");
    body.className = "show-body";

    const tagsRow = document.createElement("div");
    tagsRow.className = "show-tags";
    show.tags.forEach((t) => {
      const pill = document.createElement("span");
      pill.className = "tag";
      pill.textContent = t;
      tagsRow.appendChild(pill);
    });
    body.appendChild(tagsRow);

    const title = document.createElement("h3");
    title.textContent = show.title;
    body.appendChild(title);

    const meta = document.createElement("p");
    meta.className = "show-meta";
    meta.textContent = [show.station, show.duration].filter(Boolean).join(" · ");
    body.appendChild(meta);

    const desc = document.createElement("p");
    desc.className = "show-desc";
    desc.textContent = show.description;
    body.appendChild(desc);

    if (show.audio) {
      const audio = document.createElement("audio");
      audio.controls = true;
      audio.preload = "none";
      audio.src = `assets/audio/${show.audio}`;
      audio.addEventListener("play", () => {
        document.querySelectorAll("audio").forEach((a) => {
          if (a !== audio) a.pause();
        });
      });
      body.appendChild(audio);
    } else if (show.link) {
      const listen = document.createElement("a");
      listen.className = "btn btn-ghost show-listen-link";
      listen.href = show.link;
      listen.target = "_blank";
      listen.rel = "noopener noreferrer";
      listen.textContent = "האזינו לתוכנית";
      body.appendChild(listen);
    } else {
      const soon = document.createElement("p");
      soon.className = "show-soon";
      soon.textContent = "האודיו יעלה בקרוב";
      body.appendChild(soon);
    }

    card.appendChild(body);
    return card;
  }

  if (grid && typeof SHOWS !== "undefined") {
    SHOWS.forEach((show) => grid.appendChild(buildCard(show)));
  }
})();
