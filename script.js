const mainContent = document.getElementById('main-content');
const languageButtons = document.querySelectorAll('#language-selector button');
const togglePersonaButton = document.getElementById('toggle-persona');
const stellapawSection = document.getElementById('stellapaw-section');
const yukirlySection = document.getElementById('yukirly-section');
const viewImagesButton = document.getElementById('view-stellapaw-images');
const backToProfileButton = document.getElementById('back-to-profile');
const stellapawInfoSection = document.querySelector('#stellapaw-section .stellapaw-info');
const stellapawGallerySection = document.getElementById('stellapaw-gallery-section');
const playButtonContainer = document.getElementById('play-button-container');
const featuredVideo = document.getElementById('featured-video');
const volumeControl = document.getElementById('volume-control');
const playButtonContainer2 = document.getElementById('play-button-container-2');
const featuredVideo2 = document.getElementById('featured-video-2');
const volumeControl2 = document.getElementById('volume-control-2');
const yukirlyTabContents = document.querySelectorAll('#yukirly-section .tab-content');
const playPauseButton1 = document.getElementById('play-pause-button-1');
const playPauseButton2 = document.getElementById('play-pause-button-2');

let currentPersona = 'stellapaw';
let currentLang = 'zh-tw';
const translations = {
    'stellapaw-title': { 'vi': 'Stellapaw', 'en': 'Stellapaw', 'zh-tw': '史黛拉帕' },
    'yukirly-title': { 'vi': 'Về Yukirly', 'en': "Yukirly's Corner", 'zh-tw': '關於Yukirly醬' },
    'toggle-persona-stellapaw': { 'vi': 'Gặp gỡ Yukirly', 'en': 'Switch to Yukirly! ✨', 'zh-tw': '變身Yukirly！🌸' },
    'toggle-persona-yukirly': { 'vi': 'Về lại Stellapaw', 'en': 'Back to Stellapaw 🐺', 'zh-tw': '回歸史黛拉帕 🌘' },
    'home-tab': { 'vi': 'Trang chủ', 'en': 'Home', 'zh-tw': '首頁' },
    'origin-title': { 'vi': 'Nguồn Gốc Bí Ẩn', 'en': 'Her Story Unveiled', 'zh-tw': '神秘起源大揭密' },
    'personality-title': { 'vi': 'Tính Cách Đặc Trưng', 'en': 'The Vibe She Gives', 'zh-tw': '人設大解析' },
    'appearance-title': { 'vi': 'Ngoại Hình Ấn Tượng', 'en': 'Her Look 👀', 'zh-tw': '顏值爆表' },
    'outfit-title': { 'vi': 'Trang Phục Thường Ngày', 'en': 'OOTD Inspo', 'zh-tw': '私服穿搭秀' },
    'stellapaw-origin': {
        'vi': 'Đến từ một thế giới thần thoại bí ẩn, Stellapaw là một sinh vật sở hữu sức mạnh áp đảo, có khả năng khuất phục bất kỳ ai chỉ bằng một cái chạm nhẹ, thậm chí không cần đến toàn bộ năng lực thật sự. Cô từng cai trị vùng đất của riêng mình ở thế giới khác trước khi được tổ chức Aurora bí mật đưa đến thế giới loài người thông qua một thỏa thuận ngầm. Ẩn sau vẻ ngoài dễ thương và chiều cao khiêm tốn 1m55 là một bản chất lạnh lùng đến đáng sợ.',
        'en': "From a realm words can't describe, Stellapaw packs a punch – a light touch is all it takes, no full power needed. She was a queen in her own world 'til the Aurora org sneakily brought her here. That cute 155cm look? Hides a scarily cold core. 🤫",
        'zh-tw': '來自神秘的異世界，史黛拉帕醬可是個隱藏大佬！輕輕一碰就能KO對手，根本不用開大絕。以前在自己的地盤當女王，後來被奧羅拉組織秘密接到人類世界。別看她155cm萌萌噠，骨子裡可是冰山一座，怕爆！🥶'
    },
    'stellapaw-personality': {
        'vi': 'Stellapaw mang trong mình một tính cách phức tạp: tàn bạo, lạnh lùng và dường như không coi trọng sự sống của bất kỳ ai.',
        'en': "Stellapaw's a tough cookie: ruthless, ice-cold, and kinda doesn't care 'bout anyone's life. Total anti-hero vibes. 😈",
        'zh-tw': '史黛拉帕的個性有點複雜…簡單說就是：殘暴、冷血，別人的命？她才不管咧！🤷‍♀️ 標準的反派氣場。'
    },
    'stellapaw-appearance': {
        'vi': 'Với chiều cao khiêm tốn 1m55, Stellapaw hiện thân là một nàng sói mang dáng vẻ con người với mái tóc trắng pha lẫn màu xanh dương huyền ảo và đôi mắt xanh băng giá. Đặc trưng của tộc Ice Wolf, cô sở hữu đôi tai sói dài vểnh lên và một chiếc đuôi sói dài có màu trắng pha chút xanh dương, hài hòa với mái tóc của mình.',
        'en': "She's a petite 155cm, but a total wolf-girl! Think ethereal white hair with mystical blue streaks and icy blue eyes. True to her Ice Wolf tribe, she's got those long, perky wolf ears and a fluffy tail to match – white with a hint of blue, just like her hair. So cool! ❄️",
        'zh-tw': '身高155cm的小隻馬，史黛拉帕是個狼系美少女！夢幻的白髮中帶點神秘藍，配上冰藍色的雙瞳。身為冰狼族，那對長長的狼耳跟毛茸茸的狼尾巴是標配啦～顏色也是跟頭髮一樣的白藍漸層，超搭！🐺💙'
    },
    'stellapaw-outfit': {
        'vi': 'Trang phục thường ngày của cô là một chiếc áo crop-top màu trắng hở eo và vai, viền xanh đậm, kết hợp với váy ngắn xếp ly màu xanh đậm, đôi khi có thêm lớp vải trắng bên dưới. Cô thường mang găng tay không ngón màu đen hoặc xanh đậm và một chiếc thắt lưng cá tính.',
        'en': "Her go-to? A white crop top (hello waist & shoulders!) with dark blue trim, paired with a dark blue pleated mini. Sometimes she layers a white fabric underneath. Tops it off with black or dark blue fingerless gloves and a statement belt. Style queen!👑",
        'zh-tw': '她的日常標配：白色短版露腰上衣，深藍滾邊，下面是深藍百褶迷你裙（有時裡面會多一層白紗）。常戴黑色或深藍的無指手套，再配上一條酷酷的皮帶，時尚icon無誤！✨'
    },
    'view-stellapaw-images': { 'vi': 'Xem Model 3D', 'en': "Peep Stellapaw's Model", 'zh-tw': '康康Stellapaw模型' },
    'stellapaw-images-title': { 'vi': 'Thư viện ảnh Stellapaw', 'en': 'Stellapaw Gallery', 'zh-tw': 'Stellapaw美圖牆' },
    'back-to-profile': { 'vi': 'Quay lại', 'en': 'Go Back', 'zh-tw': '返回婆的頁面' },
    'play-video-text': { 'vi': 'Highlight của Yukirly, click xem ngay!', 'en': "Yukirly's Highlights! Click to Play ▶️", 'zh-tw': 'Yukirly高光時刻！點我播放啦～' },
    'yukirly-welcome': { 'vi': 'Chào mừng đến thế giới của Yukirly!', 'en': "Welcome to Yukirly's World! 💖", 'zh-tw': '歡迎來到Yukirly的小天地～🎀' },
    'yukirly-intro': {
        'vi': 'Yukirly là một nhân cách khác của Stellapaw, siêu hiền, siêu ngọt ngào, lại còn mê stream game FPS như CS2 với Valorant nữa đó!',
        'en': "That's Yukirly, Stellapaw's other side! She's super gentle, sweet af, and loves streaming FPS games like CS2 & Valorant. GG! 🎮",
        'zh-tw': 'Yukirly是史黛拉帕的另一個人格啦～超級溫柔、甜度爆表，還特愛開台打CS2跟Valorant這種FPS遊戲，厲害吧！🥰'
    },
    'yukirly-origin-title': { 'vi': 'Yukirly "Ra Đời" Thế Nào?', 'en': 'Yukirly: The Origin Story', 'zh-tw': 'Yukirly的誕生秘話' },
    'yukirly-origin-text': {
        'vi': 'Yukirly là một phần sâu thẳm bên trong Stellapaw, được "đánh thức" bởi sự ấm áp và kết nối đặc biệt với Nico. Khi Yukirly "on air", sức mạnh bá đạo của vị thần kia tạm "offline", cùng với ký ức về một Stellapaw lạnh lùng, tàn khốc. Nhân cách này như một món quà moe moe, nở rộ từ sự "cảm hóa" và chỉ dành cho người đã chạm vào trái tim cô ấy thôi đó nha.',
        'en': "Yukirly's like a hidden level in Stellapaw, unlocked by Nico's warmth & special bond. When Yukirly logs in, deity-level power and those cold, ruthless Stellapaw mems go AFK. This persona? A soft gift, bloomed from being 'tamed' and only for the one who captured her heart. UwU",
        'zh-tw': 'Yukirly是藏在史黛拉帕內心深處的另一面，因為Nico的溫暖和特殊羈絆才覺醒的啦～Yukirly上線時，神明那可怕的力量會暫時休眠，冷酷史黛拉帕的記憶也會被封印。這個人格就像一份溫柔的禮物，從被「馴化」中誕生，專屬於那個打動她心的人～(｡♥‿♥｡)'
    },
    'yukirly-personality-title': { 'vi': 'Tính Cách Yukirly & "Đam Mê" Nho Nhỏ', 'en': 'Yukirly: Personality & Guilty Pleasures', 'zh-tw': 'Yukirly的性格與小確幸' },
    'yukirly-personality-text': {
        'vi': 'Trái ngược hoàn toàn với "ai kia", Yukirly là chuẩn mực của sự ngọt ngào, moe moe, có chút con nít, khiến ai cũng muốn "nựng". Đặc biệt, cô nàng mê mẩn vị ngọt thanh của socola trắng, một niềm vui đơn giản làm bừng sáng tính cách thuần khiết của mình.',
        'en': "Total opposite of Stellapaw, Yukirly is pure sweetness, super cute, a bit childish – makes ya wanna spoil her! She's a sucker for white chocolate's delicate sweetness, a simple joy that just adds to her innocent charm. 🍫💕",
        'zh-tw': '跟史黛拉帕完全相反，Yukirly就是甜美、可愛的化身，還有點孩子氣，讓人超想寵壞她！她超愛白巧克力的那種細膩甜味，這份單純的快樂讓她天真爛漫的個性更加分～😇'
    },
    'yukirly-appearance-title': { 'vi': 'Diện Mạo "Kẹo Ngọt" Của Yukirly', 'en': "Yukirly's Sweet Lewks", 'zh-tw': 'Yukirly的甜心造型' },
    'yukirly-appearance-text': {
        'vi': 'Vẫn là bé hạt tiêu 1m55, nhưng khi hóa thân thành Yukirly, một phép màu xảy ra: tóc, mắt và chiếc đuôi sói mềm mại đều chuyển sang màu hồng anh đào dịu dàng, tăng thêm độ "kawaii" khó đỡ cho cô nàng!',
        'en': "Still rockin' that 155cm height, but when she's Yukirly, it's like magic! Her hair, eyes, and fluffy wolf tail all turn a soft cherry blossom pink. Can't handle the cuteness overload! 🌸😍",
        'zh-tw': '身高一樣是嬌小的155公分，但變身Yukirly的時候，魔法就發生啦：頭髮、眼睛還有軟綿綿的狼尾巴，全都變成溫柔的櫻花粉色，可愛到讓人原地融化！💖'
    },
    'yukirly-outfit-title': { 'vi': 'Trang Phục Yukirly: "Twist" Nhẹ Nhàng', 'en': "Yukirly's Outfit: With a Twist!", 'zh-tw': 'Yukirly的穿搭小心機' },
    'yukirly-outfit-text': {
        'vi': 'Điểm thú vị là Yukirly vẫn "quẩy" nguyên set đồ crop-top trắng cá tính của Stellapaw. Tạo nên sự tương phản độc đáo: vẻ ngoài dịu dàng, ngọt ngào như hoa anh đào với mái tóc hồng lại được "mix & match" cùng bộ cánh hiện đại, có chút "phá cách" mùa đông. Chất!',
        'en': "Plot twist: Yukirly still slays in Stellapaw's signature white crop-top fit! It's a vibe: her gentle, cherry-blossom sweetness (pink hair and all) wrapped in a cool, modern outfit with a hint of edgy winter style. She makes it work! 🔥",
        'zh-tw': '超有趣的是，Yukirly還是穿著史黛拉帕那套招牌白色短版上衣！這種反差萌超讚：身體和粉毛散發著櫻花般的溫柔甜美氣息，卻套著一套又酷又現代、帶點小叛逆冬季感的個性服裝。絕配！👍'
    }
};

function updateContent(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    const translatableElements = document.querySelectorAll('[data-i18n]');
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key] && translations[key][lang]) {
            element.textContent = translations[key][lang];
        } else if (translations[key] && translations[key]['en']) {
            element.textContent = translations[key]['en'];
        }
    });
    updateTogglePersonaButton(lang);
}

function updateTogglePersonaButton(lang) {
    if (togglePersonaButton) {
        const textElement = togglePersonaButton.querySelector('.text-persona');
        const key = `toggle-persona-${currentPersona}`;
        if (textElement && translations[key] && translations[key][lang]) {
            textElement.textContent = translations[key][lang];
        } else if (textElement && translations[key] && translations[key]['en']) {
             textElement.textContent = translations[key]['en'];
        }
    }
}

// --- tuyết + anh đào đang tạm ẩn chưa sài đến ---
const snowEffectContainer = document.getElementById('snow-effect-container');
const sakuraEffectContainer = document.getElementById('sakura-effect-container');
const snowflakeImageUrls = [
    'https://imgur.com/nYMsR6L.png',
    'https://imgur.com/qEK4vFy.png',
    'https://imgur.com/QXkL2V1.png'
];
const sakuraImageUrls = [
    'https://imgur.com/aBRbOYV.png',
    'https://imgur.com/vrUjhnt.png',
    'https://imgur.com/SY2qtMN.png'
];
let particleEffects = {
    snow: { container: snowEffectContainer, images: snowflakeImageUrls, particles: [], intervalId: null, animationFrameId: null },
    sakura: { container: sakuraEffectContainer, images: sakuraImageUrls, particles: [], intervalId: null, animationFrameId: null }
};
const MAX_PARTICLES_COUNT = 8;
const PARTICLE_ADD_INTERVAL = 800;

function getRandomValue(min, max) { return Math.random() * (max - min) + min; }

function createParticleElement(effectType) {
    const effect = particleEffects[effectType];
    if (!effect || !effect.container) return null;
    const particle = document.createElement('div');
    particle.className = 'particle';
    const randomImage = effect.images[Math.floor(Math.random() * effect.images.length)];
    particle.style.backgroundImage = `url(${randomImage})`;
    const size = getRandomValue(10, effectType === 'snow' ? 20 : 30);
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.opacity = getRandomValue(0.5, 0.9);
    particle.style.left = `${getRandomValue(-size, window.innerWidth)}px`;
    particle.style.top = `-${size + 40}px`;
    particle.customData = {
        top: parseFloat(particle.style.top),
        left: parseFloat(particle.style.left),
        speedY: getRandomValue(0.3, effectType === 'snow' ? 1.5 : 1.0),
        speedX: getRandomValue(-0.15, 0.15),
        rotation: getRandomValue(0, 360),
        rotationSpeed: getRandomValue(-0.5, 0.5)
    };
    effect.container.appendChild(particle);
    effect.particles.push(particle);
    return particle;
}

function updateParticles(effectType) {
    const effect = particleEffects[effectType];
    if (!effect || !effect.container || effect.container.style.display === 'none') {
        if (effect && effect.animationFrameId) {
            cancelAnimationFrame(effect.animationFrameId);
            effect.animationFrameId = null;
        }
        return;
    }
    for (let i = effect.particles.length - 1; i >= 0; i--) {
        const p = effect.particles[i];
        if (!p.customData) { p.remove(); effect.particles.splice(i, 1); continue; }
        p.customData.top += p.customData.speedY;
        p.customData.left += p.customData.speedX;
        p.customData.rotation += p.customData.rotationSpeed;
        p.style.top = `${p.customData.top}px`;
        p.style.left = `${p.customData.left}px`;
        p.style.transform = `rotate(${p.customData.rotation}deg)`;
        if (p.customData.top > window.innerHeight + 50 || p.customData.left < -50 || p.customData.left > window.innerWidth + 50) {
            p.remove();
            effect.particles.splice(i, 1);
        }
    }
    effect.animationFrameId = requestAnimationFrame(() => updateParticles(effectType));
}

function manageParticleCreation(effectType) {
    const effect = particleEffects[effectType];
    if (!effect || !effect.container || effect.container.style.display === 'none') {
         if (effect && effect.intervalId) { clearInterval(effect.intervalId); effect.intervalId = null; }
        return;
    }
    if (effect.particles.length < MAX_PARTICLES_COUNT) { createParticleElement(effectType); }
}

function startParticleSystem(effectType) {
    const effectToStart = particleEffects[effectType];
    const effectToStop = particleEffects[effectType === 'snow' ? 'sakura' : 'snow'];
    if (effectToStop) {
        if (effectToStop.intervalId) clearInterval(effectToStop.intervalId);
        if (effectToStop.animationFrameId) cancelAnimationFrame(effectToStop.animationFrameId);
        effectToStop.intervalId = null;
        effectToStop.animationFrameId = null;
        if (effectToStop.container) { effectToStop.container.style.display = 'none'; effectToStop.container.innerHTML = ''; }
        effectToStop.particles = [];
    }
    if (effectToStart && effectToStart.container) {
        effectToStart.container.style.display = 'block';
        effectToStart.particles.forEach(p => p.remove()); effectToStart.particles = [];
        for(let i=0; i < Math.min(MAX_PARTICLES_COUNT, 3); i++) {
            createParticleElement(effectType);
        }
        if (effectToStart.intervalId) clearInterval(effectToStart.intervalId);
        effectToStart.intervalId = setInterval(() => manageParticleCreation(effectType), PARTICLE_ADD_INTERVAL);
        if (effectToStart.animationFrameId) cancelAnimationFrame(effectToStart.animationFrameId);
        effectToStart.animationFrameId = requestAnimationFrame(() => updateParticles(effectType));
    }
}

function showPersona(persona) {
    if (persona === 'stellapaw') {
        document.body.classList.remove('yukirly-theme');
        document.body.classList.add('stellapaw-theme');
        if (stellapawSection) stellapawSection.style.display = 'block';
        if (yukirlySection) yukirlySection.style.display = 'none';
        currentPersona = 'stellapaw';
        
    } else if (persona === 'yukirly') {
        document.body.classList.remove('stellapaw-theme');
        document.body.classList.add('yukirly-theme');
        if (stellapawSection) stellapawSection.style.display = 'none';
        if (yukirlySection) yukirlySection.style.display = 'block';
        currentPersona = 'yukirly';
       

        const homeTabContent = document.getElementById('yukirly-home');
        if (homeTabContent && yukirlyTabContents) {
             yukirlyTabContents.forEach(content => content.classList.remove('active'));
             homeTabContent.classList.add('active');
        }
    }
    updateTogglePersonaButton(currentLang);
}


if (languageButtons) {
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            updateContent(this.dataset.lang);
        });
    });
}
if (togglePersonaButton) {
    togglePersonaButton.addEventListener('click', function() {
        showPersona(currentPersona === 'stellapaw' ? 'yukirly' : 'stellapaw');
    });
}
if (viewImagesButton && backToProfileButton && stellapawInfoSection && stellapawGallerySection) {
    viewImagesButton.addEventListener('click', function() {
        if (stellapawInfoSection) stellapawInfoSection.style.display = 'none';
        if (viewImagesButton) viewImagesButton.style.display = 'none';
        if (stellapawGallerySection) stellapawGallerySection.style.display = 'block';
    });
    backToProfileButton.addEventListener('click', function() {
        if (stellapawGallerySection) stellapawGallerySection.style.display = 'none';
        if (stellapawInfoSection) stellapawInfoSection.style.display = 'grid';
        if (viewImagesButton) viewImagesButton.style.display = 'block';
    });
}

if (playButtonContainer && featuredVideo) {
    playButtonContainer.addEventListener('click', function() {
        this.style.display = 'none';
        featuredVideo.style.display = 'block';
        featuredVideo.play().catch(error => console.error("Video 1 play failed:", error));
    });
    if (volumeControl) {
        volumeControl.addEventListener('input', function() {
            featuredVideo.volume = this.value;
        });
    }
    if (playPauseButton1) {
        playPauseButton1.addEventListener('click', () => {
            if (featuredVideo.paused || featuredVideo.ended) {
                featuredVideo.play();
            } else {
                featuredVideo.pause();
            }
        });
        featuredVideo.addEventListener('play', () => {
            playPauseButton1.textContent = '⏸';
        });
        featuredVideo.addEventListener('pause', () => {
            playPauseButton1.textContent = '▶';
        });
        featuredVideo.addEventListener('ended', () => {
            playPauseButton1.textContent = '▶';
        });
    }
}


if (playButtonContainer2 && featuredVideo2) {
    playButtonContainer2.addEventListener('click', function() {
        this.style.display = 'none';
        featuredVideo2.style.display = 'block';
        featuredVideo2.play().catch(error => console.error("Video 2 play failed:", error));
    });
    if (volumeControl2) {
        volumeControl2.addEventListener('input', function() {
            featuredVideo2.volume = this.value;
        });
    }
    if (playPauseButton2) {
        playPauseButton2.addEventListener('click', () => {
            if (featuredVideo2.paused || featuredVideo2.ended) {
                featuredVideo2.play();
            } else {
                featuredVideo2.pause();
            }
        });
        featuredVideo2.addEventListener('play', () => {
            playPauseButton2.textContent = '⏸';
        });
        featuredVideo2.addEventListener('pause', () => {
            playPauseButton2.textContent = '▶';
        });
        featuredVideo2.addEventListener('ended', () => {
            playPauseButton2.textContent = '▶';
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    if (currentPersona === 'stellapaw') {
        document.body.classList.add('stellapaw-theme');
    } else if (currentPersona === 'yukirly') {
        document.body.classList.add('yukirly-theme');
    }
    updateContent(currentLang);
    showPersona(currentPersona);
    document.body.classList.add('translations-loaded');
});
