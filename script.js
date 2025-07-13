const container = document.getElementById("reel-container");
let lastTapTime = 0;

fetch("videos.json") // Change to full URL if hosted elsewhere
  .then(res => res.json())
  .then(data => {
    data.forEach(video => {
      const reel = document.createElement("div");
      reel.className = "reel";
      reel.innerHTML = `
        <iframe 
          src="${video.url}?autoplay=1&mute=1" 
          allow="autoplay; encrypted-media" 
          allowfullscreen
        ></iframe>
      `;
      container.appendChild(reel);

      // Add double-tap mute toggle
      reel.addEventListener("touchend", function (e) {
        const now = new Date().getTime();
        if (now - lastTapTime < 300) {
          const iframe = reel.querySelector("iframe");
          let src = iframe.src;
          const isMuted = src.includes("mute=1");
          iframe.src = src.replace(/mute=\d/, `mute=${isMuted ? 0 : 1}`);
        }
        lastTapTime = now;
      });
    });
  })
  .catch(err => {
    console.error("Video loading error:", err);
    container.innerHTML = `<p style="color: white; padding: 20px;">⚠️ Failed to load videos</p>`;
  });
