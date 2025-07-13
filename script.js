const container = document.getElementById("reel-container");

fetch("videos.json")
  .then(res => res.json())
  .then(urls => {
    urls.forEach(url => {
      const reel = document.createElement("div");
      reel.className = "reel";

      // Create play overlay and empty iframe
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";

      const overlay = document.createElement("div");
      overlay.className = "play-overlay";

      overlay.addEventListener("click", () => {
        iframe.src = url;
        iframe.style.display = "block";
        overlay.style.display = "none";
      });

      reel.appendChild(iframe);
      reel.appendChild(overlay);
      container.appendChild(reel);
    });
  })
  .catch(err => {
    container.innerHTML = `<p style="color:white;padding:40px;text-align:center;">⚠️ Error loading videos</p>`;
  });
