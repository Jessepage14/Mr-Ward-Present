function startConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let confetti = [];
    for (let i = 0; i < 200; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * 100 + 10,
            color: `hsl(${Math.random()*360},100%,50%)`,
            tilt: Math.random() * 10 - 10
        });
    }
    let angle = 0;
    let frame = 0;
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        angle += 0.01;
        for (let i = 0; i < confetti.length; i++) {
            let c = confetti[i];
            ctx.beginPath();
            ctx.arc(c.x, c.y, c.r, 0, Math.PI*2, false);
            ctx.fillStyle = c.color;
            ctx.fill();
            c.y += Math.cos(angle + c.d) + 1 + c.r/2;
            c.x += Math.sin(angle) * 2;
            if (c.y > canvas.height) {
                c.y = -10;
                c.x = Math.random() * canvas.width;
            }
        }
        frame++;
        if (frame < 300) requestAnimationFrame(draw);
        else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    draw();
}

// Make sure the button triggers confetti even if app.js doesn't exist
window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('confetti-btn');
    if (btn) btn.onclick = startConfetti;
});