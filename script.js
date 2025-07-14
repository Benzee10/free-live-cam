document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.getElementById('video-container');
    const chatButton = document.getElementById('chat-button');
    const registerButton = document.getElementById('register-button');
    const buttonsContainer = document.querySelector('.buttons-container');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');

    // Function to shuffle an array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Shuffle video links on load
    shuffleArray(videoLinks);

    // Render videos
    videoLinks.forEach(link => {
        const slide = document.createElement('div');
        slide.classList.add('video-slide');
        const iframe = document.createElement('iframe');
        iframe.src = link;
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
        iframe.setAttribute('allowfullscreen', '');
        slide.appendChild(iframe);
        videoContainer.appendChild(slide);
    });

    // Handle button clicks to make them disappear
    chatButton.addEventListener('click', () => {
        if (buttonsContainer) {
            buttonsContainer.style.display = 'none';
        }
    });

    registerButton.addEventListener('click', () => {
        if (buttonsContainer) {
            buttonsContainer.style.display = 'none';
        }
    });

    // Show popup modal after 4 seconds
    setTimeout(() => {
        if (modal) {
            modal.classList.add('show');
        }
    }, 4000);

    // Close modal
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            if (modal) {
                modal.classList.remove('show');
            }
        });
    }

    // Close modal if user clicks outside of it
    if (modal) {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('show');
            }
        });
    }
});
