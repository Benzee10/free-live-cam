document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("reel-container");

  // Load videos
  fetch("videos.json")
    .then(res => res.json())
    .then(data => {
      data.forEach(video => {
        const reel = document.createElement("div");
        reel.className = "reel";
        reel.innerHTML = `
          <iframe 
            src="${video.url}" 
            allow="autoplay; encrypted-media" 
            allowfullscreen 
          ></iframe>

          <div class="overlay">
            <div class="user-row">
              <div class="username">@${video.username}</div>
              <a class="chat-now" href="https://redirecting-kappa.vercel.app/" target="_blank">💬 Chat Now</a>
            </div>
            <div class="caption">${video.caption}</div>
            <div class="actions">
              <button><i class="fas fa-heart"></i></button>
              <button><i class="fas fa-comment"></i></button>
              <button><i class="fas fa-share"></i></button>
            </div>
          </div>
        `;
        container.appendChild(reel);
      });
    })
    .catch(err => {
      container.innerHTML = `<p style="color:white;text-align:center;margin-top:40px;">⚠️ Error loading videos</p>`;
    });

  // Telegram & WhatsApp popup
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("close-popup");

  // Always show popup on visit
  setTimeout(() => {
    popup.style.display = "flex";
  }, 3000);

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Optional: close popup when clicking outside content
  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});
