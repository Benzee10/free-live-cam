const container = document.getElementById("reel-container");

fetch("https://your-app.vercel.app/videos.json") // replace with your actual URL
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
          frameborder="0"
        ></iframe>
      `;
      container.appendChild(reel);
    });
  })
  .catch(err => {
    container.innerHTML = `<p style="color:white;text-align:center;margin-top:40px;">⚠️ Error loading videos</p>`;
    console.error("Error loading videos:", err);
  });
