function downloadResume() {
  const element = document.getElementById("resume");

  if (!element) {
    console.error("Resume element not found.");
    return;
  }

  if (typeof html2pdf === "undefined") {
    console.error("html2pdf library is not loaded.");
    return;
  }

  const options = {
    margin: 0,
    filename: "Jitendra_Rajpurohit_Resume.pdf",
    image: {
      type: "jpeg",
      quality: 0.98
    },
    html2canvas: {
      scale: 2,
      useCORS: true
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait"
    }
  };

  html2pdf()
    .set(options)
    .from(element)
    .save();
}