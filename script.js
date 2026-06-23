function enhanceIdea(idea) {
  idea = idea.toLowerCase();

  const replacements = {
    "studio man": "professional portrait of a confident man",
    "man suit": "confident businessman wearing a tailored suit",
    "birthday boy": "young boy celebrating his birthday",
    "birthday girl": "young girl celebrating her birthday",
    "graduate man": "successful graduate in academic attire",
    "graduate": "successful graduate in academic attire",
    "ceo man": "powerful chief executive officer",
    "traditional man": "elegantly dressed man in traditional attire"
  };

  for (let key in replacements) {
    if (idea.includes(key)) {
      idea = idea.replace(key, replacements[key]);
    }
  }

  const wordMap = {
    "man": "confident man",
    "woman": "elegant woman",
    "boy": "young boy",
    "girl": "young girl",
    "house": "luxurious modern home",
    "car": "luxury vehicle",
    "office": "executive office",
    "school": "prestigious academic campus",
    "road": "modern city street",
    "birthday": "birthday celebration",
    "graduation": "graduation ceremony",
    "rain": "rain-soaked atmosphere",
    "night": "cinematic nighttime setting",
    "sunset": "golden sunset lighting",
    "king": "royal king",
    "queen": "elegant queen",
    "doctor": "professional medical doctor",
    "lawyer": "distinguished legal professional"
  };

  let words = idea.split(" ");

  words = words.map(word => {
    return wordMap[word] || word;
  });

  return words.join(" ");
}
  
  

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const output = document.getElementById("output");

generateBtn.addEventListener("click", function () {
  let idea = document.getElementById("ideaInput").value.trim();
  idea = enhanceIdea(idea);

  const category = document.getElementById("category").value;
  const length = document.getElementById("length").value;

  if (idea === "") {
    output.textContent = "Please describe your idea first.";
    return;
  }

  let prompt = "";

  if (category === "portrait") {
    prompt =
      "Ultra-premium studio portrait of " +
      idea +
      ", luxury editorial photography, authentic skin texture, soft cinematic lighting, professional composition, realistic shadows, premium visual balance, ultra-detailed, no AI filters, no skin smoothing.";
  }

  if (category === "cinematic") {
    prompt =
      "Cinematic portrait of " +
      idea +
      ", dramatic storytelling, movie-scene atmosphere, realistic lighting, premium fashion styling, authentic details, editorial quality photography, ultra-detailed, realistic shadows, no AI filters.";
  }

  if (category === "fashion") {
    prompt =
      "High-end fashion editorial featuring " +
      idea +
      ", luxury styling, magazine-quality photography, elegant posing, premium wardrobe, cinematic lighting, realistic textures, ultra-detailed, professional visual storytelling.";
  }

  if (category === "traditional") {
    prompt =
      "Luxury traditional portrait of " +
      idea +
      ", culturally rich styling, elegant fabrics, premium composition, warm cinematic lighting, realistic details, authentic skin texture, magazine-quality photography, ultra-detailed.";
  }

  if (category === "video") {
    prompt =
      "Cinematic AI video concept featuring " +
      idea +
      ", dynamic camera movement, realistic environment, professional storytelling, dramatic lighting, smooth transitions, premium film look, ultra-detailed visuals, high-end production quality.";
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

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(output.textContent);

  copyBtn.textContent = "Copied!";

  setTimeout(function () {
    copyBtn.textContent = "Copy Prompt";
  }, 2000);
});
