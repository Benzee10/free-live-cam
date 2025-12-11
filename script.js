document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("video-container");

  // Randomize video links
  const shuffled = videoLinks.sort(() => 0.5 - Math.random());

  shuffled.forEach(url => {
    const wrapper = document.createElement("div");
    wrapper.className = "video-wrapper";

    const video = document.createElement("video");
    video.src = url;
    video.controls = true;
    video.preload = "metadata";
    video.playsInline = true;
    video.loop = true;

    // Click to play/pause
    video.addEventListener("click", () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });

    wrapper.appendChild(video);
    container.appendChild(wrapper);
  });

  // Chat and Register Buttons
  const chatBtn = document.getElementById("chatBtn");
  const registerBtn = document.getElementById("registerBtn");

  chatBtn.addEventListener("click", () => chatBtn.style.display = "none");
  registerBtn.addEventListener("click", () => registerBtn.style.display = "none");

  // Popup after 4s
  setTimeout(() => {
    document.getElementById("popup").style.display = "flex";
  }, 4000);

  document.getElementById("closePopup").onclick = () => {
    document.getElementById("popup").style.display = "none";
  };
});
