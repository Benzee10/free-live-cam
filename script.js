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
            <div class="user-chat">
              <div class="username">@${video.username}</div>
              <a class="chat-now" href="https://redirecting-kappa.vercel.app/" target="_blank">💬 Chat Now</a>
            </div>
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

  // Popup
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("close-popup");

  setTimeout(() => {
    popup.style.display = "flex";
  }, 8000);

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});
