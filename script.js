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
