const container = document.getElementById("reel-container");

fetch("videos.json")
  .then(res => res.json())
  .then(data => {
    data.forEach((videoUrl, index) => {
      const reel = document.createElement("div");
      reel.className = "reel";

      reel.innerHTML = `
        <div class="iframe-wrapper" data-muted="true">
          <iframe 
            src="${videoUrl}?autoplay=1&mute=1" 
            allow="autoplay; encrypted-media" 
            allowfullscreen
          ></iframe>
          <div class="tap-overlay" title="Double tap to toggle sound"></div>
        </div>

        <div class="overlay">
          <a class="chat-now bounce" href="https://redirecting-kappa.vercel.app/" target="_blank">💬 Chat Now</a>
          <div class="actions">
            <button><i class="fas fa-heart"></i></button>
            <button><i class="fas fa-comment"></i></button>
            <button><i class="fas fa-share"></i></button>
          </div>
        </div>
      `;

      container.appendChild(reel);
    });

    addDoubleTapHandler();
  })
  .catch(err => {
    container.innerHTML = `<p style="color:white;text-align:center;margin-top:40px;">⚠️ Error loading videos</p>`;
  });

function addDoubleTapHandler() {
  let lastTap = 0;

  document.querySelectorAll(".tap-overlay").forEach(overlay => {
    overlay.addEventListener("touchend", function () {
      const now = new Date().getTime();
      const tapLength = now - lastTap;

      if (tapLength < 300 && tapLength > 0) {
        const wrapper = this.closest(".iframe-wrapper");
        const iframe = wrapper.querySelector("iframe");
        const isMuted = wrapper.getAttribute("data-muted") === "true";
        const src = new URL(iframe.src);
        src.searchParams.set("mute", isMuted ? "0" : "1");
        iframe.src = src.toString();
        wrapper.setAttribute("data-muted", !isMuted);
      }

      lastTap = now;
    });
  });
}
