window.addEventListener('DOMContentLoaded', () => {
    const themes = [
        { name: "Classic", value: "classic", desc: "Clean, simple, and easy to read." },
        { name: "Dark", value: "dark", desc: "Cool dark colors for night time." },
        { name: "Neon", value: "neon", desc: "Bright neon green and pink, futuristic!" },
        { name: "Disco", value: "disco", desc: "Party colors and a disco background." },
        { name: "Ocean", value: "ocean", desc: "Blue waves and ocean vibes." },
        { name: "Sunset", value: "sunset", desc: "Warm orange and pink sunset." },
        { name: "Forest", value: "forest", desc: "Green and leafy, forest style." },
        { name: "Space", value: "space", desc: "Stars and cosmic colors." },
        { name: "Pastel", value: "pastel", desc: "Soft pastel colors and handwriting font." },
        { name: "Fire", value: "fire", desc: "Fiery reds and oranges." },
        { name: "Ice", value: "ice", desc: "Cool blues and icy feel." },
        { name: "Rainbow", value: "rainbow", desc: "All the colors of the rainbow!" },
        { name: "Lemon", value: "lemon", desc: "Yellow and fresh, like lemonade." },
        { name: "Rose", value: "rose", desc: "Pink and floral, rose garden." },
        { name: "Mint", value: "mint", desc: "Minty green and fresh." },
        { name: "Grape", value: "grape", desc: "Purple and sweet, grape style." },
        { name: "Peach", value: "peach", desc: "Soft peach and orange." },
        { name: "Sky", value: "sky", desc: "Sky blue and airy." },
        { name: "Sand", value: "sand", desc: "Beach sand colors and chill." }
    ];

    const themeBtn = document.getElementById('theme-toggle');
    const modalBg = document.getElementById('theme-modal-bg');
    const modal = document.getElementById('theme-modal');
    const themeList = document.getElementById('theme-list');
    const closeBtn = document.getElementById('theme-close');

    // Show popup
    themeBtn.onclick = () => {
        themeList.innerHTML = themes.map(t =>
            `<div class="theme-option" style="margin-bottom:16px;cursor:pointer;">
                <b>${t.name}</b><br>
                <span style="font-size:0.95em;color:#888;">${t.desc}</span>
            </div>`
        ).join('');
        modalBg.style.display = 'flex';

        // Add click listeners for each theme
        Array.from(themeList.children).forEach((el, i) => {
            el.onclick = () => {
                setTheme(themes[i].value);
                modalBg.style.display = 'none';
            };
        });
    };

    // Hide popup
    closeBtn.onclick = () => {
        modalBg.style.display = 'none';
    };
    modalBg.onclick = (e) => {
        if (e.target === modalBg) modalBg.style.display = 'none';
    };

    // Theme switch function
    function setTheme(theme) {
        document.body.className = theme;
        document.querySelector('header').className = theme;
        document.querySelectorAll('.card').forEach(el => el.className = `card ${theme}`);
        document.querySelectorAll('.modal').forEach(el => el.className = `modal ${theme}`);
        document.querySelectorAll('button').forEach(el => el.className = theme);
    }
});