document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("reel-container");

  // Shuffle the video links
  const shuffled = [...videoLinks].sort(() => 0.5 - Math.random());

  shuffled.forEach((url) => {
    const reel = document.createElement("div");
    reel.className = "reel";

    reel.innerHTML = `
      <iframe src="${url}" allowfullscreen></iframe>
      <button class="chat-now" onclick="window.open('https://redirecting-kappa.vercel.app/', '_blank')">💬 Chat Now</button>
      <button class="mute-btn">🔇</button>
    `;

    container.appendChild(reel);
  });

  // Popup for WhatsApp & Telegram after 5s
  setTimeout(() => {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = `
      <div class="popup-inner">
        <span class="close-popup">&times;</span>
        <p>Join our secret groups for 🔞 content!</p>
        <a href="https://whatsapp.com/channel/0029VaMsUAp7tkjI8KcaRn10" class="btn">WhatsApp</a>
        <a href="https://t.me/Xibabes" class="btn telegram">Telegram</a>
      </div>
    `;
    document.body.appendChild(popup);

    popup.querySelector(".close-popup").onclick = () => popup.remove();
  }, 5000);

  // Global mute toggle (iframe workaround doesn't allow controlling iframe volume)
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("mute-btn")) {
      alert("Iframe audio control is not supported due to browser sandboxing. Please use video mp4 format if you want mute/unmute functionality.");
    }
  });
});
