const videos = document.querySelectorAll('.video__player');
const videoSources = [

    "https://video.twimg.com/ext_tw_video/1544808646072229888/pu/vid/720x1124/z_A1dqkOSm3Ht2g-.mp4?tag=12",
            "https://video.twimg.com/ext_tw_video/1837134244914585600/pu/vid/avc1/720x1280/URimxBokqSvFlItx.mp4?tag=12",
            "https://video.twimg.com/amplify_video/1793299270499803137/vid/avc1/720x1280/2jAS4Kxxd2LXN1jF.mp4?tag=14",
            "https://video.twimg.com/ext_tw_video/1668840756109529088/pu/vid/1080x608/8GKYoMynVGaKBZOc.mp4?tag=12",
            "https://video.twimg.com/amplify_video/1785776819356225536/vid/avc1/1278x720/NVKFhthdhBt8za6w.mp4?tag=14",
            "https://video.twimg.com/amplify_video/1834672291650977794/vid/avc1/1920x1080/oxhdLprcqktc-dq7.mp4?tag=16",
            "https://video.twimg.com/amplify_video/1841877900401782792/vid/avc1/1920x1080/efiYJLvc8UUdzPP7.mp4?tag=16",
            "https://video.twimg.com/amplify_video/1841091024770269192/vid/avc1/1920x1080/H8iXboKtnb3izzdw.mp4?tag=16",
            "https://video.twimg.com/ext_tw_video/1841810424380915712/pu/vid/avc1/720x1280/ujUW6H10kD2m2StP.mp4?tag=12",
            "https://video.twimg.com/amplify_video/1837926442228719616/vid/avc1/720x966/xiRcnhqJRwjFE6mS.mp4?tag=16",
            "https://video.twimg.com/amplify_video/1839658635246321664/vid/avc1/1080x1920/3UNh52urfRvPbPQP.mp4?tag=16",
            "https://video.twimg.com/ext_tw_video/1836398328403185664/pu/vid/avc1/720x1280/5mP9LuUQAwXh_mWR.mp4?tag=12",
            "https://video.twimg.com/ext_tw_video/1837134782871838720/pu/vid/avc1/720x960/FleySGAwBNlYt3Ei.mp4?tag=12",
            "https://video.twimg.com/ext_tw_video/1837134401605345281/pu/vid/avc1/720x960/uNndnhiIn3H99CJP.mp4?tag=12",
            "https://video.twimg.com/amplify_video/1832636772859416576/vid/avc1/1080x1920/9-MbHnSE_JdIsYO9.mp4?tag=16",
            "https://video.twimg.com/amplify_video/1759365539565297664/vid/avc1/720x1280/JLKnYmnQCDvI7N6e.mp4?tag=14",
            "https://video.twimg.com/amplify_video/1807989295766294532/vid/avc1/1080x1920/6hzsajqCPTaSw2ai.mp4?tag=16",
            "https://video.twimg.com/amplify_video/1715004141490315264/vid/avc1/720x960/ytceyi5voSoDTOrF.mp4?tag=14",
            "https://video.twimg.com/amplify_video/1807989295787266051/vid/avc1/1080x1920/dvv0fXIVpJ2paMIN.mp4?tag=16",
            "https://video.twimg.com/amplify_video/1731729223113662464/vid/avc1/720x1280/b2n5BcFsdK9enyct.mp4?tag=14",
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


