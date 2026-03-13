const imageInput = document.getElementById("chilliImage");
const preview = document.getElementById("preview");
const analyzeBtn = document.getElementById("analyzeBtn");

const gradeEl = document.getElementById("grade");
const confidenceEl = document.getElementById("confidence");
const defectsEl = document.getElementById("defects");

const mockPredictions = [
  { grade: "A1", confidence: 97, defects: "No significant defects" },
  { grade: "A2", confidence: 92, defects: "Minor size variation" },
  { grade: "B1", confidence: 88, defects: "Slight discoloration" },
  { grade: "B2", confidence: 82, defects: "Wrinkles, surface spots" },
];

imageInput.addEventListener("change", () => {
  const [file] = imageInput.files;
  if (!file) {
    preview.hidden = true;
    return;
  }
  preview.src = URL.createObjectURL(file);
  preview.hidden = false;
});

analyzeBtn.addEventListener("click", () => {
  if (!imageInput.files?.length) {
    gradeEl.textContent = "Please upload an image first";
    confidenceEl.textContent = "-";
    defectsEl.textContent = "-";
    return;
  }

  const result = mockPredictions[Math.floor(Math.random() * mockPredictions.length)];

  gradeEl.textContent = result.grade;
  confidenceEl.textContent = `${result.confidence}%`;
  defectsEl.textContent = result.defects;
});
