
"use strict";

const searchInput = document.getElementById("searchInput");
const landmarkGrid = document.getElementById("landmarkGrid");
const landmarkDetails = document.getElementById("landmarkDetails");
const resultCount = document.getElementById("resultCount");
const emptyMessage = document.getElementById("emptyMessage");
const photoInput = document.getElementById("photoInput");
const photoPreview = document.getElementById("photoPreview");
const storyForm = document.getElementById("storyForm");
const storyFeedback = document.getElementById("storyFeedback");

let landmarks = [];
let currentPhotoUrl = null;

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}

function renderLandmarks(items) {
  landmarkGrid.innerHTML = "";

  resultCount.textContent =
    `${items.length} landmark${items.length === 1 ? "" : "s"} found`;

  emptyMessage.hidden = items.length !== 0;

  items.forEach((landmark) => {
    const card = document.createElement("article");
    card.className = "landmark-card";

    const image = document.createElement("img");
    image.src = landmark.image;
    image.alt = `Illustrative image for ${landmark.name}`;
    image.loading = "lazy";
    image.onerror = () => {
      image.hidden = true;
    };

    const content = document.createElement("div");
    content.className = "card-content";

    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = landmark.category;

    const heading = document.createElement("h3");
    heading.textContent = landmark.name;

    const location = document.createElement("p");
    location.textContent = `${landmark.region}, ${landmark.country}`;

    const summary = document.createElement("p");
    summary.textContent = landmark.summary;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "button primary";
    button.textContent = "Explore landmark";
    button.addEventListener("click", () => showDetails(landmark.id));

    content.append(tag, heading, location, summary, button);
    card.append(image, content);
    landmarkGrid.append(card);
  });
}

function showDetails(id) {
  const landmark = landmarks.find((item) => item.id === id);

  if (!landmark) {
    return;
  }

  landmarkDetails.innerHTML = `
    <span class="tag">${escapeHTML(landmark.category)}</span>
    <h3>${escapeHTML(landmark.name)}</h3>
    <p><strong>Location:</strong>
      ${escapeHTML(landmark.region)}, ${escapeHTML(landmark.country)}
    </p>
    <p><strong>Period:</strong> ${escapeHTML(landmark.period)}</p>
    <dl>
      <dt>Historical information</dt>
      <dd>${escapeHTML(landmark.history)}</dd>
      <dt>Local stories</dt>
      <dd>${escapeHTML(landmark.localStory)}</dd>
      <dt>Travel tip</dt>
      <dd>${escapeHTML(landmark.travelTip)}</dd>
      <dt>Reference status</dt>
      <dd>${escapeHTML(landmark.source)}</dd>
    </dl>
    <p class="muted">
      This sample record should be checked against trusted sources.
    </p>
  `;

  document.getElementById("details").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function filterLandmarks() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = landmarks.filter((landmark) => {
    const searchableText = [
      landmark.name,
      landmark.country,
      landmark.region,
      landmark.category,
      landmark.summary
    ].join(" ").toLowerCase();

    return searchableText.includes(query);
  });

  renderLandmarks(filtered);
}

searchInput.addEventListener("input", filterLandmarks);

photoInput.addEventListener("change", () => {
  const file = photoInput.files?.[0];

  if (currentPhotoUrl) {
    URL.revokeObjectURL(currentPhotoUrl);
    currentPhotoUrl = null;
  }

  if (!file) {
    photoPreview.hidden = true;
    photoPreview.removeAttribute("src");
    return;
  }

  if (!file.type.startsWith("image/")) {
    alert("Please choose an image file.");
    photoInput.value = "";
    photoPreview.hidden = true;
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("Please choose an image smaller than 5 MB.");
    photoInput.value = "";
    photoPreview.hidden = true;
    return;
  }

  currentPhotoUrl = URL.createObjectURL(file);
  photoPreview.src = currentPhotoUrl;
  photoPreview.hidden = false;
});

storyForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!storyForm.reportValidity()) {
    return;
  }

  const formData = new FormData(storyForm);
  const landmark = String(formData.get("landmark") || "").trim();
  const title = String(formData.get("title") || "").trim();
  const story = String(formData.get("story") || "").trim();

  storyFeedback.innerHTML = `
    <h3>Contribution preview</h3>
    <p><strong>Location:</strong> ${escapeHTML(landmark)}</p>
    <p><strong>Title:</strong> ${escapeHTML(title)}</p>
    <p>${escapeHTML(story)}</p>
    <p>
      <strong>Status:</strong> Draft preview only — not submitted to a server
      and not verified.
    </p>
  `;
});

async function loadLandmarks() {
  try {
    const response = await fetch("data/landmarks.json");

    if (!response.ok) {
      throw new Error("Landmark data could not be loaded.");
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Landmark data format is invalid.");
    }

    landmarks = data;
    renderLandmarks(landmarks);

    if (landmarks.length > 0) {
      // Keep the details panel ready for the first selected landmark.
      landmarkDetails.querySelector("p").textContent =
        "Choose a landmark card to read its details.";
    }
  } catch (error) {
    resultCount.textContent = "Unable to load landmark records.";
    emptyMessage.hidden = false;
    emptyMessage.textContent =
      "Please check that data/landmarks.json exists and contains valid JSON.";
    console.error(error);
  }
}

loadLandmarks();
