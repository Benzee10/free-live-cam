const container = document.getElementById("reel-container");

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
            <a class="chat-now" href="https://redirecting-kappa.vercel.app/" target="_blank">💬 Chat Now</a>
            <div class="username">${video.username}</div>
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
