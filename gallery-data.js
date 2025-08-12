// Este archivo contiene todos los datos para las galerías.
// ¡Modifícalo para agregar o quitar componentes!

export const fonts = [
    { name: 'Roboto', style: 'font-family: "Roboto", sans-serif;' }, { name: 'Lato', style: 'font-family: "Lato", sans-serif;' }, { name: 'Montserrat', style: 'font-family: "Montserrat", sans-serif;' }, { name: 'Oswald', style: 'font-family: "Oswald", sans-serif;' }, { name: 'Raleway', style: 'font-family: "Raleway", sans-serif;' }, { name: 'Merriweather', style: 'font-family: "Merriweather", serif;' }, { name: 'Nunito', style: 'font-family: "Nunito", sans-serif;' }, { name: 'Playfair Display', style: 'font-family: "Playfair Display", serif;' }, { name: 'Poppins', style: 'font-family: "Poppins", sans-serif;' }, { name: 'Open Sans', style: 'font-family: "Open Sans", sans-serif;' }, { name: 'Ubuntu', style: 'font-family: "Ubuntu", sans-serif;' }, { name: 'Source Code Pro', style: 'font-family: "Source Code Pro", monospace;' }, { name: 'Lobster', style: 'font-family: "Lobster", cursive;' }, { name: 'Pacifico', style: 'font-family: "Pacifico", cursive;' }, { name: 'Bebas Neue', style: 'font-family: "Bebas Neue", cursive;' }, { name: 'Anton', style: 'font-family: "Anton", sans-serif;' }, { name: 'Dancing Script', style: 'font-family: "Dancing Script", cursive;' }, { name: 'Shadows Into Light', style: 'font-family: "Shadows Into Light", cursive;' }, { name: 'Caveat', style: 'font-family: "Caveat", cursive;' }, { name: 'Indie Flower', style: 'font-family: "Indie Flower", cursive;' },
    { name: 'Press Start 2P', style: 'font-family: "Press Start 2P", cursive; font-size: 0.8rem;' }, { name: 'Special Elite', style: 'font-family: "Special Elite", cursive;' }, { name: 'Sacramento', style: 'font-family: "Sacramento", cursive; font-size: 2rem;' }, { name: 'Orbitron', style: 'font-family: "Orbitron", sans-serif;' }, { name: 'Cinzel', style: 'font-family: "Cinzel", serif;' }, { name: 'Architects Daughter', style: 'font-family: "Architects Daughter", cursive;' }, { name: 'Kalam', style: 'font-family: "Kalam", cursive;' }, { name: 'Zeyada', style: 'font-family: "Zeyada", cursive; font-size: 2rem;' }, { name: 'Major Mono Display', style: 'font-family: "Major Mono Display", monospace;' }, { name: 'Homemade Apple', style: 'font-family: "Homemade Apple", cursive;' }
];

export const titleEffects = [
    { name: 'Gradiente Animado', html: '<div class="title-effect-wrapper"><h2 class="title-gradient-anim">TITULO DE PRUEBA</h2></div>', css: '.title-gradient-anim { ... }' },
    { name: 'Efecto 3D', html: '<div class="title-effect-wrapper"><h2 class="title-3d-effect">TITULO DE PRUEBA</h2></div>', css: '.title-3d-effect { ... }' },
    { name: 'Efecto Glitch', html: '<div class="title-effect-wrapper"><h2 class="title-glitch-effect" data-text="TITULO DE PRUEBA">TITULO DE PRUEBA</h2></div>', css: '.title-glitch-effect { ... }' },
    { name: 'Humo', html: '<div class="title-effect-wrapper"><h2 class="title-smoke-effect">TITULO DE PRUEBA</h2></div>', css: '.title-smoke-effect { ... }' },
    { name: 'Líquido', html: '<div class="title-effect-wrapper"><h2 class="title-liquid-effect" data-text="TITULO DE PRUEBA">TITULO DE PRUEBA</h2></div>', css: '/* Requiere filtro SVG */ .title-liquid-effect { ... }' },
    { name: 'Neón', html: '<div class="title-effect-wrapper"><h2 class="title-neon-flicker">TITULO DE PRUEBA</h2></div>', css: '.title-neon-flicker { ... }' },
    { name: 'Ondulado', html: '<div class="title-effect-wrapper"><h2 class="title-wavy-effect">TITULO DE PRUEBA</h2></div>', css: '/* Requiere JS */ .title-wavy-effect span { ... }' },
    { name: 'Fuego', html: '<div class="title-effect-wrapper"><h2 class="title-fire-effect">TITULO DE PRUEBA</h2></div>', css: '.title-fire-effect { ... }' },
    { name: 'Escáner', html: '<div class="title-effect-wrapper"><h2 class="title-spotlight-scan">TITULO DE PRUEBA</h2></div>', css: '.title-spotlight-scan { ... }' },
    { name: 'Dibujo', html: `<div class="title-effect-wrapper"><svg class="title-drawing-effect" viewBox="0 0 400 100"><path d="M10 50 Q 20 20, 30 50 T 50 50 M 60 50 L 80 50 M 70 20 L 70 80 M 90 80 Q 110 10, 130 80" stroke="white" fill="transparent" stroke-width="2"></path></svg></div>`, css: '.title-drawing-effect path { ... }' },
    { name: 'Emboss', html: '<div class="title-effect-wrapper"><h2 class="text-4xl font-extrabold text-gray-700" style="text-shadow: -1px -1px 1px rgba(255,255,255,0.1), 1px 1px 1px rgba(0,0,0,0.5);">TITULO DE PRUEBA</h2></div>', css: '/* CSS Only */' },
    { name: 'Corte Papel', html: '<div class="title-effect-wrapper"><h2 class="text-4xl font-extrabold text-white relative" style="text-shadow: 2px 2px 5px rgba(0,0,0,0.7);">TITULO DE PRUEBA<span class="absolute top-0 left-0 w-full h-full text-purple-400" style="clip-path: polygon(0 45%, 100% 45%, 100% 55%, 0 55%); text-shadow: none;">TITULO DE PRUEBA</span></h2></div>', css: '/* CSS Only */' },
    { name: 'Revelado', html: '<div class="title-effect-wrapper"><h2 class="text-4xl font-extrabold text-white relative overflow-hidden w-full text-center"><span class="inline-block transform transition-transform duration-1000" data-reveal>TITULO DE PRUEBA</span></h2></div>', css: '/* Requiere JS */' },
    { name: 'Sombra Pop', html: '<div class="title-effect-wrapper"><h2 class="title-text-shadow-pop text-4xl font-extrabold text-white">TITULO DE PRUEBA</h2></div>', css: '.title-text-shadow-pop span { ... } /* Requiere JS */' },
    { name: 'Split Flap', html: '<div class="title-effect-wrapper"><h2 class="title-split-flap text-4xl font-extrabold text-white">TITULO DE PRUEBA</h2></div>', css: '.title-split-flap span { ... } /* Requiere JS */' },
    { name: 'Fantasma', html: '<div class="title-effect-wrapper"><h2 class="title-ghost-effect text-4xl font-extrabold text-white">TITULO DE PRUEBA</h2></div>', css: '.title-ghost-effect { ... }' },
    { name: 'Máscara de Texto', html: '<div class="title-effect-wrapper"><h2 class="text-4xl font-extrabold" style="background: url(https://images.unsplash.com/photo-1517336714731-489689fd1ca8?fit=crop&w=400&h=100) center/cover; -webkit-background-clip: text; background-clip: text; color: transparent;">TITULO DE PRUEBA</h2></div>', css: '/* CSS Only */' },
    { name: 'Subrayado Animado', html: '<div class="title-effect-wrapper"><h2 class="text-4xl font-extrabold text-white relative inline-block group">TITULO DE PRUEBA<span class="absolute bottom-0 left-0 w-0 h-1 bg-fuchsia-500 transition-all duration-500 group-hover:w-full"></span></h2></div>', css: '/* CSS Only */' },
    { name: 'Letras Aleatorias', html: '<div class="title-effect-wrapper"><h2 class="text-4xl font-mono font-extrabold text-white" data-scramble-text>TITULO DE PRUEBA</h2></div>', css: '/* Requiere JS */' },
    { name: 'Contorno y Relleno', html: '<div class="title-effect-wrapper"><h2 class="text-5xl font-black text-transparent transition-all duration-300 hover:text-white" style="-webkit-text-stroke: 2px #38bdf8;">TITULO DE PRUEBA</h2></div>', css: '/* CSS Only */' },
    { name: 'Rebanado', html: '<div class="title-effect-wrapper"><h2 class="text-5xl font-black title-sliced">TITULO DE PRUEBA</h2></div>', css: '.title-sliced { ... }' },
    { name: 'Cinético', html: '<div class="title-effect-wrapper"><h2 class="text-5xl font-black title-kinetic">TITULO DE PRUEBA</h2></div>', css: '.title-kinetic span { ... } /* Requiere JS */' },
    { name: 'Matrix', html: '<div class="title-effect-wrapper"><h2 class="text-4xl font-black title-matrix">TITULO DE PRUEBA</h2></div>', css: '.title-matrix { ... }' },
    { name: 'Reflejo Agua', html: '<div class="title-effect-wrapper"><h2 class="text-4xl font-black relative title-water-reflection" data-text="TITULO DE PRUEBA">TITULO DE PRUEBA</h2></div>', css: '.title-water-reflection::after { ... }' },
    { name: 'Roto', html: '<div class="title-effect-wrapper"><h2 class="text-5xl font-black title-broken" data-text="TITULO DE PRUEBA">TITULO DE PRUEBA</h2></div>', css: '.title-broken:hover::before/after { ... }' },
    { name: 'Comic', html: '<div class="title-effect-wrapper"><h2 class="text-5xl title-comic">TITULO DE PRUEBA</h2></div>', css: '.title-comic { ... }' },
    { name: 'Estirado', html: '<div class="title-effect-wrapper"><h2 class="text-5xl font-black title-stretch">TITULO DE PRUEBA</h2></div>', css: '.title-stretch span { ... } /* Requiere JS */' },
    { name: 'Pixelado', html: '<div class="title-effect-wrapper"><h2 class="text-2xl title-pixelated">TITULO DE PRUEBA</h2></div>', css: '.title-pixelated { ... }' },
    { name: 'Resaltador', html: '<div class="title-effect-wrapper"><h2 class="text-5xl font-black relative inline-block title-highlight-pen">TITULO DE PRUEBA</h2></div>', css: '.title-highlight-pen::after { ... }' },
    { name: 'Máquina Escribir', html: '<div class="title-effect-wrapper"><h2 class="text-2xl font-mono title-typing">TITULO DE PRUEBA</h2></div>', css: '.title-typing { ... }' }
];

export const buttons = [
    { name: 'Brillo', html: '<button class="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.5)]">Brillo</button>' },
    { name: 'Relleno', html: '<button class="btn-fill border-2 border-blue-500 text-blue-500 font-semibold py-2 px-4 rounded-lg">Relleno</button>', css: ".btn-fill { ... }" },
    { name: '3D', html: '<button class="btn-3d text-white font-semibold py-2 px-4 rounded-lg">3D</button>', css: ".btn-3d { ... }" },
    { name: 'Destello', html: '<button class="btn-shine bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg">Destello</button>', css: ".btn-shine { ... }" },
    { name: 'Animado', html: '<button class="btn-border-animated text-blue-400 font-semibold py-2 px-4 rounded-lg"><span></span><span></span><span></span><span></span>Animado</button>', css: ".btn-border-animated { ... }" },
    { name: 'Pulsante', html: '<button class="bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg animate-pulse">Pulsante</button>' },
    { name: 'Temblor', html: '<button class="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:animate-shake">Temblor</button>', css: "@keyframes shake-animation { ... }" },
    { name: 'Recorte', html: '<button class="btn-cutout font-bold py-2 px-4 rounded-lg text-lg">Recorte</button>', css: ".btn-cutout { ... }" },
    { name: 'Líquido', html: '<button class="btn-liquid bg-cyan-500 text-white font-semibold py-2 px-4 rounded-lg">Líquido</button>', css: ".btn-liquid { ... }" },
    { name: 'Trazo SVG', html: '<button class="btn-svg-draw font-semibold py-2 px-4 rounded-lg"><svg><rect x="0" y="0" fill="none" width="100%" height="100%"></rect></svg>Trazo SVG</button>', css: ".btn-svg-draw { ... }" },
    { name: 'Glitch', html: '<button class="btn-glitch font-mono text-cyan-400 py-2 px-4 rounded-lg" data-text="GLITCH">GLITCH</button>', css: ".btn-glitch { ... }" },
    { name: 'Borde Grad.', html: '<button class="btn-gradient-border text-white font-semibold py-2 px-4 rounded-lg">Borde Grad.</button>', css: ".btn-gradient-border { ... }" },
    { name: 'Cyberpunk', html: '<button class="btn-cyber text-cyan-300 font-bold py-2 px-4">Cyberpunk</button>', css: ".btn-cyber { ... }" },
    { name: 'Obturador', html: '<button class="btn-shutter-out text-white font-semibold py-2 px-4 rounded-lg">Obturador</button>', css: ".btn-shutter-out { ... }" },
    { name: 'Capas', html: '<button class="btn-layers relative bg-emerald-500 text-white font-semibold py-2 px-4 rounded-lg"><span></span><span></span><span></span>Capas</button>', css: ".btn-layers { ... }" },
    { name: 'Icono', html: '<button class="bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 group">Explorar <span class="transition-transform group-hover:translate-x-1">→</span></button>' },
    { name: 'Neumórfico', html: '<button class="bg-gray-800 text-gray-400 font-semibold py-2 px-4 rounded-full shadow-[7px_7px_15px_#0c111d,_-7px_-7px_15px_#161f31] active:shadow-[inset_7px_7px_15px_#0c111d,_inset_-7px_-7px_15px_#161f31] transition-shadow">Neumórfico</button>' },
    { name: 'Elástico', html: '<button class="bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-transform duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] hover:scale-110 active:scale-90">Elástico</button>' },
    { name: 'Subrayado', html: '<button class="relative text-blue-400 font-semibold py-2 px-4 group">Subrayado<span class="absolute bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span></button>' },
    { name: 'Texto Desliz.', html: '<button class="relative bg-green-600 text-white font-semibold py-2 px-4 rounded-lg h-[40px] overflow-hidden group"><span class="flex items-center justify-center h-full transition-transform duration-300 group-hover:-translate-y-full">Deslizar</span><span class="absolute inset-0 flex items-center justify-center h-full transition-transform duration-300 translate-y-full group-hover:translate-y-0">¡Adelante!</span></button>' },
    { name: 'Spotlight', html: '<button class="btn-spotlight bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg"><span></span>Spotlight</button>', css: '.btn-spotlight { ... }' },
    { name: 'Gooey', html: '<button class="btn-gooey bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg">Gooey</button>', css: '.btn-gooey { ... }' },
    { name: 'Pixelado', html: '<button class="btn-pixelated bg-red-600 text-white font-semibold py-2 px-4 rounded-lg"><span>Pixelado</span></button>', css: '.btn-pixelated { ... }' },
    { name: 'Magnético', html: '<button class="btn-magnetic bg-indigo-500 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition-transform duration-300"><i class="fas fa-magnet"></i>Magnético</button>', css: '/* Requiere JS */' },
    { name: 'Revelar Texto', html: '<button class="relative bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg overflow-hidden group"><span class="relative inline-block"><span class="absolute top-0 left-0 w-full h-full bg-teal-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span><span class="relative">Revelar</span></span></button>' },
    { name: 'Borde Doble', html: '<button class="relative border-2 border-cyan-400 text-cyan-400 font-semibold py-2 px-4 rounded-lg transition-all hover:text-white group"><span class="absolute inset-0 border-2 border-cyan-400 rounded-lg scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></span>Borde Doble</button>' },
    { name: 'Invertir', html: '<button class="bg-white text-black font-semibold py-2 px-4 rounded-lg transition-all hover:bg-black hover:text-white border-2 border-white">Invertir</button>' },
    { name: 'Trazo de Texto', html: '<button class="text-5xl font-black text-transparent" style="-webkit-text-stroke: 2px #f472b6;">Trazo</button>' },
    { name: 'Sombra Larga', html: '<button class="text-white font-semibold py-2 px-4 rounded-lg" style="text-shadow: 4px 4px 0px #1d4ed8;">Sombra</button>' },
    { name: 'Parpadeo TV', html: '<button class="text-green-400 font-mono py-2 px-4 rounded-lg animate-flicker">Parpadeo TV</button>', css: '@keyframes flicker { ... }' },
    { name: 'Carga', html: '<button class="btn-loading bg-rose-500 text-white font-semibold py-2 px-4 rounded-lg relative"><span class="btn-text">Cargar</span></button>', css: '/* Requiere JS */' },
    { name: 'Switch', html: '<button class="btn-switch w-16 h-8 bg-gray-600 rounded-full p-1 flex items-center transition-colors"><span class="w-6 h-6 bg-white rounded-full shadow-md transform transition-transform"></span></button>', css: '/* Requiere JS */' },
    { name: 'Burbuja', html: '<button class="btn-bubble bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg relative overflow-hidden">Burbuja</button>', css: '/* Requiere JS */' },
    { name: 'Icono Desliz.', html: '<button class="bg-fuchsia-500 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 group w-32 justify-center"><span class="transform transition-transform group-hover:-translate-x-4">Icono</span><i class="fas fa-arrow-right transform transition-all opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"></i></button>' },
    { name: 'Dividir', html: '<button class="btn-split relative bg-transparent border-2 border-emerald-400 text-emerald-400 font-semibold py-2 px-4 rounded-lg">Dividir</button>', css: '.btn-split::before, .btn-split::after { ... }' },
    { name: 'Tinta', html: '<button class="btn-ink relative bg-amber-500 text-white font-semibold py-2 px-4 rounded-lg overflow-hidden">Tinta</button>', css: '/* Requiere JS */' },
    { name: 'Descarga', html: '<button class="btn-download font-semibold py-2 px-4 rounded-lg flex items-center gap-2"><div class="progress"></div><span class="relative">Descargar</span></button>', css: '.btn-download { ... }' },
    { name: 'Icono Rotar', html: '<button class="btn-icon-rotate font-semibold py-2 px-4 rounded-lg flex items-center gap-2"><i class="fas fa-sync-alt"></i>Rotar</button>', css: '.btn-icon-rotate { ... }' },
    { name: 'Fondo Inclinado', html: '<button class="btn-skew-bg text-white font-semibold py-2 px-4 rounded-lg">Inclinado</button>', css: '.btn-skew-bg { ... }' },
    { name: 'Texto Revelado', html: '<button class="btn-text-reveal bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg"><span data-text="¡Listo!">Hover</span></button>', css: '.btn-text-reveal { ... }' },
    { name: 'Glitch Slice', html: '<button class="btn-glitch-slice border-2 border-red-500 text-red-500 font-mono py-2 px-4 rounded-lg">Slice</button>', css: '.btn-glitch-slice { ... }' },
    { name: 'Subrayado Crece', html: '<button class="btn-underline-grow relative text-purple-400 font-semibold py-2 px-4">Crecer</button>', css: '.btn-underline-grow { ... }' },
    { name: 'Candado', html: '<button class="btn-lock relative font-semibold py-2 px-4 rounded-lg flex items-center justify-center w-24 overflow-hidden"><i class="fas fa-lock"></i><i class="fas fa-unlock"></i></button>', css: '.btn-lock { ... }' },
    { name: 'Flecha', html: '<button class="btn-arrow-circle relative bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full">Siguiente</button>', css: '.btn-arrow-circle { ... }' },
    { name: 'Borde Pop', html: '<button class="btn-border-pop border-2 border-transparent text-pink-500 font-semibold py-2 px-4 rounded-lg transition-all">Pop</button>', css: '.btn-border-pop { ... }' }
];

export const socialButtons = [
    { name: 'Twitter', html: '<button class="btn-social-icon twitter"><i class="fab fa-twitter"></i></button>', css: '.btn-social-icon.twitter { ... }' },
    { name: 'Facebook', html: '<button class="btn-social-icon facebook"><i class="fab fa-facebook-f"></i></button>', css: '.btn-social-icon.facebook { ... }' },
    { name: 'Instagram', html: '<button class="btn-social-icon instagram"><i class="fab fa-instagram"></i></button>', css: '.btn-social-icon.instagram { ... }' },
    { name: 'LinkedIn', html: '<button class="btn-social-icon linkedin"><i class="fab fa-linkedin-in"></i></button>', css: '.btn-social-icon.linkedin { ... }' },
    { name: 'GitHub', html: '<button class="btn-social-icon github"><i class="fab fa-github"></i></button>', css: '.btn-social-icon.github { ... }' },
    { name: 'YouTube', html: '<button class="btn-social-icon youtube"><i class="fab fa-youtube"></i></button>', css: '.btn-social-icon.youtube { ... }' },
    { name: 'Pinterest', html: '<button class="btn-social-icon pinterest"><i class="fab fa-pinterest-p"></i></button>', css: '.btn-social-icon.pinterest { ... }' },
    { name: 'TikTok', html: '<button class="btn-social-icon tiktok"><i class="fab fa-tiktok"></i></button>', css: '.btn-social-icon.tiktok { ... }' },
    { name: 'Twitch', html: '<button class="btn-social-icon twitch"><i class="fab fa-twitch"></i></button>', css: '.btn-social-icon.twitch { ... }' },
    { name: 'Discord', html: '<button class="btn-social-icon discord"><i class="fab fa-discord"></i></button>', css: '.btn-social-icon.discord { ... }' },
    { name: 'Reddit', html: '<button class="btn-social-icon reddit"><i class="fab fa-reddit-alien"></i></button>', css: '.btn-social-icon.reddit { ... }' },
    { name: 'WhatsApp', html: '<button class="btn-social-icon whatsapp"><i class="fab fa-whatsapp"></i></button>', css: '.btn-social-icon.whatsapp { ... }' },
    { name: 'Telegram', html: '<button class="btn-social-icon telegram"><i class="fab fa-telegram-plane"></i></button>', css: '.btn-social-icon.telegram { ... }' }
];

export const effects = [
    // --- TUS EFECTOS ANTERIORES ---
    { name: 'Borde Neón', html: '<div class="card card-neon-border flex justify-center items-center p-4"><h3 class="text-xl font-bold">Borde Neón</h3></div>', css: ".card-neon-border { ... }" },
    { name: 'Parallax', html: '<div class="card card-parallax relative"><img src="https://placehold.co/220x280/1f2937/FFFFFF?text=Fondo" class="card-image w-full h-full object-cover absolute rounded-lg" onerror="this.onerror=null;this.src=\'https://placehold.co/220x280/1f2937/FFFFFF?text=Error\'"><h3 class="card-title text-2xl font-black text-white absolute bottom-4 left-4">PARALLAX</h3></div>', css: ".card-parallax { ... }" },
    { name: 'Cristal (Glass)', html: '<div class="card card-glass flex justify-center items-center p-4"><h3 class="text-xl font-bold">Cristal</h3></div>', css: ".card-glass { ... }" },
    { name: 'Aurora Demo', html: '<div class="card card-aurora-demo flex justify-center items-center p-4"><h3 class="text-xl font-bold">Aurora</h3></div>', css: ".card-aurora-demo { ... }" },
    { name: 'Zoom Imagen', html: '<div class="card card-img-zoom"><img src="https://placehold.co/220x280/8b5cf6/FFFFFF?text=Imagen" alt="Placeholder" class="card-image" onerror="this.onerror=null;this.src=\'https://placehold.co/220x280/8b5cf6/FFFFFF?text=Error\'"></div>', css: ".card-img-zoom { ... }" },
    { name: 'Contenido Desliz.', html: '<div class="card card-slide-content relative"><img src="https://placehold.co/220x280/10b981/FFFFFF?text=Imagen" class="w-full h-full object-cover" onerror="this.onerror=null;this.src=\'https://placehold.co/220x280/10b981/FFFFFF?text=Error\'"><div class="card-content"><h3 class="text-lg font-bold">Título</h3></div></div>', css: ".card-slide-content { ... }" },
    { name: 'Inclinado', html: '<div class="card card-skew flex justify-center items-center p-4"><h3 class="text-xl font-bold">Inclinado</h3></div>', css: ".card-skew:hover { transform: skew(-5deg, -2deg) scale(1.05); }" },
    { name: 'Profundidad 3D', html: '<div class="card card-3d-depth flex justify-center items-center p-4 bg-indigo-600"><h3 class="text-xl font-bold">Profundidad</h3></div>', css: ".card-3d-depth { ... }" },
    { name: 'Desplazamiento de Borde', html: '<div class="card card-border-shift p-6 rounded-lg"><h3 class="text-xl font-bold text-sky-400">Título del Puesto</h3><p class="text-lg font-semibold text-white">Empresa</p><p class="text-gray-300 mt-2">Descripción de tus tareas...</p></div>', css: ".card-border-shift { ... }" },
    { name: 'Imagen Desplaz.', html: '<div class="card card-img-shift"><img src="https://placehold.co/320x320/f472b6/FFFFFF?text=Imagen" class="card-image w-full h-full object-cover" onerror="this.onerror=null;this.src=\'https://placehold.co/320x320/f472b6/FFFFFF?text=Error\'"></div>', css: ".card-img-shift { ... }" },
    { name: 'Acordeón', html: '<div class="card card-accordion p-4 flex flex-col items-center"><h3 class="text-xl font-bold">Acordeón</h3><div class="hidden-content text-center mt-4"><p class="text-gray-400">Contenido oculto que aparece al pasar el cursor.</p></div></div>', css: ".card-accordion { ... }" },
    { name: 'Plegable', html: '<div class="card card-folding bg-teal-500 flex justify-end items-center p-4"><div class="fold flex justify-center items-center"><p class="text-white font-bold -rotate-90">ABRIR</p></div><h3 class="text-xl font-bold">Plegable</h3></div>', css: ".card-folding { ... }" },
    { name: 'Esquina Pelable', html: '<div class="card card-peel flex justify-center items-center bg-indigo-600"><h3 class="text-xl font-bold">Pelar Esquina</h3></div>', css: ".card-peel::before { ... }" },
    { name: 'Imagen Glitch', html: '<div class="card card-glitch-img bg-cover" style="background-image: url(\'https://placehold.co/220x280/eab308/FFFFFF?text=Imagen\')"><div class="glitch-layer"></div><div class="glitch-layer"></div><h3 class="absolute bottom-4 left-4 text-2xl font-black text-white">Glitch</h3></div>', css: ".card-glitch-img { ... }" },
    { name: 'Spotlight Follow', html: '<div class="card card-spotlight-follow flex justify-center items-center"><h3 class="text-xl font-bold">Spotlight</h3></div>', css: '.card-spotlight-follow { ... } /* Requiere JS */' },
    { name: '3D Flip', html: '<div class="card card-3d-flip"><div class="card-front flex justify-center items-center bg-teal-600">Frente</div><div class="card-back flex justify-center items-center bg-rose-600 p-4 text-center">Contenido del Dorso</div></div>', css: '.card-3d-flip { ... }' },
    { name: 'Enfoque Contenido', html: '<div class="card relative group bg-cover bg-center" style="background-image: url(\'https://placehold.co/220x280/34d399/FFFFFF?text=Fondo\')"><div class="absolute inset-0 bg-black/50 group-hover:bg-black/75 transition-all duration-300"></div><div class="relative p-4 flex flex-col justify-end h-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"><h3 class="font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Enfoque</h3><p class="text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">El contenido aparece.</p></div></div>', css: '/* CSS Only */' },
    { name: 'Borde Animado', html: '<div class="card relative p-1 overflow-hidden bg-gray-900"><div class="absolute inset-[-100%] bg-purple-500 animate-spin-slow" style="animation-duration: 4s;"></div><div class="relative bg-gray-900 w-full h-full rounded-lg flex items-center justify-center">Borde Animado</div></div>', css: '@keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }' },
    { name: 'Desenfoque Fondo', html: '<div class="card relative bg-cover bg-center group" style="background-image: url(\'https://placehold.co/220x280/f87171/FFFFFF?text=Imagen\')"><div class="absolute inset-2 bg-white/10 backdrop-blur-sm rounded-lg group-hover:backdrop-blur-none group-hover:bg-transparent transition-all duration-300"></div><h3 class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">Visible</h3></div>', css: '/* CSS Only */' },
    { name: 'Texto Revelado', html: '<div class="card p-4 flex items-end bg-gray-900 group"><h3 class="text-2xl font-bold text-white relative w-full overflow-hidden"><span class="absolute bottom-0 left-0 h-full w-full bg-sky-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span><span class="relative mix-blend-lighten">Texto Revelado</span></h3></div>', css: '/* CSS Only */' },
    { name: 'Líneas Conectadas', html: '<div class="card relative bg-gray-900"><canvas class="card-particles w-full h-full absolute top-0 left-0"></canvas><h3 class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold">Partículas</h3></div>', css: '/* Requiere JS */' },
    { name: 'Reflejo', html: '<div class="card group bg-gray-900"><div class="relative"><img src="https://placehold.co/220x200/fb923c/FFFFFF?text=Imagen" class="w-full h-auto block" onerror="this.onerror=null;this.src=\'https://placehold.co/220x200/fb923c/FFFFFF?text=Error\'"><div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent"></div></div><div class="absolute bottom-[-100%] left-0 w-full transform -scale-y-100 opacity-30 group-hover:opacity-50 transition-opacity duration-300"><img src="https://placehold.co/220x200/fb923c/FFFFFF?text=Imagen" class="w-full h-auto block" onerror="this.onerror=null;this.src=\'https://placehold.co/220x200/fb923c/FFFFFF?text=Error\'"></div></div>', css: '/* CSS Only */' },
    { name: 'Máscara Circular', html: '<div class="card card-mask-hover bg-cover bg-center group" style="background-image: url(\'https://placehold.co/220x280/4ade80/FFFFFF?text=Imagen\')"><div class="w-full h-full bg-gray-900 flex items-center justify-center text-center p-4 text-white" style="clip-path: circle(25% at 50% 50%); transition: clip-path 0.4s ease-in-out;"><h3 class="text-xl font-bold">Máscara</h3></div></div>', css: '.card-mask-hover:hover div { clip-path: circle(75% at 50% 50%); }' },
    { name: 'Contorno de Texto', html: '<div class="card flex justify-center items-center bg-gray-900"><h3 class="text-5xl font-black text-white text-center" style="background-image: url(https://images.unsplash.com/photo-1554034483-04fda0d3507b?w=220&h=280&fit=crop); -webkit-background-clip: text; background-clip: text; color: transparent;">CONTORNO</h3></div>', css: '/* CSS Only */' },
    { name: 'Capa de Color', html: '<div class="card relative group"><img src="https://placehold.co/220x280/d946ef/FFFFFF?text=Imagen" class="w-full h-full object-cover" onerror="this.onerror=null;this.src=\'https://placehold.co/220x280/d946ef/FFFFFF?text=Error\'"><div class="absolute inset-0 bg-fuchsia-500 mix-blend-multiply group-hover:mix-blend-normal transition-all duration-300"></div></div>', css: '/* CSS Only */' },
    { name: 'Inclinación Magnética', html: '<div class="card card-magnetic-tilt flex items-center justify-center bg-rose-500"><h3 class="text-2xl font-bold">Magnético</h3></div>', css: '/* Requiere JS */' },
    { name: 'Grano Animado', html: '<div class="card relative flex items-center justify-center overflow-hidden bg-slate-700"><h3 class="text-2xl font-bold">Grano</h3><div class="card-grain"></div></div>', css: '.card-grain { ... }' },
    { name: 'Patrón Animado', html: '<div class="card relative flex items-center justify-center overflow-hidden"><div class="card-pattern"></div><h3 class="relative text-2xl font-bold">Patrón</h3></div>', css: '.card-pattern { ... }' },
    { name: 'Elementos Flotantes', html: '<div class="card relative overflow-hidden flex items-center justify-center"><div class="floating-shapes"></div><h3 class="relative text-2xl font-bold">Flotante</h3></div>', css: '.floating-shapes { ... }' },
    { name: 'Fondo Aurora', html: '<div class="card card-background-aurora flex justify-center items-center"><h3 class="text-xl font-bold">Fondo Aurora</h3></div>', css: '.card-background-aurora { ... }' },
    { name: 'Pixel Sort', html: '<div class="card card-pixel-sort"><img src="https://placehold.co/220x280/a78bfa/FFFFFF?text=Imagen" class="w-full h-full object-cover" onerror="this.onerror=null;this.src=\'https://placehold.co/220x280/a78bfa/FFFFFF?text=Error\'"></div>', css: '.card-pixel-sort:hover img { filter: url(#pixel-sort-filter); }' },
    { name: 'Gooey Hover', html: '<div class="card card-gooey-hover flex justify-center items-center"><div class="gooey-blob w-16 h-16"></div><h3 class="absolute text-xl font-bold">Gooey</h3></div>', css: '.card-gooey-hover { ... } /* Requiere SVG */' },
    { name: 'Foco en Texto', html: '<div class="card card-text-focus p-4 flex flex-col justify-center items-center text-center"><p class="unfocused">Pasa el cursor</p><h3 class="focused text-2xl font-bold text-sky-400">AQUÍ</h3><p class="unfocused">para enfocar</p></div>', css: '.card-text-focus { ... }' },
    { name: 'Ventana Recortada', html: '<div class="card card-cutout-window"><div class="window w-full h-full bg-cover" style="background-image: url(\'https://placehold.co/320x280/ec4899/FFFFFF?text=Interior\')"></div></div>', css: '.card-cutout-window { ... }' },
    { name: 'Rastro de Imagen', html: '<div class="card card-image-trail flex justify-center items-center"><img src="https://placehold.co/100x100/34d399/FFFFFF?text=ICON" class="trail-img w-24 h-24" onerror="this.onerror=null;this.src=\'https://placehold.co/100x100/34d399/FFFFFF?text=Error\'"><img src="https://placehold.co/100x100/34d399/FFFFFF?text=ICON" class="trail-img w-24 h-24" onerror="this.onerror=null;this.src=\'https://placehold.co/100x100/34d399/FFFFFF?text=Error\'"><img src="https://placehold.co/100x100/34d399/FFFFFF?text=ICON" class="w-24 h-24 relative" onerror="this.onerror=null;this.src=\'https://placehold.co/100x100/34d399/FFFFFF?text=Error\'"></div>', css: '.card-image-trail { ... }' },
    { name: 'Rejilla Revelada', html: '<div class="card card-grid-reveal grid grid-cols-5 grid-rows-5 p-0"><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div></div>', css: '.card-grid-reveal { ... }' },
    { name: 'Texto Perspectiva', html: '<div class="card card-perspective-text flex justify-center items-center"><h3 class="text-3xl font-black">Perspectiva</h3></div>', css: '.card-perspective-text { ... }' },
    { name: 'Preview Video', html: '<div class="card card-video-preview p-0"><video autoplay loop muted class="w-full h-full object-cover" style="filter: grayscale(100%) blur(5px);"><source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"></video></div>', css: '.card-video-preview { ... }' },

    // --- NUEVOS EFECTOS TECNOLÓGICOS ---
    { 
        name: 'Texto con Glitch', 
        html: '<div class="glitch-text" data-text="FUTURO">FUTURO</div>',
        css: ".glitch-text { ... } /* Añadido a styles.css */"
    },
    { 
        name: 'Orbe Pulsante', 
        html: '<div class="pulsing-orb"></div>',
        css: ".pulsing-orb { ... } /* Añadido a styles.css */"
    },
    { 
        name: 'Tarjeta 3D Interactiva', 
        html: '<div class="card-3d-container"><div class="card-3d"><div class="card-3d-content">3D</div></div></div>',
        css: ".card-3d-container { ... } /* Añadido a styles.css */",
        js: "// Requiere JS para el seguimiento del ratón. Está en main.js"
    },
    { 
        name: 'Botón Holográfico', 
        html: '<button class="holographic-btn">Holograma</button>',
        css: ".holographic-btn { ... } /* Añadido a styles.css */"
    },
    { 
        name: 'Rejilla con Escáner', 
        html: '<div class="scanning-grid"></div>',
        css: ".scanning-grid { ... } /* Añadido a styles.css */"
    },
    { 
        name: 'Cubos Flotantes 3D', 
        html: '<div class="cubes-container"><div class="cube"><div class="face front"></div><div class="face back"></div><div class="face right"></div><div class="face left"></div><div class="face top"></div><div class="face bottom"></div></div></div>',
        css: ".cubes-container { ... } /* Añadido a styles.css */"
    },
    { 
        name: 'Visualizador de Audio', 
        html: '<div class="visualizer"><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div></div>',
        css: ".visualizer { ... } /* Añadido a styles.css */"
    },
    { 
        name: 'Interruptor Futurista', 
        html: '<div class="switch-container"><label for="tech-switch-demo">ESTADO</label><label class="switch"><input type="checkbox" id="tech-switch-demo"><span class="slider"></span></label></div>',
        css: ".switch-container { ... } /* Añadido a styles.css */"
    }
];

export const certificationsData = [
    { title: 'Backend con Node.js: Base de Datos con PostgreSQL', issuer: 'Platzi', date: 'Jul 2025' },
    { title: 'MLOPS: Despliegue de Modelos de Machine Learning', issuer: 'Platzi', date: 'Jul 2025' },
    { title: 'Network Addressing and Basic Troubleshooting', issuer: 'Cisco', date: 'Ene 2025' },
    { title: 'Network Support and Security', issuer: 'Cisco', date: 'Ene 2025' },
    { title: 'Estadística Inferencial para Data Science e IA', issuer: 'Platzi', date: 'Nov 2023' },
    { title: 'Presupuesto y Flujo de Caja', issuer: 'Platzi', date: 'Nov 2023' },
    { title: 'Redes Neuronales con PyTorch', issuer: 'Platzi', date: 'Nov 2023' },
    { title: 'Economía y Finanzas: Indicadores Económicos', issuer: 'Platzi', date: 'Mar 2023' },
    { title: 'Hacking Ético', issuer: 'Platzi', date: 'Mar 2023' },
    { title: 'Cómo y Por Qué Aprender Data Science e IA', issuer: 'Platzi', date: 'Feb 2023' },
    { title: 'Manipulación de Datos con Pandas y NumPy', issuer: 'Platzi', date: 'Ene 2023' },
    { title: 'Curso Práctico de SQL', issuer: 'Platzi', date: 'Ene 2023' },
    { title: 'Análisis de Datos con Power BI', issuer: 'Platzi', date: 'Ene 2023' },
    { title: 'Excel Financiero', issuer: 'Platzi', date: 'Ene 2023' },
    { title: 'Análisis de Negocios para Ciencia de Datos', issuer: 'Platzi', date: 'Nov 2022' },
    { title: 'Excel Básico', issuer: 'Platzi', date: 'Nov 2022' },
    { title: 'Introducción a Excel', issuer: 'Platzi', date: 'Nov 2022' },
    { title: 'Ética y Manejo de Datos para Data Science e IA', issuer: 'Platzi', date: 'Nov 2022' },
    { title: 'Fundamentos de Python', issuer: 'Platzi', date: 'Oct 2022' },
];

export const charts = [
    {
        name: "Gráfico de Barras",
        config: {
            type: 'bar',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
                datasets: [{
                    label: 'Ventas 2025',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: { scales: { y: { beginAtZero: true } }, maintainAspectRatio: false, plugins: { legend: { labels: { color: '#f3f4f6' } } } }
        }
    },
    {
        name: "Gráfico de Líneas",
        config: {
            type: 'line',
            data: {
                labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
                datasets: [{
                    label: 'Usuarios Activos',
                    data: [30, 45, 38, 52, 60],
                    fill: false,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    tension: 0.1
                }]
            },
            options: { maintainAspectRatio: false, plugins: { legend: { labels: { color: '#f3f4f6' } } } }
        }
    },
    {
        name: "Gráfico de Torta (Pie)",
        config: {
            type: 'pie',
            data: {
                labels: ['Marketing', 'Ventas', 'Desarrollo'],
                datasets: [{
                    data: [300, 50, 100],
                    backgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 206, 86, 0.8)'],
                }]
            },
            options: { maintainAspectRatio: false, plugins: { legend: { labels: { color: '#f3f4f6' } } } }
        }
    },
    {
        name: "Gráfico de Anillo (Doughnut)",
        config: {
            type: 'doughnut',
            data: {
                labels: ['Desktop', 'Móvil', 'Tablet'],
                datasets: [{
                    data: [55, 35, 10],
                    backgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(153, 102, 255, 0.8)', 'rgba(255, 159, 64, 0.8)'],
                }]
            },
            options: { maintainAspectRatio: false, plugins: { legend: { labels: { color: '#f3f4f6' } } } }
        }
    },
    {
        name: "Gráfico Radar",
        config: {
            type: 'radar',
            data: {
                labels: ['Comunicación', 'Trabajo en Equipo', 'Liderazgo', 'Resolución de Problemas', 'Creatividad'],
                datasets: [{
                    label: 'Habilidades',
                    data: [9, 7, 6, 8, 9],
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                }]
            },
            options: { maintainAspectRatio: false, plugins: { legend: { labels: { color: '#f3f4f6' } } } }
        }
    },
    {
        name: "Gráfico de Área Polar",
        config: {
            type: 'polarArea',
            data: {
                labels: ['Python', 'JavaScript', 'SQL', 'CSS', 'HTML'],
                datasets: [{
                    label: 'Uso de Tecnologías',
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(255, 205, 86, 0.5)', 'rgba(201, 203, 207, 0.5)', 'rgba(54, 162, 235, 0.5)']
                }]
            },
            options: { maintainAspectRatio: false, plugins: { legend: { labels: { color: '#f3f4f6' } } } }
        }
    },
    {
        name: "Gráfico de Burbujas",
        config: {
            type: 'bubble',
            data: {
                datasets: [{
                    label: 'Inversión vs. Retorno',
                    data: [{x: 20, y: 30, r: 15}, {x: 40, y: 10, r: 10}, {x: 32, y: 25, r: 8}, {x: 15, y: 45, r: 20}],
                    backgroundColor: 'rgba(255, 99, 132, 0.6)'
                }]
            },
            options: { maintainAspectRatio: false, plugins: { legend: { labels: { color: '#f3f4f6' } } } }
        }
    },
    {
        name: "Gráfico de Dispersión (Scatter)",
        config: {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Edad vs. Ingresos',
                    data: [{x: 25, y: 50}, {x: 30, y: 65}, {x: 35, y: 80}, {x: 40, y: 75}, {x: 45, y: 95}],
                    backgroundColor: 'rgba(75, 192, 192, 0.6)'
                }]
            },
            options: { scales: { x: { type: 'linear', position: 'bottom' } }, maintainAspectRatio: false, plugins: { legend: { labels: { color: '#f3f4f6' } } } }
        }
    },
    {
        name: "Gráfico de Barras Apiladas",
        config: {
            type: 'bar',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [
                    { label: 'Producto A', data: [10, 20, 30, 40], backgroundColor: 'rgba(255, 99, 132, 0.5)' },
                    { label: 'Producto B', data: [15, 25, 35, 45], backgroundColor: 'rgba(54, 162, 235, 0.5)' }
                ]
            },
            options: { scales: { x: { stacked: true }, y: { stacked: true } }, maintainAspectRatio: false, plugins: { legend: { labels: { color: '#f3f4f6' } } } }
        }
    },
    {
        name: "Gráfico Mixto (Línea y Barras)",
        config: {
            type: 'bar',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr'],
                datasets: [
                    { type: 'bar', label: 'Ventas (Unidades)', data: [50, 60, 70, 80], backgroundColor: 'rgba(75, 192, 192, 0.5)' },
                    { type: 'line', label: 'Objetivo', data: [55, 65, 75, 85], fill: false, borderColor: 'rgb(255, 99, 132)' }
                ]
            },
            options: { maintainAspectRatio: false, plugins: { legend: { labels: { color: '#f3f4f6' } } } }
        }
    }
];
