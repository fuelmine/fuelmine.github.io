function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text) e.textContent = text;
  return e;
}
function link(text, href, cls) {
  const a = el("a", cls, text);
  a.href = href;
  if (/^https?:/.test(href)) a.rel = "noopener";
  return a;
}
const $ = (id) => document.getElementById(id);

// ---- header ----
$("name").textContent = SITE.name;
$("tagline").textContent = SITE.tagline;
$("links").append(link("GitHub", SITE.github, "btn"));
if (SITE.resume) $("links").append(link("Resume (PDF)", SITE.resume, "btn ghost"));
if (SITE.email) $("links").append(link("Email", "mailto:" + SITE.email, "btn ghost"));

// ---- text sections ----
function fill(id, items, build) {
  if (!items || !items.length) return;
  $(id + "-body").append(...items.map(build));
  $(id).hidden = false;
}
fill("about", SITE.about, (t) => el("p", "about", t));
fill("experience", SITE.experience, (x) => {
  const c = el("article", "entry");
  const head = el("div", "entry-head");
  head.append(el("h3", "", `${x.role} · ${x.org}`), el("span", "when", x.dates));
  c.append(head);
  if (x.bullets && x.bullets.length) {
    const ul = el("ul");
    x.bullets.forEach((b) => ul.append(el("li", "", b)));
    c.append(ul);
  }
  return c;
});
fill("achievements", SITE.achievements, (a) => {
  const c = el("article", "entry");
  const head = el("div", "entry-head");
  head.append(el("h3", "", a.title), el("span", "when", a.date));
  c.append(head);
  if (a.detail) c.append(el("p", "", a.detail));
  return c;
});
fill("education", SITE.education, (e) => {
  const c = el("article", "entry");
  const head = el("div", "entry-head");
  head.append(el("h3", "", `${e.school}`), el("span", "when", e.dates));
  c.append(head, el("p", "", e.detail));
  if (e.notes) c.append(el("p", "muted", e.notes));
  return c;
});

// ---- nav (only visible sections) ----
const order = [["about", "About"], ["experience", "Experience"], ["projects", "Projects"], ["achievements", "Achievements"], ["education", "Education"]];
$("nav").append(...order.filter(([id]) => !$(id).hidden).map(([id, t]) => link(t, "#" + id)));

// ---- projects ----
const grid = $("grid");
const filters = $("filters");
const tags = ["All", ...new Set(PROJECTS.flatMap((p) => p.tags.filter((t) => t !== "C++")))];
let active = "All";

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
      card.append(el("h3", "", p.title), el("p", "", p.summary));
      const row = el("div", "tags");
      p.tags.forEach((t) => row.append(el("span", "tag", t)));
      card.append(row);
      if (p.repo) card.append(link("View on GitHub →", p.repo, "link"));
      return card;
    })
  );
}

renderFilters();
renderGrid();
