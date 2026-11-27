document.getElementById("name").textContent = SITE.name;
document.getElementById("tagline").textContent = SITE.tagline;
document.getElementById("gh").href = SITE.github;

const grid = document.getElementById("grid");
const filters = document.getElementById("filters");

const tags = ["All", ...new Set(PROJECTS.flatMap((p) => p.tags.filter((t) => t !== "C++")))];
let active = "All";

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text) e.textContent = text;
  return e;
}

function renderFilters() {
  filters.replaceChildren(
    ...tags.map((t) => {
      const b = el("button", "chip" + (t === active ? " on" : ""), t);
      b.type = "button";
      b.setAttribute("aria-pressed", t === active);
      b.onclick = () => { active = t; renderFilters(); renderGrid(); };
      return b;
    })
  );
}

function renderGrid() {
  const list = PROJECTS.filter((p) => active === "All" || p.tags.includes(active));
  grid.replaceChildren(
    ...list.map((p) => {
      const card = el("article", "card" + (p.featured ? " featured" : ""));
      if (p.featured) card.append(el("span", "badge", "Featured"));
      card.append(el("h2", "", p.title), el("p", "", p.summary));
      const row = el("div", "tags");
      p.tags.forEach((t) => row.append(el("span", "tag", t)));
      card.append(row);
      if (p.repo) {
        const a = el("a", "link", "View on GitHub →");
        a.href = p.repo;
        a.rel = "noopener";
        card.append(a);
      }
      return card;
    })
  );
}

renderFilters();
renderGrid();
