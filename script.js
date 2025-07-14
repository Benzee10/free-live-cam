document.addEventListener("DOMContentLoaded", function () {
  const videoContainer = document.getElementById("video-container");

  // ========== Load Random Iframe from iframe.js ==========
  if (Array.isArray(videoLinks) && videoLinks.length > 0) {
    const randomIndex = Math.floor(Math.random() * videoLinks.length);
    const selectedVideo = videoLinks[randomIndex];

    const iframe = document.createElement("iframe");
    iframe.src = selectedVideo;
    iframe.allowFullscreen = true;
    iframe.frameBorder = "0";
    iframe.width = "100%";
    iframe.height = "100%";

    videoContainer.appendChild(iframe);
  }

  // ========== Show POPUP Once Per Day ==========
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("close-popup");

  const lastShown = localStorage.getItem("popupLastShown");
  const now = new Date().toISOString().split("T")[0];

  if (lastShown !== now) {
    setTimeout(() => {
      popup.classList.add("show");
      localStorage.setItem("popupLastShown", now);
    }, 5000);
  }

  closeBtn.addEventListener("click", () => {
    popup.classList.remove("show");
  });

  // ========== Register Now Button Logic ==========
  const registerBtn = document.getElementById("register-now");

  setTimeout(() => {
    registerBtn.style.display = "flex";
  }, 5000);

  registerBtn.addEventListener("click", () => {
    window.open("https://redirecting-kappa.vercel.app/", "_blank");
    registerBtn.style.display = "none"; // hide after interaction
  });

  // ========== Optional: Scroll to Top on Pull Refresh ==========
  let isRefreshing = false;
  let startY = 0;

  document.addEventListener("touchstart", (e) => {
    if (document.documentElement.scrollTop === 0) {
      startY = e.touches[0].clientY;
    }
  });

  document.addEventListener("touchend", (e) => {
    const endY = e.changedTouches[0].clientY;
    if (endY - startY > 120 && !isRefreshing) {
      isRefreshing = true;
      location.reload();
    }
  });
});
