document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("reel-container");

  // Load videos from JSON
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

          <a href="https://redirecting-kappa.vercel.app/" class="chat-now-bounce">💬 Chat Now</a>

          <div class="overlay">
            <div class="username">${video.username}</div>
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

  // Show popup on every visit
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("close-popup");

  setTimeout(() => {
    popup.classList.add("show");
  }, 3000); // Show after 3 seconds

  closePopup.addEventListener("click", () => {
    popup.classList.remove("show");
  });

  // Close when clicking outside content
  window.addEventListener("click", e => {
    if (e.target === popup) {
      popup.classList.remove("show");
    }
  });
});
