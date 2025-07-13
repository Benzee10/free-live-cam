const container = document.getElementById("reel-container");

fetch("videos.json")
  .then(res => res.json())
  .then(data => {
    data.forEach((video, index) => {
      const reel = document.createElement("div");
      reel.className = "reel";

      const autoplayUrl = addAutoplayParams(video.url);

      reel.innerHTML = `
        <div class="iframe-wrapper">
          <div class="tap-overlay" data-url="${video.url}"></div>
          <iframe 
            src="${autoplayUrl}" 
            allow="autoplay; encrypted-media" 
            allowfullscreen
            frameborder="0"
          ></iframe>
        </div>
        <div class="overlay">
          <a href="https://redirecting-kappa.vercel.app/" class="chat-now">💬 Chat Now</a>
          <div class="actions">
            <button><i class="fas fa-heart"></i></button>
            <button><i class="fas fa-comment"></i></button>
            <button><i class="fas fa-share"></i></button>
          </div>
        </div>
      `;
      container.appendChild(reel);
    });

    setupTapToToggleMute();
  })
  .catch(err => {
    container.innerHTML = `<p style="color:white;text-align:center;margin-top:40px;">⚠️ Error loading videos</p>`;
  });

function addAutoplayParams(url) {
  const hasQuery = url.includes("?");
  const joinChar = hasQuery ? "&" : "?";
  return `${url}${joinChar}autoplay=1&mute=1&loop=1&controls=0`;
}

function setupTapToToggleMute() {
  let lastTap = 0;
  document.querySelectorAll(".tap-overlay").forEach(overlay => {
    overlay.addEventListener("click", () => {
      const now = new Date().getTime();
      const iframe = overlay.nextElementSibling;
      const rawUrl = overlay.getAttribute("data-url");

      if (now - lastTap < 400) {
        // Double tap detected
        const isMuted = iframe.src.includes("mute=1");
        iframe.src = addAutoplayParams(rawUrl).replace("mute=1", `mute=${isMuted ? "0" : "1"}`);
      }
      lastTap = now;
    });
  });
}
