const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const output = document.getElementById("output");

generateBtn.addEventListener("click", function () {
  const idea = document.getElementById("ideaInput").value;
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
