const videos = document.querySelectorAll('.video__player');
const videoSources = [

    "https://c766c4a628.mjedge.net/videos/6/7/f/2/d/67f2d8d8308bf.mp4?expires=1744019274&l=35&ri=1572864&rs=128000&token=3d5d0b711a49364d02fdb8400cc5969e",
    "https://c766c4a628.mjedge.net/videos/6/7/f/2/d/67f2d841bd557.mp4?expires=1744019175&l=35&ri=1572864&rs=128000&token=b636e60be81e67d30b762d74191e7f02",
    "https://c766c4a628.mjedge.net/videos/6/7/f/2/d/67f2d82e91569.mp4?expires=1744018827&l=35&ri=1572864&rs=128000&token=d1500cfca79f4a962015581aa4bb84a7",
    "https://c766c4a628.mjedge.net/videos/5/d/8/0/3/5d803b648de64.mp4?expires=1744020389&l=35&ri=1572864&rs=128000&token=d891a8c435e5577f2f15e171a8738691",
    "https://c766c4a628.mjedge.net/videos/6/3/7/d/d/637dddd6e8c34.mp4?expires=1744090023&l=35&ri=1572864&rs=128000&token=953fe4683ce31158f45dac337ddd888d",
    "https://c766c4a628.mjedge.net/videos/5/f/f/b/7/5ffb72fd8a168.mp4?expires=1744090059&l=35&ri=1572864&rs=128000&token=b0e98998878216a08aafa182e18050c2",
    "https://c766c4a628.mjedge.net/videos/6/2/c/6/8/62c68aac7e303.mp4?expires=1744090071&l=35&ri=1572864&rs=128000&token=4fd341d21a6c5304265be18bca7d405c",
    "https://c766c4a628.mjedge.net/videos/6/1/c/c/a/61cca282da867.mp4?expires=1744090085&l=35&ri=1572864&rs=128000&token=797361ff43eb23805d7181217b6426c0",
    "https://c766c4a628.mjedge.net/videos/6/2/7/7/f/6277f11b1d55f.mp4?expires=1744090100&l=35&ri=1572864&rs=128000&token=6f7cd16e444fc43167e6b4566b7cd57e",
    "https://c766c4a628.mjedge.net/videos/6/4/4/4/2/6444202fabf1f.mp4?expires=1744090114&l=35&ri=1572864&rs=128000&token=4a25730dfc871e292899765eeec9563a",
    "https://c766c4a628.mjedge.net/videos/6/1/0/b/9/610b92b81ffc3.mp4?expires=1744090128&l=35&ri=1572864&rs=128000&token=df20954443d6976c0c4f52dfbdbef569",
    "https://c766c4a628.mjedge.net/videos/6/3/0/5/a/6305a84e5011c.mp4?expires=1744090141&l=35&ri=1572864&rs=128000&token=6533efd894ef2e12572cc8380ef53fd5",
    "https://c766c4a628.mjedge.net/videos/6/2/a/a/d/62aad9224ce90.mp4?expires=1744090154&l=35&ri=1572864&rs=128000&token=124bb5916c441f485ca26967f3b46dd8",
    "https://c766c4a628.mjedge.net/videos/6/2/b/6/3/62b634e702f33.mp4?expires=1744090170&l=35&ri=1572864&rs=128000&token=c7125b5c510bbed210346d9fe419cddd",
    "https://c766c4a628.mjedge.net/videos/6/1/a/6/c/61a6cc26a7854.mp4?expires=1744090181&l=35&ri=1572864&rs=128000&token=e86139812af9f9feeece49e207659499",
    "https://c766c4a628.mjedge.net/videos/6/3/3/4/6/6334696a2a552.mp4?expires=1744090193&l=35&ri=1572864&rs=128000&token=65bb9cf72e54b5b72aac05c628d44221",
    "https://c766c4a628.mjedge.net/videos/6/3/e/8/2/63e82f2f69756.mp4?expires=1744090206&l=35&ri=1572864&rs=128000&token=898f79442d5c9b384220b2f08336d028",
    "https://c766c4a628.mjedge.net/videos/6/0/9/6/9/60969c6627f5d.mp4?expires=1744090220&l=35&ri=1572864&rs=128000&token=3365320f36d89812962c0b76da8bbfd0",
    "https://c766c4a628.mjedge.net/videos/6/2/f/1/2/62f12200a9ba7.mp4?expires=1744090379&l=35&ri=1572864&rs=128000&token=4c2fdecf45e1a9b1d8bedff6f345f45f",
    "https://c766c4a628.mjedge.net/videos/5/f/e/4/3/5fe430af04a9c.mp4?expires=1744089893&l=35&ri=1572864&rs=128000&token=5d711f1ce770b8981236a769d4257adf",
    "https://c766c4a628.mjedge.net/videos/5/f/e/4/3/5fe430af04a9c.mp4?expires=1744089893&l=35&ri=1572864&rs=128000&token=5d711f1ce770b8981236a769d4257adf",
    "https://c766c4a628.mjedge.net/videos/5/f/c/b/e/5fcbeb17ef31f.mp4?expires=1744089866&l=35&ri=1572864&rs=128000&token=35139412a93cefbaea2d9dbe0ae3613d",
    "https://c766c4a628.mjedge.net/videos/5/f/c/8/8/5fc88faa10bc5.mp4?expires=1744089696&l=35&ri=1572864&rs=128000&token=6da0c904d91a18e7efeb5a06bf5073a3",
    "https://c766c4a628.mjedge.net/videos/5/f/c/2/7/5fc27ce9ae5fb.mp4?expires=1744089653&l=35&ri=1572864&rs=128000&token=0e7038e510698546d0a7360b6f942fb7",
    "https://c766c4a628.mjedge.net/videos/5/f/b/a/2/5fba287b10300.mp4?expires=1744089549&l=35&ri=1572864&rs=128000&token=45a2802f372c7359f50dd59363a56fc0",
    "https://c766c4a628.mjedge.net/videos/5/f/a/7/e/5fa7e06908ea8.mp4?expires=1744089484&l=35&ri=1572864&rs=128000&token=1cd7fda808fda3d36b8c195e71b1d336",
    "https://c766c4a628.mjedge.net/videos/6/5/b/1/a/65b1a3dc5cf66.mp4?expires=1744088998&l=35&ri=1572864&rs=128000&token=0d1bb6a14dfe070bfba38b7bb0772fae",
    "https://c766c4a628.mjedge.net/videos/5/9/2/0/f/5920fa4cad59d.mp4?expires=1744088582&l=35&ri=1572864&rs=128000&token=b218e465d44be1ad012410c5e07d7e0e"

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


