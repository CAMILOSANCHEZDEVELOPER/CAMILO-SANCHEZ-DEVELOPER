// Importamos los datos desde nuestro archivo separado
import { fonts, titleEffects, buttons, socialButtons, effects, certificationsData, charts } from './gallery-data.js';

// Cuando todo el HTML esté cargado, ejecutamos el código.
document.addEventListener('DOMContentLoaded', () => {

    // --- Color Picker Logic ---
    const colorWheelContainer = document.getElementById('color-wheel-container');
    if (colorWheelContainer) {
        const canvas = document.getElementById('color-wheel');
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        const indicator = document.getElementById('color-picker-indicator');
        const hexInput = document.getElementById('hex-input');
        const rgbInput = document.getElementById('rgb-input');
        const hslInput = document.getElementById('hsl-input');
        const colorPreview = document.getElementById('color-preview');
        let isDragging = false;

        function drawColorWheel() {
            const radius = canvas.width / 2;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Hue circle
            for (let angle = 0; angle < 360; angle++) {
                const startAngle = (angle - 1) * Math.PI / 180;
                const endAngle = angle * Math.PI / 180;
                ctx.beginPath();
                ctx.moveTo(radius, radius);
                ctx.arc(radius, radius, radius, startAngle, endAngle);
                ctx.closePath();
                ctx.fillStyle = `hsl(${angle}, 100%, 50%)`;
                ctx.fill();
            }

            // Saturation gradient (white to transparent)
            const satGradient = ctx.createRadialGradient(radius, radius, 0, radius, radius, radius);
            satGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            satGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = satGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Lightness gradient (black to transparent)
            const lightGradient = ctx.createRadialGradient(radius, radius, radius, radius, radius, radius);
            lightGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
            lightGradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
            ctx.fillStyle = lightGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        function updateColor(x, y) {
            const imageData = ctx.getImageData(x, y, 1, 1).data;
            if (imageData[3] === 0) return; // Ignore transparent areas outside the circle
            
            const [r, g, b] = imageData;
            const hex = rgbToHex(r, g, b);
            const hsl = rgbToHsl(r, g, b);
            
            colorPreview.style.backgroundColor = hex;
            hexInput.value = hex;
            rgbInput.value = `rgb(${r}, ${g}, ${b})`;
            hslInput.value = `hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%)`;

            indicator.style.left = `${(x / canvas.width) * 100}%`;
            indicator.style.top = `${(y / canvas.height) * 100}%`;
        }

        function handlePickerEvent(e) {
            e.preventDefault();
            const rect = canvas.getBoundingClientRect();
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            const x = ((e.clientX || e.touches[0].clientX) - rect.left) * scaleX;
            const y = ((e.clientY || e.touches[0].clientY) - rect.top) * scaleY;
            const radius = canvas.width / 2;
            const dist = Math.sqrt((x - radius) ** 2 + (y - radius) ** 2);

            if (dist <= radius) {
                updateColor(x, y);
            }
        }
        
        colorWheelContainer.addEventListener('mousedown', (e) => { isDragging = true; handlePickerEvent(e); });
        colorWheelContainer.addEventListener('mousemove', (e) => { if (isDragging) handlePickerEvent(e); });
        document.addEventListener('mouseup', () => { isDragging = false; });
        
        colorWheelContainer.addEventListener('touchstart', (e) => { isDragging = true; handlePickerEvent(e); });
        colorWheelContainer.addEventListener('touchmove', (e) => { if (isDragging) handlePickerEvent(e); });
        colorWheelContainer.addEventListener('touchend', () => { isDragging = false; });

        const observer = new ResizeObserver(entries => {
            const entry = entries[0];
            const dpr = window.devicePixelRatio || 1;
            const size = entry.contentRect.width;
            canvas.width = size * dpr;
            canvas.height = size * dpr;
            canvas.style.width = `${size}px`;
            canvas.style.height = `${size}px`;
            
            drawColorWheel();
            updateColor(canvas.width / 2, canvas.height / 2);
        });
        observer.observe(colorWheelContainer);
    }

    function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    }
    function rgbToHsl(r, g, b) {
        r /= 255, g /= 255, b /= 255;
        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max == min) { h = s = 0; } 
        else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return { h: h * 360, s: s * 100, l: l * 100 };
    }

    // --- Chart Gallery Logic ---
    function renderChart(chartItem, index) {
        const wrapper = document.createElement('div');
        wrapper.className = 'component-display';
        wrapper.setAttribute('data-name', chartItem.name.toLowerCase());

        const chartContainer = document.createElement('div');
        chartContainer.className = 'relative h-64 w-full mb-4';
        const canvas = document.createElement('canvas');
        const canvasId = `chart-${index}`;
        canvas.id = canvasId;
        chartContainer.appendChild(canvas);
        
        Chart.defaults.color = '#9ca3af';
        Chart.defaults.borderColor = '#374151';

        new Chart(canvas.getContext('2d'), chartItem.config);

        const code = `<canvas id="${canvasId}" width="400" height="200"></canvas>

<script>
    const ctx = document.getElementById('${canvasId}').getContext('2d');
    const myChart = new Chart(ctx, ${JSON.stringify(chartItem.config, null, 2)});
<\/script>`;

        wrapper.innerHTML = `
            <div class="flex-grow flex flex-col items-center justify-center p-2">
                <h4 class="text-md font-bold text-purple-400 mb-4 text-center">${index + 1}. ${chartItem.name}</h4>
            </div>
            <div class="text-right mt-4">
                <button class="copy-btn text-sm font-semibold py-2 px-4 rounded-md"><i class="fas fa-code mr-2"></i>Ver Código</button>
            </div>
            <pre class="code-snippet"><code>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        `;
        wrapper.insertBefore(chartContainer, wrapper.children[0]);
        return wrapper;
    }

    // --- General Gallery Logic ---
    function populateGallery(containerId, items, renderFn) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = '';
        items.forEach((item, index) => { container.appendChild(renderFn(item, index)); });
    }

    function createComponentDisplay(item, index, renderContentFn) {
        const wrapper = document.createElement('div');
        wrapper.className = 'component-display';
        wrapper.setAttribute('data-name', item.name.toLowerCase());

        const content = renderContentFn(item);
        let code = `\n${item.html || content}`;
        if (item.css) code += `\n\n\n<style>\n${item.css}\n</style>`;
        if (item.import) code = `\n<link href="${item.import.split("'")[1]}" rel="stylesheet">\n\n${code}`;

        wrapper.innerHTML = `
            <div class="flex-grow flex flex-col items-center justify-center p-2">
                <h4 class="text-md font-bold text-purple-400 mb-2 text-center">${index + 1}. ${item.name}</h4>
                ${content}
            </div>
            <div class="text-right mt-4">
                <button class="copy-btn text-sm font-semibold py-2 px-4 rounded-md"><i class="fas fa-code mr-2"></i>Ver Código</button>
            </div>
            <pre class="code-snippet"><code>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        `;
        return wrapper;
    }

    const renderFont = (font, index) => createComponentDisplay(font, index, item => `<p class="text-2xl text-center" style="${item.style}">${item.name}</p>`);
    
    const renderTitleEffect = (effect, index) => {
        let finalHtml = effect.html.replace(/TITULO DE PRUEBA/g, effect.name.toUpperCase());
        finalHtml = finalHtml.replace(/data-text="[^"]*"/, `data-text="${effect.name.toUpperCase()}"`);
        
        if (['Ondulado', 'Sombra Pop', 'Split Flap', 'Cinético', 'Estirado'].includes(effect.name)) {
            const text = effect.name.toUpperCase();
            const wrappedText = text.split('').map((letter, i) => `<span style="--i:${i}" data-text="${letter}">${letter === ' ' ? '&nbsp;' : letter}</span>`).join('');
            const wrapperClass = {
                'Ondulado': 'title-wavy-effect',
                'Sombra Pop': 'title-text-shadow-pop',
                'Split Flap': 'title-split-flap',
                'Cinético': 'title-kinetic',
                'Estirado': 'title-stretch'
            }[effect.name];
            finalHtml = `<div class="title-effect-wrapper"><h2 class="${wrapperClass}">${wrappedText}</h2></div>`;
        }
        return createComponentDisplay(effect, index, item => finalHtml);
    };
    
    const renderButton = (button, index) => createComponentDisplay(button, index, item => item.html);
    const renderEffect = (effect, index) => createComponentDisplay(effect, index, item => item.html);

    populateGallery('typography-gallery', fonts, renderFont);
    populateGallery('title-effects-gallery', titleEffects, renderTitleEffect);
    populateGallery('buttons-gallery', buttons, renderButton);
    populateGallery('effects-gallery', effects, renderEffect);
    populateGallery('charts-gallery', charts, renderChart);
    populateGallery('social-buttons-gallery', socialButtons, renderButton);

    function setupSearch(inputId, galleryId) {
        const searchInput = document.getElementById(inputId);
        const gallery = document.getElementById(galleryId);
        if (!searchInput || !gallery) return;

        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const items = gallery.querySelectorAll('.component-display');
            items.forEach(item => {
                const name = item.getAttribute('data-name');
                if (name.includes(searchTerm)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    setupSearch('search-typography', 'typography-gallery');
    setupSearch('search-title-effects', 'title-effects-gallery');
    setupSearch('search-effects', 'effects-gallery');
    setupSearch('search-buttons', 'buttons-gallery');
    setupSearch('search-charts', 'charts-gallery');
    setupSearch('search-social-buttons', 'social-buttons-gallery');

    const galleryContainer = document.getElementById('component-gallery');
    galleryContainer.addEventListener('click', function(e) {
        const btn = e.target.closest('.copy-btn');
        if (btn) {
            const snippet = btn.closest('.component-display').querySelector('.code-snippet');
            snippet.classList.toggle('show');
            
            if (snippet.classList.contains('show')) {
                const codeText = snippet.querySelector('code').innerText;
                 try {
                     const tempTextArea = document.createElement('textarea');
                     tempTextArea.value = codeText;
                     document.body.appendChild(tempTextArea);
                     tempTextArea.select();
                     document.execCommand('copy');
                     document.body.removeChild(tempTextArea);
                     
                     const originalText = btn.innerHTML;
                     btn.innerHTML = '<i class="fas fa-check mr-2"></i>¡Copiado!';
                     btn.classList.add('copied');
                     setTimeout(() => {
                         btn.innerHTML = originalText;
                         btn.classList.remove('copied');
                     }, 2000);
                 } catch (err) {
                     console.error('Error al copiar el código: ', err);
                 }
            }
        }
    });
    
    const certificationsContainer = document.getElementById('certifications');
    const certModal = document.getElementById('certification-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.getElementById('close-modal-btn');

    certificationsData.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'card card-lift flex flex-col justify-between items-center p-6 text-center cursor-pointer';
        card.innerHTML = `
            <div>
                <i class="fas fa-award fa-3x mb-4 text-amber-400"></i>
                <h3 class="text-lg font-bold text-white">${cert.title}</h3>
                <p class="text-gray-400 mt-2">${cert.issuer}</p>
            </div>
            <p class="text-sm text-gray-500 font-medium mt-4">Exp: ${cert.date}</p>
        `;
        
        card.addEventListener('click', () => {
            modalBody.innerHTML = `
                <img src="https://placehold.co/400x250/1f2937/FFFFFF?text=Certificado" alt="Certificado de ${cert.title}" class="rounded-lg mx-auto mb-4 w-full max-w-xs" onerror="this.onerror=null;this.src='https://placehold.co/400x250/1f2937/FFFFFF?text=Error'">
                <h3 class="text-2xl font-bold section-title mb-2">${cert.title}</h3>
                <p class="text-lg text-gray-300 mb-4">${cert.issuer} - ${cert.date}</p>
                <p class="text-gray-400 mb-4">ID de credencial disponible bajo petición.</p>
            `;
            certModal.classList.remove('opacity-0', 'pointer-events-none');
            certModal.querySelector('.modal-content').classList.remove('scale-95');
        });
        certificationsContainer.appendChild(card);
    });

    function closeCertModal() {
        certModal.classList.add('opacity-0', 'pointer-events-none');
        certModal.querySelector('.modal-content').classList.add('scale-95');
    }

    closeModalBtn.addEventListener('click', closeCertModal);
    certModal.addEventListener('click', (e) => {
        if (e.target === certModal) { closeCertModal(); }
    });

    // Login Modal Logic
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    const closeLoginModalBtn = document.getElementById('close-login-modal-btn');

    function openLoginModal() {
        loginModal.classList.remove('opacity-0', 'pointer-events-none');
        loginModal.querySelector('.modal-content').classList.remove('scale-95');
    }
    function closeLoginModal() {
        loginModal.classList.add('opacity-0', 'pointer-events-none');
        loginModal.querySelector('.modal-content').classList.add('scale-95');
    }

    loginBtn.addEventListener('click', openLoginModal);
    closeLoginModalBtn.addEventListener('click', closeLoginModal);
    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) { closeLoginModal(); }
    });

    
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        @keyframes anim1 { 0% { left: -100%; } 50%, 100% { left: 100%; } }
        @keyframes anim2 { 0% { top: -100%; } 50%, 100% { top: 100%; } }
        @keyframes anim3 { 0% { right: -100%; } 50%, 100% { right: 100%; } }
        @keyframes anim4 { 0% { bottom: -100%; } 50%, 100% { bottom: 100%; } }
        @keyframes shake-animation { 10%, 90% { transform: translate3d(-1px, 0, 0); } 20%, 80% { transform: translate3d(2px, 0, 0); } 30%, 50%, 70% { transform: translate3d(-4px, 0, 0); } 40%, 60% { transform: translate3d(4px, 0, 0); } }
        @keyframes glitch-anim { 0% { clip: rect(44px, 9999px, 45px, 0); } 100% { clip: rect(42px, 9999px, 43px, 0); } }
    `;
    document.head.appendChild(styleSheet);

    // JS for interactive components
    document.querySelectorAll('.card-spotlight-follow').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--x', e.clientX - rect.left + 'px');
            card.style.setProperty('--y', e.clientY - rect.top + 'px');
        });
    });

    document.querySelectorAll('.card-particles').forEach(canvas => {
        const ctx = canvas.getContext('2d');
        let particles = [];
        const options = { particleColor: "rgba(167, 139, 250, 0.7)", lineColor: "rgba(167, 139, 250, 0.3)", particleAmount: 50, defaultRadius: 2, variantRadius: 2, defaultSpeed: 0.5, variantSpeed: 0.5, linkRadius: 100, };
        function resizeCanvas() { const rect = canvas.parentElement.getBoundingClientRect(); canvas.width = rect.width; canvas.height = rect.height; }
        function createParticles() {
            particles = [];
            for (let i = 0; i < options.particleAmount; i++) {
                particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: options.defaultRadius + Math.random() * options.variantRadius, speedX: (Math.random() - 0.5) * options.defaultSpeed, speedY: (Math.random() - 0.5) * options.defaultSpeed, });
            }
        }
        function drawParticles() { particles.forEach(p => { ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2); ctx.fillStyle = options.particleColor; ctx.fill(); }); }
        function updateParticles() { particles.forEach(p => { p.x += p.speedX; p.y += p.speedY; if (p.x < 0 || p.x > canvas.width) p.speedX *= -1; if (p.y < 0 || p.y > canvas.height) p.speedY *= -1; }); }
        function linkParticles() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x; const dy = particles[i].y - particles[j].y; const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < options.linkRadius) { ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.strokeStyle = options.lineColor; ctx.lineWidth = 1; ctx.stroke(); }
                }
            }
        }
        function animate() { ctx.clearRect(0, 0, canvas.width, canvas.height); updateParticles(); drawParticles(); linkParticles(); requestAnimationFrame(animate); }
        const observer = new ResizeObserver(() => { resizeCanvas(); createParticles(); });
        observer.observe(canvas.parentElement);
        animate();
    });
    
    // Reveal title JS
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target.querySelector('[data-reveal]');
                if(target) target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-reveal]').forEach(el => {
        el.style.transform = 'translateY(100%)';
        revealObserver.observe(el.parentElement);
    });
    // Magnetic Tilt JS
    document.querySelectorAll('.card-magnetic-tilt').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const { width, height } = rect;
            const rotateX = (y / height - 0.5) * -30; // Max 15 deg tilt
            const rotateY = (x / width - 0.5) * 30;  // Max 15 deg tilt
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
    
    // Interactive buttons JS
    document.addEventListener('click', e => {
        // Button Loading
        if (e.target.closest('.btn-loading')) {
            const btn = e.target.closest('.btn-loading');
            if (btn.classList.contains('loading')) return;
            btn.classList.add('loading');
            const textEl = btn.querySelector('.btn-text');
            textEl.textContent = 'Cargando...';
            setTimeout(() => {
                btn.classList.remove('loading');
                textEl.textContent = 'Cargar';
            }, 2000);
        }
        // Button Switch
        if (e.target.closest('.btn-switch')) {
            const btn = e.target.closest('.btn-switch');
            btn.classList.toggle('active');
            const span = btn.querySelector('span');
            if (btn.classList.contains('active')) {
                span.style.transform = 'translateX(2rem)';
                btn.style.backgroundColor = '#22c55e';
            } else {
                span.style.transform = 'translateX(0)';
                btn.style.backgroundColor = '#4b5563';
            }
        }
    });
    
    // Bubble Button
    document.querySelectorAll('.btn-bubble').forEach(button => {
        button.addEventListener('click', e => {
            let rect = button.getBoundingClientRect(); let x = e.clientX - rect.left; let y = e.clientY - rect.top;
            let bubble = document.createElement('span');
            bubble.style.left = x + 'px'; bubble.style.top = y + 'px';
            bubble.className = 'absolute w-1 h-1 bg-white/50 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-bubble';
            button.appendChild(bubble);
            setTimeout(() => { bubble.remove(); }, 1000);
        });
    });

    // Ink button
    document.querySelectorAll('.btn-ink').forEach(button => {
        button.addEventListener('click', e => {
            let rect = button.getBoundingClientRect(); let x = e.clientX - rect.left; let y = e.clientY - rect.top;
            let ink = document.createElement('span');
            ink.style.left = x + 'px'; ink.style.top = y + 'px';
            ink.className = 'btn-ink-effect';
            button.appendChild(ink);
            setTimeout(() => ink.remove(), 600);
        });
    });

    // Scramble Text Title Effect
    document.querySelectorAll('[data-scramble-text]').forEach(el => {
        const originalText = el.textContent;
        const chars = '!<>-_\\/[]{}—=+*^?#________';
        let interval;

        el.addEventListener('mouseover', () => {
            let iteration = 0;
            clearInterval(interval);
            interval = setInterval(() => {
                el.textContent = originalText.split('')
                    .map((letter, index) => {
                        if(index < iteration) {
                            return originalText[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('');
                if(iteration >= originalText.length){
                    clearInterval(interval);
                }
                iteration += 1 / 3;
            }, 30);
        });
    });

    // --- Payment Form Logic ---
    const cardUiContainer = document.getElementById('card-ui-container');
    const cardNumberInput = document.getElementById('card-number-input');
    const cardNameInput = document.getElementById('card-name-input');
    const cardExpiryInput = document.getElementById('card-expiry-input');
    const cardCvvInput = document.getElementById('card-cvv-input');
    const amountInput = document.getElementById('amount-input');
    const confirmPaymentBtn = document.getElementById('confirm-payment-btn').querySelector('span');

    const cardUiNumber = document.getElementById('card-ui-number');
    const cardUiName = document.getElementById('card-ui-name');
    const cardUiExpiry = document.getElementById('card-ui-expiry');
    const cardUiCvv = document.getElementById('card-ui-cvv');
    const cardBrandIcon = document.getElementById('card-brand-icon');

    function updatePaymentButtonAmount() {
        const amount = parseFloat(amountInput.value);
        if (isNaN(amount) || amount <= 0) {
            confirmPaymentBtn.textContent = 'Confirmar y Pagar';
        } else {
            confirmPaymentBtn.textContent = `Confirmar y Pagar $${amount.toFixed(2)}`;
        }
    }
    
    amountInput.addEventListener('input', updatePaymentButtonAmount);
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            amountInput.value = btn.dataset.amount;
            updatePaymentButtonAmount();
        });
    });


    // Update Name
    cardNameInput.addEventListener('input', (e) => {
        const name = e.target.value.toUpperCase();
        cardUiName.textContent = name || 'NOMBRE COMPLETO';
    });

    // Update Card Number
    cardNumberInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        value = value.replace(/(.{4})/g, '$1 ').trim(); // Add spaces every 4 digits
        e.target.value = value;
        cardUiNumber.textContent = value || '#### #### #### ####';
        
        // Update card brand icon
        if (/^4/.test(value)) {
            cardBrandIcon.className = 'fab fa-cc-visa card-brand-icon';
        } else if (/^5[1-5]/.test(value)) {
            cardBrandIcon.className = 'fab fa-cc-mastercard card-brand-icon';
        } else if (/^3[47]/.test(value)) {
            cardBrandIcon.className = 'fab fa-cc-amex card-brand-icon';
        } else {
            cardBrandIcon.className = 'fas fa-credit-card card-brand-icon';
        }
    });

    // Update Expiry
    cardExpiryInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4);
        }
        e.target.value = value;
        cardUiExpiry.textContent = value || 'MM/YY';
    });
    
    // Update CVV and flip card
    cardCvvInput.addEventListener('focus', () => {
        cardUiContainer.classList.add('flipped');
    });
    cardCvvInput.addEventListener('blur', () => {
        cardUiContainer.classList.remove('flipped');
    });
    cardCvvInput.addEventListener('input', (e) => {
        cardUiCvv.textContent = e.target.value;
    });

    // Initialize payment button text
    updatePaymentButtonAmount();
});
