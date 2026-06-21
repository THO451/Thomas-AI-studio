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
    "traditional man": "elegantly dressed man in traditional attire",
    "house": "luxurious modern home",
    "car": "luxury vehicle",
    "girl model": "professional female fashion model",
    "boy model": "professional male fashion model"
  };

  for (let key in replacements) {
    if (idea.includes(key)) {
      idea = idea.replace(key, replacements[key]);
    }
  }

  return idea;
}

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const output = document.getElementById("output");

generateBtn.addEventListener("click", function () {
  let idea = document.getElementById("ideaInput").value.trim();
  idea = enhanceIdea(idea);

  const category = document.getElementById("category").value;

  if (idea.trim() === "") {
    output.textContent = "Please describe your idea first.";
    return;
  }

  output.textContent =
    "Premium " +
    category +
    " prompt: " +
    idea +
    ", luxury editorial style, cinematic lighting, ultra-detailed, professional quality.";
});

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(output.textContent);

  copyBtn.textContent = "Copied!";

  setTimeout(function () {
    copyBtn.textContent = "Copy Prompt";
  }, 2000);
});
