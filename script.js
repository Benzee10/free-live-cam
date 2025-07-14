document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("video-container");
  const popup = document.getElementById("social-popup");
  const registerBtn = document.getElementById("register-btn");
  const pullRefresh = document.getElementById("pull-refresh");

  // Load random iframe
  if (Array.isArray(videoLinks)) {
    const randomIndex = Math.floor(Math.random() * videoLinks.length);
    const iframe = document.createElement("iframe");
    iframe.src = videoLinks[randomIndex];
    container.appendChild(iframe);
  }

  // Show popup & register button after 5s
  setTimeout(() => {
    popup.classList.add("show");
    registerBtn.style.display = "block";
  }, 5000);

  // Close popup
  document.getElementById("close-popup").addEventListener("click", () => {
    popup.classList.remove("show");
  });

  // Register button click
  registerBtn.addEventListener("click", () => {
    window.open("https://redirecting-kappa.vercel.app/", "_blank");
    registerBtn.style.display = "none";
  });

  // Pull to refresh
  let startY = 0, isPulling = false;

  container.addEventListener("touchstart", (e) => {
    if (container.scrollTop === 0) {
      startY = e.touches[0].clientY;
      isPulling = true;
    }
  });

  container.addEventListener("touchmove", (e) => {
    if (!isPulling) return;
    const distance = e.touches[0].clientY - startY;
    if (distance > 60) {
      pullRefresh.style.top = "0px";
    }
  });

  container.addEventListener("touchend", () => {
    if (pullRefresh.style.top === "0px") {
      location.reload();
    }
    pullRefresh.style.top = "-50px";
    isPulling = false;
  });
});
