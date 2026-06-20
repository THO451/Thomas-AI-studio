const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const output = document.getElementById("output");

generateBtn.addEventListener("click", () => {

  const idea = document.getElementById("ideaInput").value.trim();
  const category = document.getElementById("category").value;
  const length = document.getElementById("length").value;

  if (!idea) {
    output.textContent = "Please describe your idea first.";
    return;
  }
const ideaLower = idea.toLowerCase();

let smartDetails = "";

if (ideaLower.includes("birthday")) {
  smartDetails += " luxury black and gold theme, celebration atmosphere, elegant styling, joyful mood,";
}

if (ideaLower.includes("graduation")) {
  smartDetails += " academic campus setting, graduation gown, achievement atmosphere, proud and confident mood,";
}

if (ideaLower.includes("wedding")) {
  smartDetails += " luxury wedding environment, romantic atmosphere, elegant attire, emotional storytelling,";
}

if (ideaLower.includes("ceo") || ideaLower.includes("business")) {
  smartDetails += " executive office environment, leadership presence, luxury business styling, powerful and confident mood,";
}

if (ideaLower.includes("car")) {
  smartDetails += " luxury vehicle, premium automotive photography, urban lifestyle atmosphere, dramatic lighting,";
}

if (ideaLower.includes("fashion")) {
  smartDetails += " high-fashion styling, editorial pose, luxury wardrobe, magazine cover aesthetic,";
}

if (ideaLower.includes("traditional")) {
  smartDetails += " cultural richness, elegant fabrics, authentic heritage styling, premium traditional attire,";
}const ideaLower = idea.toLowerCase();

  let prompt = "";

  if (category === "portrait") {
    prompt =
      `Ultra-premium studio portrait of ${idea}, ${smartDetails}, luxury editorial photography, authentic skin texture, soft cinematic lighting, professional composition, realistic shadows, premium visual balance, ultra-detailed, no AI filters, no skin smoothing.`;
  }

  if (category === "cinematic") {
    prompt =
      `Cinematic portrait of ${idea}, dramatic storytelling, movie-scene atmosphere, realistic lighting, premium fashion styling, authentic details, editorial quality photography, ultra-detailed, realistic shadows, no AI filters.`;
  }

  if (category === "fashion") {
    prompt =
      `High-end fashion editorial featuring ${idea}, luxury styling, magazine-quality photography, elegant posing, premium wardrobe, cinematic lighting, realistic textures, ultra-detailed, professional visual storytelling.`;
  }

  if (category === "traditional") {
    prompt =
      `Luxury traditional portrait of ${idea}, culturally rich styling, elegant fabrics, premium composition, warm cinematic lighting, realistic details, authentic skin texture, magazine-quality photography, ultra-detailed.`;
  }

  if (category === "video") {
    prompt =
      `Cinematic AI video concept featuring ${idea}, dynamic camera movement, realistic environment, professional storytelling, dramatic lighting, smooth transitions, premium film look, ultra-detailed visuals, high-end production quality.`;
  }

  if (length === "professional") {
    prompt +=
      " Clean Photoshop-style compositing, luxury visual aesthetics, realistic environmental blending, professional color grading, premium editorial finish.";
  }

  if (length === "master") {
    prompt +=
      " Ultra-premium editorial quality, advanced storytelling elements, luxury composition, cinematic depth, realistic environmental integration, natural light behavior, professional Photoshop-style design, refined visual hierarchy, exceptional detail retention, magazine-cover quality finish.";
  }

  output.textContent = prompt;
});

copyBtn.addEventListener("click", () => {

  navigator.clipboard.writeText(output.textContent);

  copyBtn.textContent = "Copied!";

  setTimeout(() => {
    copyBtn.textContent = "Copy Prompt";
  }, 2000);

});