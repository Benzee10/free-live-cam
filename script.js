document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('promo-popup');
  const redirectUrl = 'https://t.co/cVidV7FM82';           // ← Your Telegram link
  const STORAGE_KEY = 'naughtyPopupLastShown';             // changed key so it doesn't conflict with old versions

  function shouldShowPopup() {
    const today = new Date().toDateString();
    const lastShown = localStorage.getItem(STORAGE_KEY);
    return lastShown !== today;
  }

  function showPopup() {
    popup.classList.remove('hidden');
    localStorage.setItem(STORAGE_KEY, new Date().toDateString());
  }

  function handleRedirect() {
    window.open(redirectUrl, '_blank', 'noopener,noreferrer');
    popup.classList.add('hidden');
  }

  // Show popup after a teasing delay (adjust 3000–5000 ms as desired)
  if (shouldShowPopup()) {
    setTimeout(showPopup, 3000);   // 3 seconds — feels urgent but not instant
  }

  // Clicking the overlay anywhere → redirect (aggressive CTA)
  popup.addEventListener('click', handleRedirect);

  // Prevent clicks inside popup content from bubbling to overlay
  popup.querySelector('.popup-content')
    .addEventListener('click', e => e.stopPropagation());

  // Unlock button → redirect
  const unlockBtn = popup.querySelector('.unlock-btn');
  if (unlockBtn) {
    unlockBtn.addEventListener('click', handleRedirect);
  }

  // Close button → also redirects (common in adult funnels — makes user feel they "have to" go to Telegram)
  const closeBtn = popup.querySelector('.close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', handleRedirect);
  }
});