document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("video-container");

  // Load video links from iframe.js
  if (typeof videoLinks !== "undefined") {
    const shuffled = videoLinks.sort(() => 0.5 - Math.random());

    shuffled.forEach(link => {
      const wrapper = document.createElement("div");
      wrapper.className = "video-wrapper";

      const iframe = document.createElement("iframe");
      iframe.src = link;
      iframe.allowFullscreen = true;
      iframe.frameBorder = "0";
      wrapper.appendChild(iframe);

      container.appendChild(wrapper);
    });
  }

  // Show popup after 5 seconds
  setTimeout(() => {
    document.getElementById("popup").classList.add("show");
    document.getElementById("register-btn").style.display = "block";
  }, 5000);

  // Hide register on click
  const regBtn = document.getElementById("register-btn");
  regBtn.addEventListener("click", () => {
    regBtn.style.display = "none";
  });
});

// Scroll down button logic
function scrollToNext() {
  const container = document.getElementById("video-container");
  const scrollAmount = window.innerHeight;
  container.scrollBy({ top: scrollAmount, behavior: "smooth" });
}
