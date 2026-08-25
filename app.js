const internships = [
  {
    id: 1,
    title: "Frontend Development Intern",
    company: "PixelCraft Labs",
    domain: "Web Development",
    location: "Remote",
    type: "Part-time",
    duration: "8 weeks",
    description: "Build responsive user interfaces and reusable components for a fictional product team."
  },
  {
    id: 2,
    title: "Full Stack Development Intern",
    company: "CodeBridge Systems",
    domain: "Full Stack",
    location: "Hyderabad",
    type: "Full-time",
    duration: "10 weeks",
    description: "Work across frontend and backend features while learning practical API and database workflows."
  },
  {
    id: 3,
    title: "UI/UX Design Intern",
    company: "Northstar Studio",
    domain: "Design",
    location: "Remote",
    type: "Part-time",
    duration: "6 weeks",
    description: "Create accessible wireframes, interface concepts, and design documentation for digital products."
  },
  {
    id: 4,
    title: "Data Analytics Intern",
    company: "InsightWorks",
    domain: "Data",
    location: "Bengaluru",
    type: "Full-time",
    duration: "12 weeks",
    description: "Explore fictional business datasets and communicate useful findings through clear dashboards."
  },
  {
    id: 5,
    title: "Python Development Intern",
    company: "LogicLeaf Technologies",
    domain: "Programming",
    location: "Chennai",
    type: "Full-time",
    duration: "8 weeks",
    description: "Develop small Python utilities and services with readable, maintainable code."
  },
  {
    id: 6,
    title: "Digital Marketing Intern",
    company: "BrightPath Media",
    domain: "Marketing",
    location: "Remote",
    type: "Part-time",
    duration: "6 weeks",
    description: "Plan content experiments and analyze fictional campaign performance to support growth."
  },
  {
    id: 7,
    title: "Backend API Intern",
    company: "CloudNest Solutions",
    domain: "Backend",
    location: "Pune",
    type: "Full-time",
    duration: "10 weeks",
    description: "Design predictable REST endpoints and practice validation, errors, and persistence patterns."
  },
  {
    id: 8,
    title: "Mobile App Development Intern",
    company: "AppForge Labs",
    domain: "Mobile Development",
    location: "Remote",
    type: "Part-time",
    duration: "8 weeks",
    description: "Explore mobile application flows and create responsive, user-friendly screens."
  },
  {
    id: 9,
    title: "Cloud Engineering Intern",
    company: "Skyline Infra",
    domain: "Cloud",
    location: "Mumbai",
    type: "Full-time",
    duration: "12 weeks",
    description: "Learn cloud concepts through fictional deployment scenarios, documentation, and architecture exercises."
  }
];

const list = document.querySelector("#internship-list");
const searchInput = document.querySelector("#search");
const domainSelect = document.querySelector("#domain");
const clearButton = document.querySelector("#clear-filters");
const emptyClearButton = document.querySelector("#empty-clear");
const emptyState = document.querySelector("#empty-state");
const errorState = document.querySelector("#error-state");
const resultsCount = document.querySelector("#results-count");

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}

function populateDomains() {
  const domains = [...new Set(internships.map(item => item.domain))].sort();
  domains.forEach(domain => {
    const option = document.createElement("option");
    option.value = domain;
    option.textContent = domain;
    domainSelect.append(option);
  });
}

function renderCards(items) {
  list.innerHTML = items.map(item => `
    <article class="card">
      <div class="card-top">
        <div>
          <p class="company">${escapeHTML(item.company)}</p>
          <h3>${escapeHTML(item.title)}</h3>
        </div>
        <span class="domain">${escapeHTML(item.domain)}</span>
      </div>

      <p class="card-description">${escapeHTML(item.description)}</p>

      <div class="meta">
        <span class="meta-item"><strong>Location:</strong> ${escapeHTML(item.location)}</span>
        <span class="meta-item"><strong>Type:</strong> ${escapeHTML(item.type)}</span>
        <span class="meta-item"><strong>Duration:</strong> ${escapeHTML(item.duration)}</span>
      </div>

      <a class="apply-link" href="#apply" data-internship="${item.id}" aria-label="View ${escapeHTML(item.title)}">
        View opportunity
      </a>
    </article>
  `).join("");
}

function getFilteredInternships() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedDomain = domainSelect.value;

  return internships.filter(item => {
    const searchable = [
      item.title, item.company, item.domain, item.location,
      item.type, item.duration, item.description
    ].join(" ").toLowerCase();

    const matchesQuery = !query || searchable.includes(query);
    const matchesDomain = selectedDomain === "all" || item.domain === selectedDomain;

    return matchesQuery && matchesDomain;
  });
}

function updateBoard() {
  try {
    const filtered = getFilteredInternships();
    renderCards(filtered);

    const count = filtered.length;
    resultsCount.textContent = `${count} ${count === 1 ? "opportunity" : "opportunities"} found`;

    emptyState.hidden = count !== 0;
    errorState.hidden = true;
    list.hidden = count === 0;
  } catch (error) {
    list.innerHTML = "";
    list.hidden = true;
    emptyState.hidden = true;
    errorState.hidden = false;
    resultsCount.textContent = "";
    console.error(error);
  }
}

function clearFilters() {
  searchInput.value = "";
  domainSelect.value = "all";
  updateBoard();
  searchInput.focus();
}

searchInput.addEventListener("input", updateBoard);
domainSelect.addEventListener("change", updateBoard);
clearButton.addEventListener("click", clearFilters);
emptyClearButton.addEventListener("click", clearFilters);

list.addEventListener("click", event => {
  const link = event.target.closest("[data-internship]");
  if (!link) return;

  const internship = internships.find(item => item.id === Number(link.dataset.internship));
  if (!internship) return;

  event.preventDefault();
  alert(`Selected: ${internship.title}\n\nThis demo uses fictional internship records.`);
});

populateDomains();
updateBoard();
