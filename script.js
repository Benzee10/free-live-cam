window.addEventListener("DOMContentLoaded", () => {
  // Shuffle video links
  const shuffledLinks = [...videoLinks].sort(() => 0.5 - Math.random());
  const container = document.getElementById("video-container");

  shuffledLinks.forEach((link) => {
    const iframe = document.createElement("iframe");
    iframe.src = link;
    iframe.allow = "autoplay; fullscreen";
    container.appendChild(iframe);
  });

  // Handle button clicks
  const chatBtn = document.getElementById("chat-btn");
  const registerBtn = document.getElementById("register-btn");

  const hideButton = (e) => {
    e.target.style.display = "none";
  };

  chatBtn.addEventListener("click", hideButton);
  registerBtn.addEventListener("click", hideButton);

  // Show popup after 5 seconds
  setTimeout(() => {
    document.getElementById("popup").classList.remove("hidden");
  }, 5000);

  // Close popup
  document.getElementById("close-popup").addEventListener("click", () => {
    document.getElementById("popup").classList.add("hidden");
  });
});
