const container = document.getElementById("reel-container");

// Fetch and render reels
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
          <div class="username">@${video.username}</div>
          <div class="caption">${video.caption}</div>
          <div class="actions">
            <button><i class="fas fa-heart"></i></button>
            <button><i class="fas fa-comment"></i></button>
            <button><i class="fas fa-share"></i></button>
          </div>
        </div>
        <div style="text-align:center; margin: 15px 0;">
          <a href="https://redirecting-kappa.vercel.app/" target="_blank" style="
            display:inline-block;
            padding:12px 24px;
            background:#ff69b4;
            color:white;
            font-weight:bold;
            border-radius:50px;
            text-decoration:none;
            animation: bounce 1.5s infinite;
          ">💬 Chat Now</a>
        </div>
      `;
      container.appendChild(reel);
    });
  })
  .catch(err => {
    container.innerHTML = `<p style="color:white;text-align:center;margin-top:40px;">⚠️ Error loading videos</p>`;
  });

// Scroll progress indicator
const scrollIndicator = document.querySelector(".scroll-progress");
container.addEventListener("scroll", () => {
  const scrollTop = container.scrollTop;
  const scrollHeight = container.scrollHeight - container.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;
  scrollIndicator.style.height = `${scrolled}%`;
});

// Pop-up modal (always shows on visit)
window.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("close-popup");

  popup.classList.add("show");

  closePopup.addEventListener("click", () => {
    popup.classList.remove("show");
  });

  window.addEventListener("click", e => {
    if (e.target === popup) {
      popup.classList.remove("show");
    }
  });
});
