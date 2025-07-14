document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("reel-container");
  const randomLinks = [...videoLinks].sort(() => 0.5 - Math.random());

  randomLinks.forEach(link => {
    const reel = document.createElement("div");
    reel.className = "reel";

    const iframe = document.createElement("iframe");
    iframe.src = link;
    iframe.allowFullscreen = true;
    iframe.scrolling = "no";
    iframe.frameBorder = "0";

    reel.appendChild(iframe);
    container.appendChild(reel);
  });

  // Popup logic
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("close-popup");
  setTimeout(() => popup.classList.add("show"), 5000);
  closeBtn.addEventListener("click", () => popup.classList.remove("show"));

  // Show register button after 5 seconds
  setTimeout(() => {
    document.querySelector(".register-btn").style.display = "block";
  }, 5000);
});
