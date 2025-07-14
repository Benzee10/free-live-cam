document.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.getElementById("video-container");
  const popup = document.getElementById("social-popup");
  const registerBtn = document.getElementById("register-btn");
  const pullRefresh = document.getElementById("pull-refresh");

  // === Load random iframe video ===
  if (Array.isArray(videoLinks) && videoLinks.length > 0) {
    const randomIndex = Math.floor(Math.random() * videoLinks.length);
    const selectedVideo = videoLinks[randomIndex];

    const iframe = document.createElement("iframe");
    iframe.src = selectedVideo;
    iframe.allowFullscreen = true;
    iframe.scrolling = "no";
    iframe.frameBorder = "0";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.className = "video-iframe";

    videoContainer.appendChild(iframe);
  }

  // === Show popup & register button after 5s ===
  setTimeout(() => {
    popup.classList.add("show");
    registerBtn.classList.add("show");
  }, 5000);

  // === Close popup on interaction ===
  document.getElementById("close-popup").addEventListener("click", () => {
    popup.classList.remove("show");
  });

  registerBtn.addEventListener("click", () => {
    window.open("https://redirecting-kappa.vercel.app/", "_blank");
    registerBtn.classList.remove("show");
  });

  // === Pull-to-refresh logic ===
  let startY = 0;
  let isPulling = false;

  videoContainer.addEventListener("touchstart", (e) => {
    if (videoContainer.scrollTop === 0) {
      startY = e.touches[0].clientY;
      isPulling = true;
    }
  });

  videoContainer.addEventListener("touchmove", (e) => {
    if (!isPulling) return;
    const distance = e.touches[0].clientY - startY;
    if (distance > 50) {
      pullRefresh.style.top = "10px";
    }
  });

  videoContainer.addEventListener("touchend", () => {
    if (pullRefresh.style.top === "10px") {
      pullRefresh.innerText = "Refreshing...";
      location.reload();
    }
    pullRefresh.style.top = "-50px";
    isPulling = false;
  });
});
