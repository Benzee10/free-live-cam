const videos = document.querySelectorAll('.video__player');
const videoSources = [

    "https://c766c4a628.mjedge.net/videos/6/7/f/2/d/67f2d8d8308bf.mp4?expires=1744019274&l=35&ri=1572864&rs=128000&token=3d5d0b711a49364d02fdb8400cc5969e",
    "https://c766c4a628.mjedge.net/videos/6/7/f/2/d/67f2d841bd557.mp4?expires=1744019175&l=35&ri=1572864&rs=128000&token=b636e60be81e67d30b762d74191e7f02",
    "https://c766c4a628.mjedge.net/videos/6/7/f/2/d/67f2d82e91569.mp4?expires=1744018827&l=35&ri=1572864&rs=128000&token=d1500cfca79f4a962015581aa4bb84a7",
    "https://c766c4a628.mjedge.net/videos/5/d/8/0/3/5d803b648de64.mp4?expires=1744020389&l=35&ri=1572864&rs=128000&token=d891a8c435e5577f2f15e171a8738691",


    // Agrega aquí más URLs de videos según sea necesario
];

const nombresAleatorios = [
    "🇵🇹 Lorena Caterina 🇵🇹 ",
    "🇫🇮 Ana Maria 🇫🇮",
    "🇨🇦 Carolina Garcia 🇨🇦",
    "🇦🇺 NAKARY MILLER 🇦🇺",
    "🇺🇸 GRACIELA CATERINA 🇺🇸",
    "🇻🇪 Valentina Ribeiro 🇻🇪",
    "🇻🇪 G R A C I E L A 💘 🇻🇪",
    "🇵🇪 Mariana López 🇵🇪",
    "🇷🇴 Andrei Popescu 🇷🇴",
    "🇧🇪 Emma Dubois 🇧🇪",
    "🇬🇷 Ioanna Papadopoulos 🇬🇷",
    "🇨🇱 Matías Silva 🇨🇱",
    "🇭🇺 Levente Kovács 🇭🇺",
    "🇸🇦 Fatima Al-Mansoori 🇸🇦",
    "🇲🇽 Alejandro Hernández 🇲🇽",
    "🇵🇦 Camila González 🇵🇦",
    "🇨🇮 Aminata Diop 🇨🇮",
    "🇨🇴 Isabela Ríos 🇨🇴",
    "🇮🇹 Sofia Santoro 🇮🇹",
    "🇳🇴 Emilie Andersen 🇳🇴",
    "🇦🇹 Lara Hofmann 🇦🇹",
    "🇳🇿 Harper Wilson 🇳🇿",
    "🇨🇿 Klára Nováková 🇨🇿",
    "🇮🇪 Aoife Murphy 🇮🇪",
    "🇨🇭 Alessia Rossi 🇨🇭",
    "🇮🇳 Aarav Patel 🇮🇳",
    "🇦🇪 Layla Khan 🇦🇪",
    "🇸🇪 Malin Lindström 🇸🇪",
    "🇿🇦 Thabo Molefe 🇿🇦",
    "🇳🇱 Daan van der Berg 🇳🇱",
    "🇧🇷 Maria da Silva 🇧🇷",
    "🇫🇷 Léa Dubois 🇫🇷",
    "🇰🇷 Min-jun Kim 🇰🇷",
    "🇯🇵 Yui Tanaka 🇯🇵",
    "🇩🇪 Lena Müller 🇩🇪",
    "🇬🇧 Oliver Hughes 🇬🇧",
    "🇪🇸 Marta García 🇪🇸",
    // Agrega más nombres según sea necesario
];

const textosAleatorios = [
    "Watch Me Masturbate Live ❤️",
    "📞🔥 Phone Calls, 💥 Custom Videos, 😋 Live Broadcasts, Your Name on My 🍒TITS!",
    "Made in Czech 🇨🇿🍺 Big smile and big...heart🍒 Cum join me in my adventures as I show off just for you baby ❤️",
    "❣ Exclusive VIP Content 🔞|Seduction and Sensuality Unleashed 🦊| Monthly Nude Delights📸",
    "😻 Model, ❤️ student 🔥I make exclusive videos, 📞calls! Sexsting LIVE -broadcasts!!🍑🍒 #fuck",
    "Model, 20 y.o 🇪🇸 Wanna chat with me? Check all my links 😍",
    "Hi I’m Molly! ❤️ Just a sweet girl who loves to be naughty 🤫😈💋CHECK ALL MY LINKS via IG! ✨",
    "🔥 Hot and ready for you! 😈 Let's play together and make your fantasies come true 💦",
    "🍑 Curvy and fun! 💋 Join me for exclusive content and live shows 📸",
    "🌟 Your favorite cam girl! 🎥 Live shows, custom videos, and more 🔞",
    "💖 Sensual and seductive! 😘 Exclusive content just for you 💌",
    "🔥 Naughty but nice! 💋 Cum play with me and let's have some fun 🍒",
    "🌺 Sweet and sexy! 💫 Join me for a private show and let's get wild together 🚀",
    "👅 Ready to please! 💦 Let's explore your wildest desires together 🔥",
    "🔞 Explicit content and live shows! 💋 Cum chat with me and let's have some fun 😘",
    "🌈 Fun and flirty! 💖 Exclusive content and private shows just for you 🌟",
    "💥 Wild and willing! 🔞 Let's get naughty together and have an unforgettable time 😈",
    // Agrega más textos según sea necesario
];

// Función para cambiar aleatoriamente el video
function changeRandomVideo() {
    videos.forEach(video => {
        const randomSourceIndex = Math.floor(Math.random() * videoSources.length);
        const newSource = videoSources[randomSourceIndex];

        video.src = newSource;
        video.load();
        video.play();
    });
}

// Función para cambiar aleatoriamente el nombre
function changeRandomName() {
    const nameElement = document.getElementById('randomName');
    const randomIndex = Math.floor(Math.random() * nombresAleatorios.length);
    const newName = nombresAleatorios[randomIndex];

    nameElement.textContent = newName;
}

// Función para cambiar aleatoriamente el texto
function changeRandomText() {
    const textElement = document.getElementById('randomText');
    const randomIndex = Math.floor(Math.random() * textosAleatorios.length);
    const newText = textosAleatorios[randomIndex];

    textElement.textContent = newText;
}

// Ejecutar las funciones al cargar la página
window.onload = function () {
    changeRandomVideo();
    changeRandomName();
    changeRandomText();
};

function recargarPagina() {
    // Recargar la página
    location.reload();
}


