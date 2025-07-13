const container = document.getElementById("reel-container");

// Load videos from JSON
fetch("videos.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(video => {
      const reel = document.createElement("div");
      reel.className = "reel";
      reel.innerHTML = `
        <div class="iframe-wrapper">
          <iframe 
            src="${video.url}" 
            allow="autoplay; encrypted-media" 
            allowfullscreen 
          ></iframe>
        </div>
        <div class="overlay">
          <div class="username">@${video.username}</div>
          <div class="caption">${video.caption}</div>
          <div class="actions">
            <button><i class="fas fa-heart"></i></button>
            <button><i class="fas fa-comment"></i></button>
            <button><i class="fas fa-share"></i></button>
          </div>
        </div>
        <a href="https://redirecting-kappa.vercel.app/" class="chat-now-btn">💬 Chat Now</a>
      `;
      container.appendChild(reel);
    });
  })
  .catch(err => {
    container.innerHTML = `<p style="color:white;text-align:center;margin-top:40px;">⚠️ Error loading videos</p>`;
  });

// Floating scroll indicator
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.querySelector(".scroll-progress").style.height = scrollPercent + "%";
});

// Telegram & WhatsApp popup once per session
window.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("social-popup");
  if (!sessionStorage.getItem("shownPopup")) {
    popup.classList.add("show");
    sessionStorage.setItem("shownPopup", "yes");
  }
  document.getElementById("popup-close").onclick = () => {
    popup.classList.remove("show");
  };
});
