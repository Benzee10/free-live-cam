document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("reel-container");

  // Create reel section with random iframe
  function loadRandomVideo() {
    container.innerHTML = ""; // Clear old content
    const randomIndex = Math.floor(Math.random() * videoLinks.length);
    const selected = videoLinks[randomIndex];

    const reel = document.createElement("div");
    reel.className = "reel";

    const iframe = document.createElement("iframe");
    iframe.src = selected;
    iframe.allowFullscreen = true;
    iframe.frameBorder = "0";
    iframe.width = "100%";
    iframe.height = "100%";

    reel.appendChild(iframe);
    container.appendChild(reel);
  }

  // Initial load
  loadRandomVideo();

  // Pull to refresh
  let startY = 0;
  container.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;
  });

  container.addEventListener("touchend", (e) => {
    const endY = e.changedTouches[0].clientY;
    if (endY - startY > 100) {
      loadRandomVideo();
    }
  });

  // Create bouncing chat button
  const chatBtn = document.createElement("a");
  chatBtn.href = "https://redirecting-kappa.vercel.app/";
  chatBtn.className = "chat-now";
  chatBtn.textContent = "💬 Chat Now";
  chatBtn.target = "_blank";
  document.body.appendChild(chatBtn);

  // Show modal popup after 5s
  setTimeout(() => {
    const modal = document.getElementById("popup-modal");
    if (modal) modal.classList.add("show");
  }, 5000);

  // Close popup
  const closeBtn = document.querySelector(".close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      document.getElementById("popup-modal").classList.remove("show");
    });
  }

  // Handle outside click to close modal
  window.addEventListener("click", (e) => {
    const modal = document.getElementById("popup-modal");
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
});
